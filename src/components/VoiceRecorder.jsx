import { useEffect, useRef, useState } from 'react';
import { Mic, Square, RotateCcw, AlertTriangle, Info } from 'lucide-react';
import { createRecognizer, srSupported } from '../lib/speech.js';
import { getAudio, setAudio } from '../lib/storage.js';

const SELF = [
  { v: 0, t: 'Belum bisa' },
  { v: 1, t: 'Sebagian' },
  { v: 2, t: 'Cukup baik' },
  { v: 3, t: 'Lancar' },
];

export default function VoiceRecorder({ qid, attemptKey, value, onChange, maxSec = 90 }) {
  const [rec, setRec] = useState(false);
  const [sec, setSec] = useState(0);
  const [interim, setInterim] = useState('');
  const [err, setErr] = useState('');
  const [url, setUrl] = useState(() => getAudio(attemptKey, qid) || '');
  const mr = useRef(null);
  const sr = useRef(null);
  const timer = useRef(null);
  const stream = useRef(null);
  const valRef = useRef(value);
  valRef.current = value;

  useEffect(() => { setUrl(getAudio(attemptKey, qid) || ''); setErr(''); setInterim(''); }, [qid, attemptKey]);
  useEffect(() => () => cleanup(), []);

  function cleanup() {
    clearInterval(timer.current);
    try { mr.current?.state === 'recording' && mr.current.stop(); } catch { /* noop */ }
    sr.current?.stop();
    stream.current?.getTracks().forEach((t) => t.stop());
  }

  async function start() {
    setErr(''); setInterim(''); setSec(0);
    onChange({ ...(valRef.current || {}), transcript: '' });
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('nomedia');
      stream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (window.MediaRecorder) {
        const chunks = [];
        const m = new MediaRecorder(stream.current);
        m.ondataavailable = (e) => e.data.size && chunks.push(e.data);
        m.onstop = () => {
          const u = URL.createObjectURL(new Blob(chunks, { type: m.mimeType || 'audio/webm' }));
          setUrl(u); setAudio(attemptKey, qid, u);
        };
        m.start();
        mr.current = m;
      }
    } catch (e) {
      setErr(location.protocol !== 'https:' && location.hostname !== 'localhost'
        ? 'Mikrofon hanya dapat digunakan di alamat HTTPS.'
        : 'Izin mikrofon ditolak atau tidak tersedia. Izinkan mikrofon di pengaturan browser.');
      return;
    }
    if (srSupported) {
      sr.current = createRecognizer({
        onText: (final, inter) => { onChange({ ...(valRef.current || {}), transcript: final }); setInterim(inter); },
        onError: (e) => { if (e !== 'no-speech' && e !== 'aborted') setErr('Pengenalan suara terganggu (' + e + '). Anda tetap bisa menilai diri sendiri di bawah.'); },
      });
      try { sr.current.start(); } catch { /* noop */ }
    }
    setRec(true);
    timer.current = setInterval(() => setSec((s) => { if (s + 1 >= maxSec) stop(); return s + 1; }), 1000);
  }

  function stop() {
    clearInterval(timer.current);
    setRec(false); setInterim('');
    try { mr.current?.state === 'recording' && mr.current.stop(); } catch { /* noop */ }
    sr.current?.stop();
    stream.current?.getTracks().forEach((t) => t.stop());
  }

  const transcript = value?.transcript || '';
  const showSelf = !rec && (url || sec > 0) && (!srSupported || !transcript);
  const mm = `${String(Math.floor(sec / 60)).padStart(1, '0')}:${String(sec % 60).padStart(2, '0')}`;

  return (
    <div className="rec">
      <button className={`mic${rec ? ' on' : ''}`} onClick={rec ? stop : start} aria-label={rec ? 'Berhenti merekam' : 'Mulai merekam'}>
        {rec ? <Square size={26} fill="#fff" /> : <Mic size={32} />}
      </button>
      <div>
        <div className="rec-time">{rec ? `● Merekam ${mm}` : url ? 'Rekaman tersimpan' : 'Siap merekam'}</div>
        <div className="rec-status">{rec ? 'Bicara dengan jelas dalam bahasa Inggris, lalu tekan berhenti.' : 'Tekan tombol mikrofon untuk mulai.'}</div>
      </div>

      {srSupported && (rec || transcript) && (
        <div className="transcript" aria-live="polite">
          <div className="transcript-label">Transkrip otomatis</div>
          {transcript} <span className="interim">{interim}</span>
          {!transcript && !interim && <span className="interim">Mendengarkan…</span>}
        </div>
      )}

      {url && !rec && (
        <>
          <audio controls src={url} />
          <button className="btn btn-ghost btn-sm" onClick={start}><RotateCcw size={16} />Rekam ulang</button>
        </>
      )}

      {err && <div className="notice"><AlertTriangle size={18} />{err}</div>}
      {!srSupported && !url && (
        <div className="notice info"><Info size={18} />Browser ini belum mendukung penilaian suara otomatis (gunakan Chrome untuk nilai otomatis). Setelah merekam, nilai jawaban Anda sendiri.</div>
      )}

      {showSelf && (
        <div className="self-rate">
          <b>Penilaian mandiri</b>
          <div className="muted" style={{ fontSize: 13.5 }}>Dengarkan rekaman Anda, lalu pilih yang paling sesuai.</div>
          <div className="scale">
            {SELF.map((s) => (
              <button key={s.v} className={value?.self === s.v ? 'sel' : ''} onClick={() => onChange({ ...(value || {}), self: s.v })}>
                <b>{s.v}</b>{s.t}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

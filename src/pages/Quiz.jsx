import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft, Send, Timer, ListChecks, Play, Headphones, Mic, Info, AlertTriangle, Flag, RotateCcw } from 'lucide-react';
import { getGroup, getSet } from '../data/index.js';
import QuestionView from '../components/QuestionView.jsx';
import { GroupIcon, Modal } from '../components/ui.jsx';
import { gradeAttempt } from '../lib/scoring.js';
import { moveAudio, saveAttempt } from '../lib/storage.js';
import { stopSpeak } from '../lib/speech.js';

const isAnswered = (q, v) => {
  if (q.type === 'mcq' || q.type === 'tf') return v !== undefined && v !== null;
  if (q.type === 'write') return !!(v && v.trim());
  if (q.type === 'speak') return !!(v && (v.transcript || typeof v.self === 'number'));
  return false;
};

export default function Quiz({ name }) {
  const { setId } = useParams();
  const set = getSet(setId);
  const nav = useNavigate();
  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [ragu, setRagu] = useState({}); // { [qid]: true } — hanya selama mengerjakan
  const [visited, setVisited] = useState({}); // soal yang sudah ditinggalkan
  const [dialog, setDialog] = useState(null); // 'blocked' | 'confirm' | 'error'
  const [left, setLeft] = useState((set?.minutes || 0) * 60);
  const draftKey = useMemo(() => `draft-${setId}-${Date.now()}`, [setId]);
  const answersRef = useRef(answers);
  answersRef.current = answers;

  useEffect(() => {
    if (!started || !set?.timed) return;
    const t = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [started, set]);
  // Waktu habis: kirim apa adanya (tanpa syarat lengkap). '=== 0' agar tidak terpanggil tiap detik bila gagal simpan.
  useEffect(() => { if (set?.timed && started && left === 0) submit(); }, [left]); // eslint-disable-line
  useEffect(() => { stopSpeak(); }, [idx]);
  useEffect(() => {
    if (!started) return;
    const h = (e) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', h);
    return () => window.removeEventListener('beforeunload', h);
  }, [started]);

  if (!set) return <Navigate to="/" replace />;
  const group = getGroup(set.group);
  const qs = set.questions;
  const q = qs[idx];
  const done = qs.filter((x) => isAnswered(x, answers[x.id])).length;
  const isTry = set.group === 'tryout';
  const has = (t) => qs.some((x) => x.type === t || (t === 'listen' && x.audio));
  const go = (i) => { setVisited((v) => ({ ...v, [q.id]: true })); setIdx(i); };
  const status = (x, i) => {
    if (ragu[x.id]) return 'ragu';
    if (isAnswered(x, answers[x.id])) return 'done';
    return visited[x.id] && i !== idx ? 'skip' : '';
  };
  const empty = qs.map((x, i) => i).filter((i) => !isAnswered(qs[i], answers[qs[i].id]));
  const doubt = qs.map((x, i) => i).filter((i) => ragu[qs[i].id]);
  const STATUS_LABEL = { ragu: ', ragu-ragu', done: ', sudah dijawab', skip: ', dilewati' };
  const dot = (i, onClick) => {
    const x = qs[i];
    const st = status(x, i);
    return (
      <button key={x.id} className={`qdot ${st}${i === idx ? ' cur' : ''}`} onClick={onClick} aria-label={`Soal ${i + 1}${STATUS_LABEL[st] || ''}`}>
        {x.type === 'speak' ? <Mic size={13} /> : x.audio ? <Headphones size={13} /> : i + 1}
      </button>
    );
  };

  function submit() {
    stopSpeak();
    const res = gradeAttempt(set, answersRef.current);
    const id = `${set.id}-${Date.now().toString(36)}`;
    const ok = saveAttempt({
      id, setId: set.id, group: set.group, title: set.title, name, ts: Date.now(),
      answers: answersRef.current, pct: res.pct, level: res.level, earned: res.earned, total: res.total,
      byLevel: res.byLevel, bySkill: res.bySkill, items: res.items,
    });
    if (!ok) { setDialog('error'); return; }
    moveAudio(draftKey, id);
    nav(`/result/${id}`, { replace: true });
  }

  if (!started) {
    return (
      <main className="container narrow">
        <Link to={isTry ? '/' : `/group/${set.group}`} className="back"><ArrowLeft size={18} />Kembali</Link>
        <div className="card">
          <div className="page-head" style={{ marginBottom: 14 }}>
            <GroupIcon group={group} size={26} />
            <div><h1 style={{ margin: 0, fontSize: 24 }}>{set.title}</h1><p>{set.subtitle}</p></div>
          </div>
          <div className="meta" style={{ marginBottom: 16 }}>
            <span><ListChecks size={16} />{qs.length} soal</span>
            <span><Timer size={16} />{set.timed ? `${set.minutes} menit (berwaktu)` : `± ${set.minutes} menit`}</span>
          </div>
          <h3>Petunjuk</h3>
          <ul className="muted" style={{ paddingLeft: 20, marginTop: 4 }}>
            <li>Soal berjenjang dari <b>Pre-A1</b> sampai <b>B1</b>.</li>
            <li>Anda bisa berpindah soal dengan tombol atau nomor soal. Tandai soal yang belum yakin dengan <b>Ragu-ragu</b>.</li>
            <li>Jawaban baru bisa dikirim setelah <b>semua soal dijawab</b> dan tidak ada tanda ragu-ragu.</li>
            {has('listen') && <li>Soal Listening: tekan <b>Putar</b> untuk mendengar audio. Boleh diulang dan diperlambat.</li>}
            {has('speak') && <li>Soal Speaking: tekan <b>mikrofon</b>, jawab dalam bahasa Inggris, lalu tekan berhenti.</li>}
            {has('write') && <li>Soal Writing: perhatikan target jumlah kata, huruf kapital, dan tanda baca.</li>}
            {set.timed && <li>Jawaban otomatis dikirim saat waktu habis.</li>}
            <li>Setelah selesai, Anda mendapat <b>estimasi level CEFR</b> dan <b>pembahasan</b> setiap soal.</li>
          </ul>
          {(has('listen') || has('speak')) && (
            <div className="notice info mt"><Info size={18} /><span>Gunakan <b>Google Chrome</b> dan earphone untuk hasil terbaik.{has('speak') && ' Izinkan akses mikrofon saat diminta.'}</span></div>
          )}
          <button className="btn btn-primary btn-block mt-lg" onClick={() => setStarted(true)}><Play size={18} />Mulai sekarang</button>
        </div>
      </main>
    );
  }

  const mm = Math.max(0, Math.floor(left / 60));
  const ss = Math.max(0, left % 60);

  return (
    <main className="container narrow">
      <div className="quiz-top">
        <div className="quiz-top-row">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            {group && <GroupIcon group={getGroup(q.skill) || group} size={16} box={false} />}{set.title}
          </span>
          {set.timed
            ? <span className={`timer${left < 300 ? ' warn' : ''}`}><Timer size={15} />{String(mm).padStart(2, '0')}:{String(ss).padStart(2, '0')}</span>
            : <span>{done}/{qs.length} terjawab</span>}
        </div>
        <div className="progress" aria-label="Progres"><div style={{ width: `${((idx + 1) / qs.length) * 100}%` }} /></div>
      </div>

      <QuestionView key={q.id} q={q} index={idx} total={qs.length} value={answers[q.id]} attemptKey={draftKey} showSkill={isTry}
        onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))} />

      <div className="qdots" aria-label="Nomor soal">
        {qs.map((x, i) => dot(i, () => go(i)))}
      </div>
      <div className="qlegend" aria-hidden>
        <span><i className="done" />Dijawab</span><span><i className="ragu" />Ragu-ragu</span><span><i className="skip" />Dilewati</span><span><i />Belum dibuka</span>
      </div>

      <div className="quiz-nav">
        <div className="quiz-nav-in">
          <button className="btn btn-secondary btn-prev" disabled={idx === 0} onClick={() => go(idx - 1)} aria-label="Sebelumnya"><ChevronLeft size={18} /><span className="lbl">Sebelumnya</span></button>
          <button className={`btn btn-ragu${ragu[q.id] ? ' on' : ''}`} aria-pressed={!!ragu[q.id]} onClick={() => setRagu((r) => ({ ...r, [q.id]: !r[q.id] }))}><Flag size={18} />Ragu-ragu</button>
          <span className="spacer" />
          {idx < qs.length - 1
            ? <button className="btn btn-primary" onClick={() => go(idx + 1)}>Berikutnya<ArrowRight size={18} /></button>
            : <button className="btn btn-primary" onClick={() => setDialog(empty.length || doubt.length ? 'blocked' : 'confirm')}><Send size={18} />Kirim</button>}
        </div>
      </div>

      {dialog === 'blocked' && (
        <Modal onClose={() => setDialog(null)}>
          <h3>Belum bisa dikirim</h3>
          <div className="notice" style={{ marginBottom: 14 }}><AlertTriangle size={18} style={{ flex: 'none' }} />Semua soal harus dijawab dan tidak boleh ada tanda ragu-ragu. Ketuk nomor soal untuk menuju soal tersebut.</div>
          {empty.length > 0 && <><b>{empty.length} soal belum dijawab</b><div className="qdots" style={{ margin: '8px 0 14px' }}>{empty.map((i) => dot(i, () => { setDialog(null); go(i); }))}</div></>}
          {doubt.length > 0 && <><b>{doubt.length} soal masih ragu-ragu</b><div className="qdots" style={{ margin: '8px 0 14px' }}>{doubt.map((i) => dot(i, () => { setDialog(null); go(i); }))}</div></>}
          <button className="btn btn-primary btn-block" onClick={() => setDialog(null)}>Kembali mengerjakan</button>
        </Modal>
      )}
      {dialog === 'confirm' && (
        <Modal onClose={() => setDialog(null)}>
          <h3>Kirim jawaban?</h3>
          <p className="muted">Semua {qs.length} soal sudah dijawab. Setelah dikirim, jawaban tidak bisa diubah. Anda akan melihat hasil dan pembahasan.</p>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={submit}><Send size={18} />Ya, kirim</button>
            <button className="btn btn-ghost" onClick={() => setDialog(null)}>Periksa lagi</button>
          </div>
        </Modal>
      )}
      {dialog === 'error' && (
        <Modal onClose={() => setDialog(null)}>
          <h3>Gagal menyimpan jawaban</h3>
          <div className="notice err" style={{ marginBottom: 14 }}><AlertTriangle size={18} style={{ flex: 'none' }} />Browser menolak menyimpan hasil (penyimpanan penuh atau mode penyamaran/privat). Jawaban Anda masih ada di halaman ini — jangan tutup atau muat ulang halaman.</div>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={submit}><RotateCcw size={18} />Coba lagi</button>
            <button className="btn btn-ghost" onClick={() => setDialog(null)}>Tutup</button>
          </div>
        </Modal>
      )}
    </main>
  );
}

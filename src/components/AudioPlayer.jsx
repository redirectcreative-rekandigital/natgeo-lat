import { useEffect, useState } from 'react';
import { Play, Square, Turtle, AlertTriangle } from 'lucide-react';
import { speak, stopSpeak, ttsSupported } from '../lib/speech.js';

export default function AudioPlayer({ audio, qid }) {
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => { setCount(0); setPlaying(false); return () => stopSpeak(); }, [qid]);

  if (!ttsSupported) {
    return <div className="notice"><AlertTriangle size={18} />Browser ini tidak mendukung audio otomatis. Gunakan Google Chrome terbaru.</div>;
  }

  const play = async (rate) => {
    if (playing) { stopSpeak(); setPlaying(false); return; }
    setPlaying(true); setCount((c) => c + 1);
    await speak(audio, { rate });
    setPlaying(false);
  };
  const isDialog = Array.isArray(audio);

  return (
    <div className="audio">
      <button className="play" onClick={() => play(0.92)} aria-label={playing ? 'Hentikan audio' : 'Putar audio'}>
        {playing ? <Square size={22} fill="#fff" /> : <Play size={26} fill="#fff" style={{ marginLeft: 3 }} />}
      </button>
      <div className="audio-info">
        <b>{isDialog ? 'Dengarkan dialog' : 'Dengarkan audio'}{playing && <span className="wave" aria-hidden><i /><i /><i /><i /></span>}</b>
        <span>{count === 0 ? 'Tekan tombol untuk memutar. Boleh diulang.' : `Diputar ${count}×`}</span>
      </div>
      <button className="btn btn-ghost btn-sm" onClick={() => play(0.7)} disabled={playing}><Turtle size={18} />Pelan</button>
    </div>
  );
}

import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Home, RotateCcw } from 'lucide-react';
import { getAttempt, getAudio } from '../lib/storage.js';
import { getSet } from '../data/index.js';
import { ReviewItem } from '../components/QuestionView.jsx';
import { LevelBadge, pctText } from '../components/ui.jsx';
import { LEVELS, LEVEL_LABEL } from '../lib/scoring.js';

export default function Review() {
  const { aid } = useParams();
  const a = getAttempt(aid);
  const [filter, setFilter] = useState('all');
  if (!a) return <Navigate to="/history" replace />;
  const set = getSet(a.setId);
  if (!set) return <Navigate to="/history" replace />;
  const resById = Object.fromEntries(a.items.map((i) => [i.id, i]));
  const isTry = a.group === 'tryout';

  const list = set.questions.map((q, i) => ({ q, i })).filter(({ q }) => {
    const s = resById[q.id]?.score ?? 0;
    if (filter === 'wrong') return s < 0.999;
    if (LEVELS.includes(filter)) return q.level === filter;
    return true;
  });
  const wrongCount = set.questions.filter((q) => (resById[q.id]?.score ?? 0) < 0.999).length;

  return (
    <main className="container narrow">
      <Link to={`/result/${a.id}`} className="back"><ArrowLeft size={18} />Kembali ke hasil</Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
        <h1 style={{ margin: 0 }}>Pembahasan</h1>
        <LevelBadge level={a.level} /> <span className="muted">{pctText(a.pct)}</span>
      </div>
      <p className="muted">{a.title}. Baca penjelasan tiap soal untuk memahami jawaban yang benar.</p>

      <div className="filter-row" role="tablist">
        <button className={`chip${filter === 'all' ? ' on' : ''}`} onClick={() => setFilter('all')}>Semua ({set.questions.length})</button>
        <button className={`chip${filter === 'wrong' ? ' on' : ''}`} onClick={() => setFilter('wrong')}>Perlu dipelajari ({wrongCount})</button>
        {LEVELS.map((lv) => <button key={lv} className={`chip${filter === lv ? ' on' : ''}`} onClick={() => setFilter(lv)}>{LEVEL_LABEL[lv]}</button>)}
      </div>

      {list.length === 0 && <div className="card empty">Tidak ada soal pada filter ini. 🎉</div>}
      {list.map(({ q, i }) => (
        <ReviewItem key={q.id} q={q} index={i} ans={a.answers[q.id]} res={resById[q.id]} attemptAudio={getAudio(a.id, q.id)} showSkill={isTry} />
      ))}

      <div className="btn-row mt-lg">
        <Link to={`/quiz/${set.id}`} className="btn btn-primary"><RotateCcw size={18} />Ulangi latihan</Link>
        <Link to="/" className="btn btn-ghost"><Home size={18} />Beranda</Link>
      </div>
    </main>
  );
}

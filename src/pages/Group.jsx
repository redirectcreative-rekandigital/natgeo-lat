import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ListChecks, Timer, Play, RotateCcw } from 'lucide-react';
import { getGroup, getSetsByGroup } from '../data/index.js';
import { GroupIcon, LevelBadge, pctText } from '../components/ui.jsx';
import { getHistory } from '../lib/storage.js';

export default function Group() {
  const { gid } = useParams();
  const group = getGroup(gid);
  if (!group) return <Navigate to="/" replace />;
  const sets = getSetsByGroup(gid);
  const hist = getHistory();

  return (
    <main className="container">
      <Link to="/" className="back"><ArrowLeft size={18} />Beranda</Link>
      <div className="page-head">
        <GroupIcon group={group} size={26} />
        <div><h1 style={{ margin: 0 }}>{group.name}</h1><p>{group.desc}</p></div>
      </div>
      <div className="grid">
        {sets.map((s) => {
          const last = hist.find((a) => a.setId === s.id);
          return (
            <div key={s.id} className="card set-card">
              <div>
                <h3 style={{ marginBottom: 2 }}>{s.title}</h3>
                <div className="muted" style={{ fontSize: 14.5 }}>{s.subtitle}</div>
              </div>
              <div className="meta">
                <span><ListChecks size={16} />{s.questions.length} soal</span>
                <span><Timer size={16} />± {s.minutes} menit</span>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <LevelBadge level="preA1" /><LevelBadge level="A1" /><LevelBadge level="A2" /><LevelBadge level="B1" />
              </div>
              {last && <div className="last-score">Hasil terakhir: <b>{pctText(last.pct)}</b> <LevelBadge level={last.level} /></div>}
              <Link to={`/quiz/${s.id}`} className="btn btn-primary">{last ? <><RotateCcw size={18} />Ulangi latihan</> : <><Play size={18} />Mulai latihan</>}</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

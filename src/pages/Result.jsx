import { Link, useParams, Navigate } from 'react-router-dom';
import { Lightbulb, RotateCcw, Home, Printer, TrendingUp, Award } from 'lucide-react';
import { getAttempt } from '../lib/storage.js';
import { getGroup, getSet, GROUPS } from '../data/index.js';
import { LEVELS, LEVEL_DESC, LEVEL_LABEL, PASS } from '../lib/scoring.js';
import { GroupIcon, LevelBadge, ProgressRing, fmtDate, pctText } from '../components/ui.jsx';

const LV_COLOR = { preA1: 'var(--lv-preA1)', A1: 'var(--lv-A1)', A2: 'var(--lv-A2)', B1: 'var(--lv-B1)' };

export default function Result() {
  const { aid } = useParams();
  const a = getAttempt(aid);
  if (!a) return <Navigate to="/history" replace />;
  const set = getSet(a.setId);
  const group = getGroup(a.group);
  const isTry = a.group === 'tryout';
  const next = LEVELS[LEVELS.indexOf(a.level) + 1] || (a.level === 'below' ? 'preA1' : null);
  const weakSkill = isTry ? Object.entries(a.bySkill).sort((x, y) => x[1].pct - y[1].pct)[0] : null;
  const msg = a.pct >= 0.85 ? 'Luar biasa!' : a.pct >= 0.6 ? 'Bagus!' : a.pct >= 0.4 ? 'Terus berlatih!' : 'Semangat, mulai dari dasar!';

  return (
    <main className="container narrow">
      <div className="card result-hero">
        <div className="muted" style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <GroupIcon group={group} size={16} box={false} />{a.title} · {fmtDate(a.ts)}
        </div>
        <div className="ring">
          <ProgressRing value={a.pct} />
          <div className="ring-val"><div><b>{Math.round(a.pct * 100)}</b><span>skor dari 100</span></div></div>
        </div>
        <h2 style={{ marginBottom: 4 }}>{msg} {a.name?.split(' ')[0]}</h2>
        <div className="muted" style={{ fontSize: 14 }}>Estimasi level CEFR Anda</div>
        <div className="level-big"><LevelBadge level={a.level} large /></div>
        <p className="level-desc">{LEVEL_DESC[a.level]}</p>
        <div className="muted" style={{ fontSize: 13 }}>Poin {Number(a.earned).toFixed(1).replace('.0', '')} dari {a.total} soal</div>
      </div>

      <div className="card mt">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Award size={18} color="var(--blue-600)" />Skor per Level</h3>
        <div className="bars mt">
          {LEVELS.map((lv) => {
            const b = a.byLevel[lv];
            if (!b) return null;
            return (
              <div className="bar-row" key={lv}>
                <span className="name"><LevelBadge level={lv} /></span>
                <div className="bar"><div style={{ width: pctText(b.pct), background: b.pct >= PASS ? LV_COLOR[lv] : 'var(--amber)' }} /><span className="pass" /></div>
                <span className="pct">{pctText(b.pct)}</span>
              </div>
            );
          })}
        </div>
        <p className="legend-note">Garis tipis = batas lulus level 60%.</p>
      </div>

      {isTry && (
        <div className="card mt">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TrendingUp size={18} color="var(--blue-600)" />Skor per Keterampilan</h3>
          <div className="bars mt">
            {GROUPS.map((g) => {
              const b = a.bySkill[g.id];
              if (!b) return null;
              return (
                <div className="bar-row" key={g.id} style={{ gridTemplateColumns: '150px 1fr 48px' }}>
                  <span className="name"><GroupIcon group={g} size={16} box={false} />{g.name}</span>
                  <div className="bar"><div style={{ width: pctText(b.pct), background: g.color }} /></div>
                  <span className="pct">{pctText(b.pct)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="card mt">
        <h3>Rekomendasi</h3>
        <div className="reco"><Lightbulb size={18} />
          <div className="muted">
            {next ? <>Target berikutnya: <b>{LEVEL_LABEL[next]}</b>. Pelajari pembahasan soal level {LEVEL_LABEL[next]} yang belum tepat, lalu ulangi latihan.</> : <>Anda sudah mencapai level tertinggi latihan ini (B1). Pertahankan dengan Tryout secara berkala.</>}
            {weakSkill && <> Keterampilan yang paling perlu ditingkatkan: <b>{getGroup(weakSkill[0])?.name}</b> ({pctText(weakSkill[1].pct)}).</>}
          </div>
        </div>
      </div>

      <div className="btn-row mt-lg no-print">
        <Link to={`/review/${a.id}`} className="btn btn-primary" style={{ flex: '1 1 220px' }}><Lightbulb size={18} />Lihat Pembahasan</Link>
        {set && <Link to={`/quiz/${set.id}`} className="btn btn-secondary" style={{ flex: '1 1 160px' }}><RotateCcw size={18} />Ulangi</Link>}
        <button className="btn btn-ghost" onClick={() => window.print()}><Printer size={18} />Cetak</button>
        <Link to="/" className="btn btn-ghost"><Home size={18} />Beranda</Link>
      </div>
    </main>
  );
}

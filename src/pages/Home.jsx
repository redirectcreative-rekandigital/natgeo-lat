import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid, Trophy, Timer, ListChecks } from 'lucide-react';
import { GROUPS, TRYOUT_GROUP, getSetsByGroup } from '../data/index.js';
import { GroupIcon, LevelBadge } from '../components/ui.jsx';
import { getHistory } from '../lib/storage.js';
import { LEVELS } from '../lib/scoring.js';

export default function Home({ name }) {
  const hist = getHistory();
  const lastBy = (g) => hist.find((a) => a.group === g);
  const best = hist.reduce((b, a) => (LEVELS.indexOf(a.level) > LEVELS.indexOf(b) ? a.level : b), 'below');
  const hour = new Date().getHours();
  const greet = hour < 11 ? 'Selamat pagi' : hour < 15 ? 'Selamat siang' : hour < 18 ? 'Selamat sore' : 'Selamat malam';
  const tryout = getSetsByGroup('tryout');
  const lastTry = lastBy('tryout');

  return (
    <main className="container">
      <section className="hero">
        <div>
          <div className="hero-greet">{greet}</div>
          <h1>Halo, {name.split(' ')[0]} 👋</h1>
          <p className="muted" style={{ margin: 0 }}>Pilih keterampilan untuk berlatih. Setiap latihan memberi estimasi level CEFR dan pembahasan lengkap.</p>
        </div>
        <div className="stats">
          <div className="stat"><b>{hist.length}</b><span>Latihan selesai</span></div>
          <div className="stat"><b>{hist.length ? Math.round(hist.reduce((s, a) => s + a.pct, 0) / hist.length * 100) + '%' : '–'}</b><span>Rata-rata skor</span></div>
          <div className="stat"><b style={{ fontSize: 18, paddingTop: 3 }}>{hist.length ? <LevelBadge level={best} /> : '–'}</b><span>Level tertinggi</span></div>
        </div>
      </section>

      <h2 className="section-title"><LayoutGrid size={20} color="var(--blue-600)" />Latihan per Keterampilan</h2>
      <div className="grid grid-3">
        {GROUPS.map((g) => {
          const last = lastBy(g.id);
          const n = getSetsByGroup(g.id).length;
          return (
            <Link key={g.id} to={`/group/${g.id}`} className="card group-card">
              <div className="group-top">
                <GroupIcon group={g} />
                <div><h3>{g.name}</h3><div className="sub">{g.label}</div></div>
              </div>
              <p>{g.desc}</p>
              <div className="group-foot">
                <span>{last ? <>Terakhir: <LevelBadge level={last.level} /></> : `${n} paket · 12 soal`}</span>
                <span className="go">Mulai<ChevronRight size={16} /></span>
              </div>
            </Link>
          );
        })}
        <Link to={tryout.length === 1 ? `/quiz/${tryout[0].id}` : '/group/tryout'} className="card group-card tryout-card">
          <div className="group-top">
            <GroupIcon group={TRYOUT_GROUP} />
            <div><h3>{TRYOUT_GROUP.name}</h3><div className="sub">{TRYOUT_GROUP.label}</div></div>
          </div>
          <p>{TRYOUT_GROUP.desc}</p>
          <div className="group-foot">
            <span style={{ display: 'inline-flex', gap: 10 }}>
              {lastTry ? <>Terakhir: <LevelBadge level={lastTry.level} /></> : <><span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><ListChecks size={15} />40 soal</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Timer size={15} />45 mnt</span></>}
            </span>
            <span className="go">Mulai<ChevronRight size={16} /></span>
          </div>
        </Link>
      </div>

      <h2 className="section-title"><Trophy size={20} color="var(--blue-600)" />Tentang Level CEFR</h2>
      <div className="card">
        <div className="grid" style={{ gap: 16 }}>
          {[
            ['preA1', 'Kata & frasa sangat dasar: nama, angka, warna, benda.'],
            ['A1', 'Kalimat sederhana tentang diri, keluarga, rutinitas.'],
            ['A2', 'Informasi sehari-hari, pengalaman lampau, rencana.'],
            ['B1', 'Pendapat beralasan, cerita, teks lebih panjang.'],
          ].map(([lv, t]) => (
            <div key={lv} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <LevelBadge level={lv} /><span className="muted" style={{ fontSize: 14.5 }}>{t}</span>
            </div>
          ))}
        </div>
        <p className="legend-note" style={{ marginBottom: 0 }}>Level dianggap tercapai bila skor pada level itu dan semua level di bawahnya ≥ 60%.</p>
      </div>
    </main>
  );
}

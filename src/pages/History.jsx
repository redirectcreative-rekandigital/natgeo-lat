import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, History as HistoryIcon, Trash2 } from 'lucide-react';
import { clearHistory, getHistory } from '../lib/storage.js';
import { getGroup } from '../data/index.js';
import { GroupIcon, LevelBadge, Modal, fmtDate, pctText } from '../components/ui.jsx';

export default function History() {
  const [list, setList] = useState(getHistory());
  const [ask, setAsk] = useState(false);

  return (
    <main className="container narrow">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>Riwayat Latihan</h1>
        {list.length > 0 && <button className="btn btn-danger btn-sm" onClick={() => setAsk(true)}><Trash2 size={16} />Hapus</button>}
      </div>
      {list.length === 0 ? (
        <div className="card empty">
          <HistoryIcon size={48} />
          <p>Belum ada latihan. Mulai latihan pertama Anda dari beranda.</p>
          <Link to="/" className="btn btn-primary">Ke Beranda</Link>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {list.map((a) => {
            const g = getGroup(a.group);
            return (
              <Link key={a.id} to={`/result/${a.id}`} className="hist-item">
                {g && <GroupIcon group={g} size={20} />}
                <div className="hist-main"><b>{a.title}</b><span>{fmtDate(a.ts)}</span></div>
                <LevelBadge level={a.level} />
                <span className="hist-score">{pctText(a.pct)}</span>
                <ChevronRight size={18} color="var(--ink-3)" />
              </Link>
            );
          })}
        </div>
      )}
      {ask && (
        <Modal onClose={() => setAsk(false)}>
          <h3>Hapus semua riwayat?</h3>
          <p className="muted">Riwayat di perangkat ini akan dihapus permanen.</p>
          <div className="btn-row">
            <button className="btn btn-danger" onClick={() => { clearHistory(); setList([]); setAsk(false); }}><Trash2 size={18} />Hapus</button>
            <button className="btn btn-ghost" onClick={() => setAsk(false)}>Batal</button>
          </div>
        </Modal>
      )}
    </main>
  );
}

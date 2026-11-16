import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Home, History, LogOut, Pencil } from 'lucide-react';
import { Logo, Modal } from './ui.jsx';
import { clearName, getName, setName } from '../lib/storage.js';

export default function Header({ name, onName }) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(name);
  const nav = useNavigate();
  const initials = name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <header className="header">
      <div className="header-in">
        <Link to="/" className="brand" aria-label="Beranda NatGeo CEFR Practice">
          <Logo />
          <span className="brand-text"><b>NatGeo CEFR Practice</b><small>SD Muhammadiyah Wonorejo</small></span>
        </Link>
        <nav className="header-nav">
          <NavLink to="/" end className="nav-btn" aria-label="Beranda"><Home size={20} /><span className="lbl">Beranda</span></NavLink>
          <NavLink to="/history" className="nav-btn" aria-label="Riwayat"><History size={20} /><span className="lbl">Riwayat</span></NavLink>
          <button className="user-chip" onClick={() => { setVal(getName()); setOpen(true); }} aria-label={`Profil ${name}`}>
            <span className="avatar">{initials || '?'}</span><span className="nm">{name}</span>
          </button>
        </nav>
      </div>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h3>Profil</h3>
          <p className="muted">Nama tampil di beranda dan lembar hasil.</p>
          <div className="field">
            <label htmlFor="pname">Nama</label>
            <input id="pname" className="input" value={val} maxLength={40} onChange={(e) => setVal(e.target.value)} />
          </div>
          <div className="btn-row">
            <button className="btn btn-primary" disabled={val.trim().length < 2}
              onClick={() => { setName(val); onName(val.trim()); setOpen(false); }}><Pencil size={18} />Simpan</button>
            <button className="btn btn-danger" onClick={() => { clearName(); onName(''); setOpen(false); nav('/'); }}><LogOut size={18} />Ganti pengguna</button>
          </div>
        </Modal>
      )}
    </header>
  );
}

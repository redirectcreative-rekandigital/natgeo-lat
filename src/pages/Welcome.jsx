import { useState } from 'react';
import { ArrowRight, BookOpen, Headphones, Mic, PenLine, Trophy } from 'lucide-react';
import { Logo } from '../components/ui.jsx';
import { setName } from '../lib/storage.js';

export default function Welcome({ onDone }) {
  const [val, setVal] = useState('');
  const [err, setErr] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const n = val.trim().replace(/\s+/g, ' ');
    if (n.length < 2) return setErr('Nama minimal 2 karakter.');
    setName(n); onDone(n);
  };

  return (
    <main className="welcome">
      <div className="card welcome-card">
        <Logo className="welcome-logo" />
        <h1>NatGeo CEFR Practice</h1>
        <p className="lead">Latihan soal CEFR <b>Pre-A1 – B1</b> untuk guru SD Muhammadiyah Wonorejo</p>
        <form onSubmit={submit} noValidate>
          <div className="field">
            <label htmlFor="name">Nama lengkap</label>
            <input id="name" className="input" autoFocus autoComplete="name" maxLength={40} placeholder="Contoh: Siti Aminah"
              value={val} onChange={(e) => { setVal(e.target.value); setErr(''); }} aria-invalid={!!err} />
            {err && <div className="err">{err}</div>}
          </div>
          <button className="btn btn-primary btn-block" type="submit">Mulai Latihan <ArrowRight size={20} /></button>
        </form>
        <div className="feature-row" aria-hidden>
          <span><BookOpen size={15} />Reading</span>
          <span><Headphones size={15} />Listening</span>
          <span><Mic size={15} />Speaking</span>
          <span><PenLine size={15} />Writing</span>
          <span><Trophy size={15} />Tryout</span>
        </div>
        <p className="foot-note">Tanpa akun. Nama & hasil tersimpan di perangkat ini saja.</p>
      </div>
    </main>
  );
}

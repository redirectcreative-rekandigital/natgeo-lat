import { BookOpen, Headphones, Mic, SpellCheck, PenLine, Trophy } from 'lucide-react';
import { LEVEL_LABEL } from '../lib/scoring.js';

export const ICONS = { BookOpen, Headphones, Mic, SpellCheck, PenLine, Trophy };

export function GroupIcon({ group, size = 24, box = true }) {
  const I = ICONS[group.icon] || BookOpen;
  if (!box) return <I size={size} color={group.color} aria-hidden />;
  return (
    <span className="icon-box" style={{ background: group.color + '1F', color: group.color }}>
      <I size={size} aria-hidden />
    </span>
  );
}

export function Logo({ className = 'brand-logo' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden>
      <rect width="64" height="64" rx="14" fill="#1E5BD8" />
      <rect x="14" y="12" width="36" height="40" rx="3" fill="none" stroke="#FFD43B" strokeWidth="5" />
      <path d="M22 40l6-14 6 10 4-6 6 10" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function LevelBadge({ level, large }) {
  return <span className={`lv lv-${level}${large ? ' lv-lg' : ''}`}>{LEVEL_LABEL[level] || level}</span>;
}

export function ProgressRing({ value, size = 150, stroke = 12, color = 'var(--blue-600)' }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--blue-100)" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={c * (1 - Math.max(0, Math.min(1, value)))} style={{ transition: 'stroke-dashoffset .8s ease' }} />
    </svg>
  );
}

export function Modal({ children, onClose }) {
  return (
    <div className="modal-bg" role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="modal card">{children}</div>
    </div>
  );
}

export const pctText = (p) => `${Math.round((p || 0) * 100)}%`;
export const fmtDate = (ts) => new Date(ts).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

import { CheckCircle2, XCircle, Lightbulb, Info } from 'lucide-react';
import AudioPlayer from './AudioPlayer.jsx';
import VoiceRecorder from './VoiceRecorder.jsx';
import { LevelBadge, GroupIcon } from './ui.jsx';
import { countWords } from '../lib/scoring.js';
import { getGroup } from '../data/index.js';

const KEYS = 'ABCD';

export default function QuestionView({ q, index, total, value, onChange, attemptKey, showSkill }) {
  const group = getGroup(q.skill);
  return (
    <div className="card">
      <div className="q-head">
        <span className="q-num">Soal {index + 1}{total ? ` / ${total}` : ''}</span>
        <LevelBadge level={q.level} />
        {showSkill && group && <span className="skill-tag"><GroupIcon group={group} size={14} box={false} />{group.name}</span>}
      </div>

      {q.passage && (<div className="passage"><div className="passage-label">Read the text</div>{q.passage}</div>)}
      {q.audio && <AudioPlayer audio={q.audio} qid={q.id} />}

      <div className="q-prompt">{q.prompt}</div>
      {q.hint && <div className="q-hint"><Info size={16} style={{ marginTop: 3, flex: 'none' }} />{q.hint}</div>}

      {(q.type === 'mcq' || q.type === 'tf') && (
        <div className="options" role="radiogroup">
          {q.options.map((o, i) => (
            <button key={i} role="radio" aria-checked={value === i} className={`opt${value === i ? ' sel' : ''}`} onClick={() => onChange(i)}>
              <span className="key">{KEYS[i]}</span>{o}
            </button>
          ))}
        </div>
      )}

      {q.type === 'write' && <WriteInput q={q} value={value} onChange={onChange} />}
      {q.type === 'speak' && <VoiceRecorder qid={q.id} attemptKey={attemptKey} value={value} onChange={onChange} maxSec={q.level === 'B1' ? 120 : 90} />}
    </div>
  );
}

function WriteInput({ q, value = '', onChange }) {
  const short = (q.minWords || 0) <= 5;
  const wc = countWords(value);
  return (
    <div>
      <textarea className={`textarea${short ? ' short' : ''}`} value={value} onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer in English…" spellCheck={false} autoCapitalize="sentences" aria-label="Jawaban tulisan" />
      <div className="wc">
        <span>{q.minWords > 3 ? `Target minimal ${q.minWords} kata` : 'Jawaban singkat'}</span>
        <span className={wc >= q.minWords ? 'ok' : ''}>{wc} kata</span>
      </div>
    </div>
  );
}

/* ---------- Review (pembahasan) ---------- */
export function ReviewItem({ q, index, ans, res, attemptAudio, showSkill }) {
  const group = getGroup(q.skill);
  const s = res?.score ?? 0;
  const status = s >= 0.999 ? 'ok' : s <= 0.001 ? 'bad' : 'part';
  const statusText = { ok: 'Benar', bad: q.type === 'mcq' || q.type === 'tf' ? (ans === undefined ? 'Tidak dijawab' : 'Salah') : 'Perlu latihan', part: `Sebagian · ${Math.round(s * 100)}%` }[status];
  const d = res?.detail;

  return (
    <div className="card review-item">
      <div className="q-head">
        <span className="q-num">Soal {index + 1}</span>
        <LevelBadge level={q.level} />
        {showSkill && group && <span className="skill-tag"><GroupIcon group={group} size={14} box={false} />{group.name}</span>}
        <span className={`review-status ${status}`} style={{ marginLeft: 'auto' }}>
          {status === 'ok' ? <CheckCircle2 size={15} /> : <XCircle size={15} />}{statusText}
        </span>
      </div>

      {q.passage && <details className="mt" style={{ marginBottom: 12 }}><summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--blue-700)' }}>Lihat teks bacaan</summary><div className="passage mt">{q.passage}</div></details>}
      {q.audio && (
        <>
          <AudioPlayer audio={q.audio} qid={q.id} />
          <div className="box" style={{ marginTop: -6, marginBottom: 14 }}>
            <div className="box-label">Transkrip audio</div>
            {Array.isArray(q.audio) ? q.audio.map((l, i) => <div key={i}><b>{l.s === 'A' ? 'Speaker A' : 'Speaker B'}:</b> {l.t}</div>) : q.audio}
          </div>
        </>
      )}

      <div className="q-prompt">{q.prompt}</div>

      {(q.type === 'mcq' || q.type === 'tf') && (
        <div className="options">
          {q.options.map((o, i) => {
            const cls = i === q.answer ? ' ok' : i === ans ? ' bad' : '';
            return (
              <button key={i} disabled className={`opt${cls}`}>
                <span className="key">{KEYS[i]}</span>{o}
                {i === q.answer && <CheckCircle2 className="mark" size={20} color="var(--green)" />}
                {i === ans && i !== q.answer && <XCircle className="mark" size={20} color="var(--red)" />}
              </button>
            );
          })}
        </div>
      )}

      {q.type === 'write' && (
        <>
          <div className="box"><div className="box-label">Jawaban Anda</div>{ans?.trim() ? ans : <i className="muted">(kosong)</i>}</div>
          {d && <RubricChecks d={d} q={q} />}
          <div className="box" style={{ background: 'var(--green-bg)', borderColor: '#BFE6CD' }}><div className="box-label" style={{ color: 'var(--green)' }}>Contoh jawaban</div>{q.model}</div>
        </>
      )}

      {q.type === 'speak' && (
        <>
          {attemptAudio && <audio controls src={attemptAudio} style={{ width: '100%', marginBottom: 8 }} />}
          <div className="box"><div className="box-label">Transkrip suara Anda</div>
            {ans?.transcript ? ans.transcript : typeof ans?.self === 'number' ? <i className="muted">Dinilai mandiri: {ans.self}/3</i> : <i className="muted">(tidak ada rekaman)</i>}
          </div>
          {d?.mode === 'auto' && <RubricChecks d={d} q={q} />}
          <div className="box" style={{ background: 'var(--green-bg)', borderColor: '#BFE6CD' }}><div className="box-label" style={{ color: 'var(--green)' }}>Contoh jawaban</div>{q.model}</div>
        </>
      )}

      <div className="explain">
        <div className="explain-title"><Lightbulb size={16} />Pembahasan</div>
        {q.explanation}
      </div>
    </div>
  );
}

function RubricChecks({ d, q }) {
  const kwList = (q.keywords || []).map((g) => (Array.isArray(g) ? g[0] : g));
  return (
    <div className="checks">
      {d.words !== undefined && q.minWords > 3 && <span className={`check ${d.words >= q.minWords ? 'y' : 'n'}`}>{d.words >= q.minWords ? <CheckCircle2 size={14} /> : <XCircle size={14} />}{d.words}/{q.minWords} kata</span>}
      {d.hits?.map((h, i) => (
        <span key={i} className={`check ${h ? 'y' : 'n'}`} title="Kata kunci">{h ? <CheckCircle2 size={14} /> : <XCircle size={14} />}“{kwList[i]}”{Array.isArray(q.keywords[i]) && q.keywords[i].length > 1 ? ' …' : ''}</span>
      ))}
      {d.checks && (
        <>
          <span className={`check ${d.checks.capital ? 'y' : 'n'}`}>{d.checks.capital ? <CheckCircle2 size={14} /> : <XCircle size={14} />}Huruf kapital</span>
          <span className={`check ${d.checks.endPunct ? 'y' : 'n'}`}>{d.checks.endPunct ? <CheckCircle2 size={14} /> : <XCircle size={14} />}Tanda baca akhir</span>
          <span className={`check ${d.checks.sentences ? 'y' : 'n'}`}>{d.checks.sentences ? <CheckCircle2 size={14} /> : <XCircle size={14} />}{d.sentences} kalimat</span>
        </>
      )}
    </div>
  );
}

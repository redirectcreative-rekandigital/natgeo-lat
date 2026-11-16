export const LEVELS = ['preA1', 'A1', 'A2', 'B1'];
export const LEVEL_LABEL = { below: 'Below Pre-A1', preA1: 'Pre-A1', A1: 'A1', A2: 'A2', B1: 'B1' };
export const LEVEL_DESC = {
  below: 'Masih tahap awal. Mulailah dari kosakata dan kalimat sangat sederhana.',
  preA1: 'Memahami kata & kalimat sangat dasar tentang diri sendiri dan benda sekitar.',
  A1: 'Dapat berkomunikasi sederhana tentang kebutuhan sehari-hari dengan kalimat pendek.',
  A2: 'Dapat memahami dan menyampaikan informasi rutin: keluarga, sekolah, belanja, pengalaman.',
  B1: 'Dapat menyampaikan pendapat, pengalaman, dan alasan dengan cukup lancar.',
};
export const PASS = 0.6;

const norm = (s = '') => ' ' + s.toLowerCase().replace(/[’`]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
export const countWords = (s = '') => (s.trim().match(/[A-Za-z0-9'’-]+/g) || []).length;
const countSentences = (s = '') => s.split(/[.!?\n]+/).filter((x) => countWords(x) >= 2).length;

export function keywordHits(text, keywords = []) {
  const t = norm(text);
  return keywords.map((group) => {
    const alts = Array.isArray(group) ? group : [group];
    return alts.some((k) => t.includes(' ' + k.toLowerCase() + ' ') || t.includes(' ' + k.toLowerCase() + 's '));
  });
}

function scoreSpeak(q, ans) {
  if (!ans) return { score: 0, detail: null };
  const transcript = (ans.transcript || '').trim();
  if (transcript) {
    const hits = keywordHits(transcript, q.keywords);
    const kw = hits.length ? hits.filter(Boolean).length / hits.length : 1;
    const words = countWords(transcript);
    const len = Math.min(1, words / (q.minWords || 1));
    return { score: round(0.6 * kw + 0.4 * len), detail: { mode: 'auto', words, hits, kw, len } };
  }
  if (typeof ans.self === 'number') return { score: round(ans.self / 3), detail: { mode: 'self', self: ans.self } };
  return { score: 0, detail: null };
}

function scoreWrite(q, text = '') {
  const t = (text || '').trim();
  if (!t) return { score: 0, detail: null };
  const hits = keywordHits(t, q.keywords);
  const kw = hits.length ? hits.filter(Boolean).length / hits.length : 1;
  const words = countWords(t);
  // Soal kata (1–3 kata): hanya ketepatan kata
  if ((q.minWords || 0) <= 3 && !q.minSentences) {
    return { score: round(kw), detail: { mode: 'word', words, hits, kw } };
  }
  const len = Math.min(1, words / q.minWords);
  const sentences = countSentences(t);
  // Tanda baca akhir dicek pada baris isi terakhir (≥4 kata), agar penutup surat
  // seperti "Best regards," / nama penulis tidak dianggap kalimat tanpa titik.
  const lines = t.split('\n').map((l) => l.trim()).filter(Boolean);
  const lastBody = [...lines].reverse().find((l) => countWords(l) >= 4) || t;
  const checks = {
    capital: /^[A-Z"']/.test(t),
    endPunct: /[.!?]["']?$/.test(lastBody),
    sentences: sentences >= (q.minSentences || 1),
  };
  const mech = Object.values(checks).filter(Boolean).length / 3;
  return { score: round(0.35 * len + 0.35 * kw + 0.3 * mech), detail: { mode: 'rubric', words, hits, kw, len, checks, sentences } };
}

const round = (n) => Math.round(n * 100) / 100;

export function scoreQuestion(q, ans) {
  if (q.type === 'mcq' || q.type === 'tf') return { score: ans === q.answer ? 1 : 0, detail: null };
  if (q.type === 'speak') return scoreSpeak(q, ans);
  if (q.type === 'write') return scoreWrite(q, ans);
  return { score: 0, detail: null };
}

export function estimateLevel(byLevel) {
  let result = 'below';
  for (const lv of LEVELS) {
    const b = byLevel[lv];
    if (!b || b.total === 0) continue;
    if (b.pct >= PASS) result = lv; else break;
  }
  return result;
}

export function gradeAttempt(set, answers) {
  const items = set.questions.map((q) => ({ id: q.id, ...scoreQuestion(q, answers[q.id]) }));
  const agg = (keyFn) => {
    const m = {};
    set.questions.forEach((q, i) => {
      const k = keyFn(q);
      m[k] = m[k] || { total: 0, earned: 0 };
      m[k].total += 1; m[k].earned += items[i].score;
    });
    Object.values(m).forEach((v) => { v.pct = v.total ? v.earned / v.total : 0; });
    return m;
  };
  const byLevel = agg((q) => q.level);
  const bySkill = agg((q) => q.skill);
  const earned = items.reduce((s, i) => s + i.score, 0);
  return {
    items,
    byLevel,
    bySkill,
    total: set.questions.length,
    earned: round(earned),
    pct: earned / set.questions.length,
    level: estimateLevel(byLevel),
  };
}

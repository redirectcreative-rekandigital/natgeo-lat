const KEY_NAME = 'ngcefr.name';
const KEY_HIST = 'ngcefr.history';
const MAX_HIST = 50;

const safe = (fn, fallback) => { try { return fn(); } catch { return fallback; } };

export const getName = () => safe(() => localStorage.getItem(KEY_NAME) || '', '');
export const setName = (n) => safe(() => localStorage.setItem(KEY_NAME, n.trim()), null);
export const clearName = () => safe(() => localStorage.removeItem(KEY_NAME), null);

export const getHistory = () => safe(() => JSON.parse(localStorage.getItem(KEY_HIST) || '[]'), []);
export const getAttempt = (id) => getHistory().find((a) => a.id === id);

// Mengembalikan false bila gagal (penyimpanan penuh / diblokir) agar pemanggil bisa memberi tahu pengguna.
export function saveAttempt(attempt) {
  const list = [attempt, ...getHistory().filter((a) => a.id !== attempt.id)].slice(0, MAX_HIST);
  return safe(() => { localStorage.setItem(KEY_HIST, JSON.stringify(list)); return true; }, false);
}
export const clearHistory = () => safe(() => localStorage.removeItem(KEY_HIST), null);

// Rekaman suara hanya disimpan di memori (tidak di localStorage)
const audioMem = new Map();
export const setAudio = (attemptKey, qid, url) => audioMem.set(`${attemptKey}:${qid}`, url);
export const getAudio = (attemptKey, qid) => audioMem.get(`${attemptKey}:${qid}`);
export const moveAudio = (fromKey, toKey) => {
  for (const [k, v] of audioMem) if (k.startsWith(fromKey + ':')) audioMem.set(k.replace(fromKey, toKey), v);
};

// Text-to-Speech (Listening) & Speech Recognition (Speaking)
export const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

let voicesCache = [];
function loadVoices() {
  if (!ttsSupported) return [];
  const v = window.speechSynthesis.getVoices();
  if (v.length) voicesCache = v;
  return voicesCache;
}
if (ttsSupported) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function pickVoices() {
  const en = loadVoices().filter((v) => /^en[-_]/i.test(v.lang));
  const score = (v) => (/(google|natural|online|premium|enhanced)/i.test(v.name) ? 2 : 0) + (/en[-_](US|GB)/i.test(v.lang) ? 1 : 0);
  const sorted = [...en].sort((a, b) => score(b) - score(a));
  const female = sorted.find((v) => /(female|samantha|zira|jenny|aria|libby|sonia|google us english|karen|moira|serena)/i.test(v.name));
  const male = sorted.find((v) => /(male|daniel|david|guy|ryan|george|alex|fred|google uk english male|mark)/i.test(v.name) && v !== female);
  const a = female || sorted[0] || null;
  const b = male || sorted.find((v) => v !== a) || a;
  return { A: a, B: b };
}

/** Putar audio. `audio` = string atau [{s:'A'|'B', t}]. Mengembalikan Promise yang selesai saat audio selesai. */
export function speak(audio, { rate = 0.95 } = {}) {
  if (!ttsSupported) return Promise.reject(new Error('TTS tidak didukung'));
  const synth = window.speechSynthesis;
  synth.cancel();
  const lines = Array.isArray(audio) ? audio : [{ s: 'A', t: audio }];
  const voices = pickVoices();
  return new Promise((resolve) => {
    lines.forEach((line, i) => {
      const u = new SpeechSynthesisUtterance(line.t);
      const v = voices[line.s] || voices.A;
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
      u.rate = rate;
      u.pitch = line.s === 'B' && voices.A === voices.B ? 0.8 : 1;
      if (i === lines.length - 1) { u.onend = resolve; u.onerror = resolve; }
      synth.speak(u);
    });
  });
}
export const stopSpeak = () => ttsSupported && window.speechSynthesis.cancel();

const SR = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
export const srSupported = !!SR;

/** Membuat sesi pengenalan suara. onText(finalText, interimText) */
export function createRecognizer({ onText, onEnd, onError }) {
  if (!SR) return null;
  const rec = new SR();
  rec.lang = 'en-US';
  rec.continuous = true;
  rec.interimResults = true;
  let finalText = '';
  let stopped = false;
  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal) finalText += r[0].transcript.trim() + ' ';
      else interim += r[0].transcript;
    }
    onText?.(finalText.trim(), interim.trim());
  };
  rec.onerror = (e) => onError?.(e.error);
  // Chrome Android kadang berhenti sendiri: mulai ulang selama belum dihentikan pengguna
  rec.onend = () => { if (!stopped) { try { rec.start(); return; } catch { /* noop */ } } onEnd?.(finalText.trim()); };
  return {
    start: () => { stopped = false; finalText = ''; rec.start(); },
    stop: () => { stopped = true; try { rec.stop(); } catch { /* noop */ } },
  };
}

import { readingSets } from './reading.js';
import { listeningSets } from './listening.js';
import { speakingSets } from './speaking.js';
import { grammarSets } from './grammar.js';
import { writingSets } from './writing.js';
import { tryoutSets } from './tryout.js';

export const GROUPS = [
  { id: 'reading', name: 'Reading', label: 'Membaca', icon: 'BookOpen', color: '#1E5BD8', desc: 'Pahami teks pendek, pengumuman, dan artikel bertema alam.' },
  { id: 'listening', name: 'Listening', label: 'Menyimak', icon: 'Headphones', color: '#0891B2', desc: 'Dengarkan audio & dialog, lalu jawab pertanyaan.' },
  { id: 'speaking', name: 'Speaking', label: 'Voice Note', icon: 'Mic', color: '#7C3AED', desc: 'Rekam jawaban suara Anda, dinilai otomatis.' },
  { id: 'grammar', name: 'Grammar & Vocab', label: 'Tata Bahasa & Kosakata', icon: 'SpellCheck', color: '#0D9488', desc: 'Struktur kalimat dan kosakata sehari-hari.' },
  { id: 'writing', name: 'Writing', label: 'Menulis', icon: 'PenLine', color: '#EA580C', desc: 'Tulis kata, pesan, hingga paragraf opini.' },
];

export const TRYOUT_GROUP = { id: 'tryout', name: 'Tryout', label: 'Simulasi Ujian', icon: 'Trophy', color: '#0B2A5B', desc: 'Gabungan 5 keterampilan, 40 soal, 45 menit.' };

const all = [...readingSets, ...listeningSets, ...speakingSets, ...grammarSets, ...writingSets, ...tryoutSets];
// isi skill default = group untuk paket latihan
all.forEach((set) => set.questions.forEach((q) => { if (!q.skill) q.skill = set.group; }));

export const SETS = all;
export const getSet = (id) => all.find((s) => s.id === id);
export const getSetsByGroup = (g) => all.filter((s) => s.group === g);
export const getGroup = (id) => (id === 'tryout' ? TRYOUT_GROUP : GROUPS.find((g) => g.id === id));

# AGENTS.md — NatGeo CEFR Practice

Panduan untuk AI agent (Claude Code, Codex, Cursor, dll.) yang bekerja di repo ini.
Detail lengkap ada di [README.md](README.md) (cara pakai, format soal, penilaian), [PRD.md](PRD.md) (scope & kebutuhan), dan [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) (warna, tipografi, komponen). Baca dokumen terkait sebelum mengubah area tersebut — jangan menyalin isinya ke sini.

## Ringkasan
Website latihan soal CEFR (Pre-A1 – B1) untuk guru SD Muhammadiyah Wonorejo — https://natgeo.sdmuhwonorejo.com.
SPA statis tanpa backend: React 19 · Vite · react-router-dom (**HashRouter**) · lucide-react · Inter · Web Speech API · MediaRecorder.
Pengguna utama: guru dengan bahasa Inggris dasar–menengah, memakai HP Android + Chrome. UI & pembahasan berbahasa Indonesia; soal berbahasa Inggris.

## Peta kode
| Path | Isi |
|------|-----|
| `src/data/*.js` | Bank soal per kelompok (`reading`, `listening`, `speaking`, `grammar`, `writing`, `tryout`). `index.js` mendaftarkan `GROUPS`, `SETS`, `getSet`, dan mengisi `skill` default. |
| `src/lib/scoring.js` | Penilaian (MCQ, speaking, writing) & penentuan level CEFR (`PASS = 0.6`). |
| `src/lib/storage.js` | `localStorage` (nama, riwayat maks 50) + rekaman suara **hanya di memori**. |
| `src/lib/speech.js` | TTS (`speechSynthesis`) & `SpeechRecognition`. |
| `src/pages/` | Welcome, Home, Group, Quiz, Result, Review, History. Rute di `src/App.jsx`. |
| `src/components/` | Header, QuestionView, AudioPlayer, VoiceRecorder, `ui.jsx` (Button, Card, LevelBadge, …). |
| `src/styles/` | `tokens.css` (design token) & `app.css`. |
| `public/.htaccess` | Paksa HTTPS + cache/gzip untuk cPanel. Ikut tersalin ke `dist/`. |

## Perintah
```bash
npm install
npm run dev      # http://localhost:5173
npm run lint     # oxlint
npm run build    # output ke dist/
```

## Definisi selesai
- `npm run lint` **dan** `npm run build` wajib lolos sebelum menyatakan pekerjaan selesai. Laporkan jujur bila gagal.
- Belum ada test otomatis — jangan menambah framework test kecuali diminta.

## Aturan konten soal (wajib)
- Semua soal & teks **orisinal**. Jangan menyalin soal resmi National Geographic Learning atau sumber berhak cipta lain.
- Setiap paket latihan berisi **12 soal: 3 `preA1`, 3 `A1`, 3 `A2`, 3 `B1`**, berurutan dari mudah ke sulit. Saat ini 6 paket per keterampilan (1–2 dasar, 3–4 menengah, 5–6 tantangan) + 2 Tryout; tema tiap paket berbeda.
- `model` pada Speaking/Writing harus memenuhi `minWords` dan mengenai semua grup `keywords` (contoh jawaban harus dapat skor penuh).
- Setiap soal wajib punya `id` unik secara global (pola: `r1-1`, `l2-5`, `s1-3`, …), `level` (`preA1` | `A1` | `A2` | `B1`), dan `explanation` dalam **Bahasa Indonesia**.
- Soal **Tryout** harus berbeda dari semua soal latihan (teks, audio, maupun prompt). Tiap soal tryout wajib punya `skill`.
- MCQ: `answer` adalah indeks 0-based ke `options`. Speaking/Writing: `keywords` berupa array grup sinonim; isi `minWords` (+ `minSentences` untuk writing) dan `model`.
- Paket baru harus didaftarkan lewat ekspor `*Sets` yang sudah diimpor di `src/data/index.js`.

## Batasan scope (v1)
- Jangan menambah backend, login/akun, database, analitik, atau dependency berat tanpa izin eksplisit.
- Tidak ada data yang dikirim ke server. Nama & riwayat di `localStorage`; rekaman suara tidak boleh disimpan permanen.
- Akses `localStorage` selalu lewat helper `safe()` di `storage.js` (bisa gagal di mode privat).
- Pertahankan **HashRouter** dan `base: './'` di `vite.config.js` — keduanya membuat build jalan di folder mana pun di cPanel tanpa rewrite.
- Speaking harus tetap punya fallback penilaian mandiri untuk browser tanpa Speech Recognition (Safari/Firefox).
- Target bundle JS < 300 KB gzip.

## UI & gaya
- Ikuti token di `src/styles/tokens.css` / DESIGN_SYSTEM.md; jangan hardcode warna baru.
- Mobile-first (360 px), area sentuh ≥ 44 px, kontras WCAG AA, `aria-label` pada tombol ikon.
- Ikon hanya dari `lucide-react`.
- Teks antarmuka & komentar kode dalam Bahasa Indonesia.

## Git & deploy
- Branch kerja: `develop`. Agent boleh commit dan push, termasuk ke `main` — push **tidak** memicu deploy.
- Tidak ada auto-deploy. Deploy manual: `npm run build` → zip **isi** `dist/` (termasuk `.htaccess`) → upload & extract di File Manager cPanel ke document root subdomain.
- Situs wajib HTTPS agar mikrofon berfungsi — jangan hapus aturan HTTPS di `.htaccess`.

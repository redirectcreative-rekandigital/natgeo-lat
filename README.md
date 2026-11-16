# NatGeo CEFR Practice

Website latihan soal CEFR (Pre-A1 – B1) untuk guru SD Muhammadiyah Wonorejo.
🌐 **https://natgeo.sdmuhwonorejo.com**

- 5 kelompok latihan: **Reading, Listening, Speaking (voice note), Grammar & Vocab, Writing** — masing-masing 2 paket × 12 soal
- **Tryout** gabungan 40 soal, 45 menit (soal berbeda dari latihan)
- Estimasi level CEFR per latihan + rincian per level & keterampilan
- Pembahasan lengkap (Bahasa Indonesia) setelah setiap latihan
- Hanya input nama, tanpa login; hasil tersimpan di browser

Dokumen: [PRD.md](PRD.md) · [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)

## Menjalankan lokal
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di folder dist/
```

## Deploy ke cPanel (otomatis)
Setiap push ke `main` → GitHub Actions build lalu upload `dist/` via FTP.

1. cPanel → **Domains/Subdomains**: buat `natgeo.sdmuhwonorejo.com` (document root mis. `public_html/natgeo`).
2. cPanel → **SSL/TLS Status** → jalankan **AutoSSL** untuk subdomain (wajib HTTPS agar mikrofon berfungsi).
3. cPanel → **FTP Accounts**: buat akun FTP dengan direktori ke document root subdomain.
4. GitHub repo → **Settings → Secrets and variables → Actions** → tambah:

| Secret | Contoh |
|--------|--------|
| `FTP_SERVER` | `ftp.sdmuhwonorejo.com` |
| `FTP_USERNAME` | `natgeo@sdmuhwonorejo.com` |
| `FTP_PASSWORD` | (password akun FTP) |
| `FTP_SERVER_DIR` | `./` jika akun FTP langsung ke folder subdomain, atau `/public_html/natgeo/` |

5. Buka tab **Actions** → jalankan "Deploy ke cPanel (FTP)" (atau push perubahan apa pun).

**Manual:** `npm run build`, zip isi folder `dist/` (termasuk `.htaccess`), upload & extract di File Manager.

## Menambah / mengubah soal
Edit file di `src/data/`:

| File | Isi |
|------|-----|
| `reading.js` | `passage`, `prompt`, `options`, `answer` (indeks 0–3), `explanation` |
| `listening.js` | `audio` (teks dibacakan TTS; dialog: `[{s:'A',t:'…'},{s:'B',t:'…'}]`) |
| `speaking.js` | `keywords` (grup sinonim), `minWords`, `model` (contoh jawaban) |
| `grammar.js` | pilihan ganda |
| `writing.js` | `keywords`, `minWords`, `minSentences`, `model` |
| `tryout.js` | campuran, tiap soal punya `skill` |

Setiap soal wajib punya `level`: `preA1` | `A1` | `A2` | `B1`.

## Penilaian
- Pilihan ganda: benar = 1, salah = 0.
- Speaking: transkrip otomatis (Chrome) → 60% kecocokan kata kunci + 40% panjang jawaban. Browser tanpa Speech Recognition → penilaian mandiri 0–3.
- Writing: 35% panjang + 35% kata kunci + 30% mekanik (huruf kapital, tanda baca akhir, jumlah kalimat).
- **Level** = level tertinggi yang skornya ≥ 60% dan semua level di bawahnya juga ≥ 60%.

## Teknologi
React 19 · Vite · react-router (HashRouter) · lucide-react · Inter · Web Speech API · MediaRecorder

> Soal bersifat orisinal untuk latihan, bukan soal resmi National Geographic Learning.

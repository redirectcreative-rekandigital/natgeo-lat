# PRD — NatGeo CEFR Practice (natgeo.sdmuhwonorejo.com)

**Versi:** 1.0 · **Tanggal:** 16 Nov 2026 · **Pemilik:** SD Muhammadiyah Wonorejo
**Repo:** https://github.com/redirectcreative-rekandigital/natgeo-lat

---

## 1. Latar Belakang
Guru SD perlu berlatih menghadapi tes **CEFR correlation** (format National Geographic Learning) yang mengukur kemampuan bahasa Inggris pada level **Pre-A1, A1, A2, B1**. Saat ini belum ada sarana latihan mandiri yang praktis, bisa dibuka di HP, dan langsung memberi estimasi level beserta pembahasan.

## 2. Tujuan
| # | Tujuan | Ukuran keberhasilan |
|---|--------|---------------------|
| G1 | Guru bisa latihan per keterampilan kapan saja, di HP atau laptop | Halaman pertama tampil < 2 detik di 4G |
| G2 | Setiap latihan memberi estimasi level CEFR | 100% latihan menampilkan level Pre-A1–B1 |
| G3 | Guru memahami kesalahannya | Setiap soal punya pembahasan Bahasa Indonesia |
| G4 | Ada simulasi ujian lengkap | 1 Tryout gabungan 5 keterampilan, soal berbeda dari latihan |

**Bukan tujuan (v1):** login/akun, dashboard admin, sertifikat resmi, sinkronisasi antar perangkat.

## 3. Pengguna
**Persona utama — Bu Siti, guru kelas 4 (35 th).** Bahasa Inggris dasar–menengah, memakai HP Android + Chrome, waktu latihan 15–20 menit di sela mengajar. Butuh instruksi jelas, tombol besar, dan penjelasan berbahasa Indonesia.

## 4. Ruang Lingkup Fitur

### 4.1 Onboarding
- Satu-satunya input: **Nama** (wajib, 2–40 karakter). Disimpan di `localStorage`.
- Nama tampil di header dan di lembar hasil. Bisa diganti dari menu profil.

### 4.2 Beranda
- Sapaan + ringkasan progres (latihan selesai, level terakhir per keterampilan).
- 5 kartu kelompok latihan + 1 kartu **Tryout**.

### 4.3 Kelompok Latihan (5)
| Kelompok | Ikon | Tipe soal | Penilaian |
|----------|------|-----------|-----------|
| **Reading** | BookOpen | Teks + pilihan ganda, benar/salah | Otomatis |
| **Listening** | Headphones | Audio TTS (bisa diulang, kecepatan normal/lambat) + pilihan ganda | Otomatis |
| **Speaking (Voice Note)** | Mic | Rekam suara menjawab pertanyaan; diputar ulang | Otomatis via Speech Recognition (kata kunci + panjang jawaban); fallback rubrik mandiri |
| **Grammar & Vocabulary** | SpellCheck | Pilihan ganda, lengkapi kalimat | Otomatis |
| **Writing** | PenLine | Menulis kalimat/paragraf pendek | Otomatis berbasis rubrik (jumlah kata, kata kunci, struktur kalimat, tanda baca) |

- Setiap kelompok berisi **2 paket**, @ **12 soal**, berjenjang Pre-A1 → B1 (3 soal per level).
- **Tryout**: 1 paket ±40 soal mencakup semua kelompok, **soal berbeda** dari latihan, ada timer (45 menit, bisa jeda).

### 4.4 Alur Latihan
1. Pilih paket → layar intro (jumlah soal, perkiraan waktu, petunjuk).
2. Kerjakan soal satu per satu; progress bar; navigasi Sebelumnya/Berikutnya; nomor soal bisa diklik.
3. Kirim → konfirmasi bila ada soal kosong.
4. **Hasil**: skor %, **estimasi level CEFR**, rincian per level (Pre-A1/A1/A2/B1), rincian per keterampilan (Tryout).
5. **Pembahasan**: setiap soal menampilkan jawaban pengguna, jawaban benar, penjelasan (Bahasa Indonesia), transkrip audio (Listening), transkrip suara + contoh jawaban (Speaking), contoh jawaban model (Writing).
6. Ulangi latihan / kembali ke beranda / cetak hasil.

### 4.5 Penilaian CEFR
Setiap soal diberi label level. Skor per level = rata-rata skor soal level tersebut (0–1).
**Estimasi level** = level tertinggi L sehingga skor level L ≥ 60% **dan** semua level di bawahnya ≥ 60%.
Jika Pre-A1 < 60% → "Below Pre-A1 (Pre-A1 berkembang)".
Skor Speaking/Writing bernilai parsial (0–1) per soal.

### 4.6 Riwayat
- Disimpan di `localStorage`: tanggal, paket, skor, level. Maks 50 entri.
- Ditampilkan di halaman Riwayat; bisa dihapus.

## 5. Kebutuhan Non-Fungsional
- **Responsif**: mobile-first (360 px) hingga desktop (1280 px+).
- **Kinerja**: bundle JS < 300 KB gzip, tanpa server.
- **Kompatibilitas**: Chrome/Edge Android & desktop (fitur penuh). Safari/Firefox: Speaking otomatis memakai fallback rubrik mandiri bila Speech Recognition tidak tersedia.
- **Aksesibilitas**: kontras WCAG AA, ukuran sentuh ≥ 44 px, fokus keyboard terlihat, label ARIA pada ikon.
- **Privasi**: tidak ada data yang dikirim ke server; rekaman suara hanya di memori browser.
- **Mikrofon** membutuhkan **HTTPS** (aktifkan SSL/AutoSSL di cPanel).

## 6. Arsitektur
- **React 19 + Vite**, `react-router-dom` (HashRouter → aman di cPanel tanpa konfigurasi rewrite).
- **Ikon**: lucide-react.
- **Data soal**: modul JS di `src/data/` (mudah ditambah tanpa backend).
- **Audio**: Web Speech API `speechSynthesis` (en-US/en-GB).
- **Speaking**: `MediaRecorder` (rekaman) + `SpeechRecognition` (transkrip).
- **Hosting**: cPanel `public_html/natgeo` (subdomain), deploy otomatis via **GitHub Actions FTP** setiap push ke `main`.

```
src/
  data/        reading.js listening.js speaking.js grammar.js writing.js tryout.js index.js
  lib/         scoring.js storage.js speech.js
  components/  Header, QuestionCard, AudioPlayer, VoiceRecorder, LevelBadge, ...
  pages/       Welcome, Home, Group, Quiz, Result, Review, History
  styles/      tokens.css app.css
```

## 7. Konten
- Total ±160 soal v1: 5 kelompok × 2 paket × 12 soal + Tryout 40 soal.
- Konteks: kehidupan sekolah, keluarga, alam & hewan (tema National Geographic), perjalanan, kesehatan.
- Seluruh soal **orisinal** (bukan salinan soal resmi NatGeo Learning).

## 8. Rilis
| Fase | Isi |
|------|-----|
| v1.0 | Fitur di dokumen ini |
| v1.1 | Rekap skor ke Google Sheets (Apps Script), mode Siswa |
| v1.2 | Bank soal diperluas (3 paket/kelompok, 2 Tryout), audio MP3 natural |

## 9. Risiko & Mitigasi
| Risiko | Mitigasi |
|--------|----------|
| Speech Recognition tidak ada di iPhone/Firefox | Fallback rubrik mandiri + contoh jawaban |
| Suara TTS berbeda antar perangkat | Pilih suara en-US/en-GB terbaik yang tersedia; tombol perlambat |
| Data hilang saat cache dibersihkan | Tombol cetak/simpan PDF hasil |
| Mikrofon ditolak di HTTP | Wajib SSL; pesan error yang jelas |

## 10. Rekomendasi Tambahan
1. Aktifkan **AutoSSL** untuk `natgeo.sdmuhwonorejo.com` sebelum rilis (wajib untuk mikrofon).
2. Uji di HP guru yang paling umum (Android + Chrome).
3. Lakukan review konten soal oleh guru Bahasa Inggris sekolah sebelum dipakai luas.
4. Tambahkan rekap Google Sheets (v1.1) bila sekolah butuh laporan per guru.

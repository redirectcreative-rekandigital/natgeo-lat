# Design System — NatGeo CEFR Practice

Prinsip: **Biru, bersih, jelas, profesional.** Mobile-first, satu tugas per layar, teks mudah dibaca.

## 1. Warna
| Token | Hex | Pemakaian |
|-------|-----|-----------|
| `--blue-900` | `#0B2A5B` | Judul, header gelap |
| `--blue-700` | `#1749A8` | Hover tombol utama |
| `--blue-600` | `#1E5BD8` | **Primary** — tombol, link, progress |
| `--blue-100` | `#E3ECFD` | Latar chip/aktif |
| `--blue-50`  | `#F3F7FF` | Latar halaman |
| `--ink`      | `#0F1B2D` | Teks utama |
| `--ink-2`    | `#4A5872` | Teks sekunder |
| `--line`     | `#DCE4F2` | Garis/border |
| `--white`    | `#FFFFFF` | Kartu |
| `--green`    | `#16A34A` | Benar |
| `--red`      | `#DC2626` | Salah |
| `--amber`    | `#D97706` | Peringatan/parsial |

**Warna level CEFR**
| Level | Warna | Latar |
|-------|-------|-------|
| Pre-A1 | `#64748B` | `#F1F5F9` |
| A1 | `#0EA5E9` | `#E0F2FE` |
| A2 | `#1E5BD8` | `#E3ECFD` |
| B1 | `#0B2A5B` | `#DDE5F3` |

**Warna kelompok** (aksen ikon): Reading `#1E5BD8`, Listening `#0891B2`, Speaking `#7C3AED`, Grammar `#0D9488`, Writing `#EA580C`, Tryout `#0B2A5B`.

## 2. Tipografi
- Font: **Inter** (fallback: `system-ui, -apple-system, Segoe UI, Roboto, sans-serif`).
- Skala: 12 · 14 · **16 (body)** · 18 · 20 · 24 · 30 px. Line-height 1.55 body, 1.25 judul.
- Berat: 400 body, 600 label/tombol, 700 judul.
- Teks bacaan soal (passage) 17 px untuk keterbacaan.

## 3. Spasi, Radius, Bayangan
- Spasi kelipatan 4: 4 · 8 · 12 · 16 · 24 · 32 · 48.
- Radius: 8 (input/tombol), 14 (kartu), 999 (chip).
- Bayangan kartu: `0 1px 2px rgba(15,27,45,.06), 0 4px 16px rgba(15,27,45,.06)`.

## 4. Layout & Breakpoint
- Kontainer maks 960 px, padding 16 px (mobile) / 24 px (≥ 768 px).
- Grid kartu: 1 kolom < 560 px, 2 kolom ≥ 560 px, 3 kolom ≥ 900 px.
- Layar soal: kolom tunggal, tombol navigasi menempel di bawah (sticky) pada mobile.

## 5. Komponen
| Komponen | Spesifikasi |
|----------|-------------|
| **Button** | Tinggi 48 px; varian `primary` (biru solid), `secondary` (outline biru), `ghost`. Ikon 20 px di kiri. |
| **Card** | Putih, radius 14, border `--line`, bayangan kartu. Kartu kelompok: ikon dalam kotak 48 px berwarna aksen 12% opacity. |
| **Option (pilihan jawaban)** | Tinggi min 52 px, huruf A/B/C di lingkaran, state: default, hover, selected (border biru 2 px + latar `--blue-50`), correct (hijau), wrong (merah). |
| **LevelBadge** | Chip radius 999, warna level, teks 12–14 px tebal. |
| **ProgressBar** | Tinggi 8 px, latar `--blue-100`, isi `--blue-600`. |
| **AudioPlayer** | Tombol Play besar 56 px, tombol "Pelan", hitungan putar. |
| **VoiceRecorder** | Tombol mic 72 px bulat; merah berdenyut saat merekam; timer; tombol putar ulang & rekam ulang; transkrip tampil di bawah. |
| **Header** | Putih, sticky, logo + judul "NatGeo CEFR Practice", nama pengguna di kanan. |

## 6. Ikon (lucide-react)
Reading `BookOpen` · Listening `Headphones` · Speaking `Mic` · Grammar `SpellCheck` · Writing `PenLine` · Tryout `Trophy` · Beranda `Home` · Riwayat `History` · Benar `CheckCircle2` · Salah `XCircle` · Pembahasan `Lightbulb` · Timer `Timer`.
Ukuran 20 px (inline), 24 px (kartu), stroke 2. Ikon fungsional selalu disertai teks/aria-label.

## 7. Nada Bahasa
- UI berbahasa **Indonesia**, soal berbahasa **Inggris**, pembahasan **Indonesia**.
- Singkat, sopan, menyemangati: "Bagus! Anda di level A2. Fokuskan latihan pada B1 Reading."

## 8. Aksesibilitas
Kontras ≥ 4.5:1, target sentuh ≥ 44 px, `:focus-visible` outline 3 px biru, `prefers-reduced-motion` mematikan animasi denyut.

  # Product Requirements Document (PRD) - Landing Page Sekolah Impian

  ## 1. Deskripsi & Tujuan Proyek

  Proyek ini adalah pembuatan aplikasi web dinamis berupa Landing Page untuk "Sekolah Impian", sebuah institusi pendidikan kejuruan modern yang berfokus pada literasi finansial. Fasilitas unggulan sekolah ini adalah laboratorium pasar modal yang mewajibkan siswanya mempelajari investasi saham dan didukung penuh melalui kemitraan resmi dengan Bursa Efek Indonesia (BEI). Tujuan proyek ini adalah menampilkan profil sekolah secara profesional dengan data yang diambil secara dinamis dari server.

  ## 2. Tech Stack

  - **Frontend:** Vite, HTML/JSX, Tailwind CSS. (Gaya visual menggunakan background dengan central gradient, bukan corner-aligned, untuk kesan modern dan terpusat).
  - **Backend:** Golang (Go).
  - **Database:** MySQL (dengan fitur Auto-Migration dan Seeder).

  ## 3. Pemetaan Section Halaman

  1.  **Hero:** Menampilkan nama sekolah, tagline tentang generasi melek finansial, dan tombol Call-to-Action.
  2.  **About:** Deskripsi singkat tentang visi sekolah dan kemitraan dengan BEI.
  3.  **Programs (Dinamis):** Daftar program keahlian.
  4.  **Facilities (Dinamis):** Daftar fasilitas unggulan (seperti Laboratorium Trading, Simulasi Saham, dll).
  5.  **Contact:** Informasi kontak sekolah.

  ## 4. Rancangan Skema Tabel Database

  - **Tabel `facilities`**
    - `id` (Primary Key, INT, Auto Increment)
    - `title` (VARCHAR)
    - `description` (TEXT)
    - `icon_name` (VARCHAR)
  - **Tabel `programs`**
    - `id` (Primary Key, INT, Auto Increment)
    - `name` (VARCHAR)
    - `description` (TEXT)

  ## 5. Daftar Rancangan Endpoint RESTful API

  - `GET /api/facilities` : Mengambil daftar fasilitas unggulan.
  - `GET /api/programs` : Mengambil daftar program keahlian.

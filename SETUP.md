# Setup Guide - Landing Page Sekolah Impian

## Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js 18+** - https://nodejs.org/
- **Go 1.21+** - https://golang.org/dl/
- **XAMPP** (untuk MySQL) - https://www.apachefriends.org/

## Step 1: Setup Database

1. Buka XAMPP Control Panel
2. Start MySQL service (klik tombol "Start" pada MySQL)
3. Buka Command Prompt atau PowerShell
4. Jalankan perintah:

```bash
C:\xampp\mysql\bin\mysql.exe -u root -e "CREATE DATABASE IF NOT EXISTS sekolah_impian DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

## Step 2: Setup Backend (Golang)

1. Buka Command Prompt di folder project root:

```bash
cd c:\Vs code project\UAS_RPL_Wisyananda_Affandi
cd backend
```

2. Download Go dependencies:

```bash
go get github.com/gorilla/mux
go get github.com/gorilla/handlers
go get gorm.io/gorm
go get gorm.io/driver/mysql
```

3. Run backend server:

```bash
go run main.go
```

Jika berhasil, Anda akan melihat:
```
2026/06/10 15:13:41 Server running on http://localhost:8080
```

## Step 3: Setup Frontend (React + Vite)

Di terminal/command prompt baru:

1. Navigate ke folder frontend:

```bash
cd c:\Vs code project\UAS_RPL_Wisyananda_Affandi\frontend
```

2. Install npm dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

Jika berhasil, Anda akan melihat:
```
VITE v5.4.21  ready in XXX ms

➜  Local:   http://localhost:5173/
```

## Step 4: Akses Aplikasi

Buka browser Anda dan kunjungi:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080/api/facilities

## Troubleshooting

### MySQL Connection Error di Backend

**Error**: `Failed to connect to database: [2002] No such file or directory`

**Solusi**:
1. Pastikan MySQL di XAMPP sudah running
2. Buka XAMPP Control Panel
3. Lihat status MySQL (seharusnya "Running")
4. Jika belum, klik tombol "Start" pada MySQL

### Port 8080 atau 5173 Sudah Digunakan

**Error**: `listen tcp :8080: bind: An attempt was made to reuse a socket in a state that does not permit its reuse`

**Solusi Backend**:
1. Edit file `backend/main.go`
2. Cari baris: `port := ":8080"`
3. Ganti dengan port lain misalnya: `port := ":8081"`
4. Update URL di frontend komponen jika diperlukan

**Solusi Frontend**:
```bash
npm run dev -- --port 3000
```

### CORS Error di Browser Console

Jika frontend tidak bisa fetch data dari backend:

1. Pastikan backend sudah running
2. Pastikan URL di frontend komponen benar: `http://localhost:8080`
3. Backend sudah meng-enable CORS

### Dependency Issues

Jika ada error saat `npm install`:

```bash
# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

Untuk Go dependencies:

```bash
go mod tidy
go mod verify
```

## Useful Commands

### Backend

```bash
# Run dengan automatic reload (gunakan air)
# Install air terlebih dahulu: go install github.com/cosmtrek/air@latest
air

# Build untuk production
go build -o sekolah-impian-api main.go
```

### Frontend

```bash
# Build untuk production
npm run build

# Preview production build
npm run preview

# Check for linting issues
npm run lint  # Jika tersedia
```

## File Structure Reference

```
UAS_RPL_Wisyananda_Affandi/
├── backend/
│   ├── main.go                 # Server utama
│   ├── go.mod                  # Module definition
│   ├── go.sum                  # Dependency lock
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Facilities.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── .gitignore
│   └── node_modules/
├── README.md                   # Dokumentasi utama
├── SETUP.md                    # File ini
└── start.bat                   # Script startup Windows
```

## Next Steps

1. Customize data di `backend/main.go` - fungsi `seedData()`
2. Styling dapat dimodifikasi di `frontend/src/index.css` dan tailwind config
3. Tambahkan fitur baru seperti form kontak, blog, atau admin dashboard
4. Deploy ke server production (Heroku, Railway, DigitalOcean, dll)

## Support

Jika ada pertanyaan atau masalah, silakan:
1. Cek README.md untuk informasi lebih lengkap
2. Lihat error message di console untuk petunjuk
3. Verifikasi semua prerequisites sudah terinstall

Selamat! Aplikasi Anda siap dijalankan! 🚀

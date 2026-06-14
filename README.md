# Landing Page Sekolah Impian

Aplikasi web fullstack modern untuk Landing Page "Sekolah Impian" - sebuah institusi pendidikan kejuruan yang fokus pada literasi finansial dan kemitraan dengan Bursa Efek Indonesia (BEI).

## 🏗️ Struktur Project

```
.
├── backend/           # Backend API (Golang + MySQL)
│   ├── main.go       # Entry point server
│   ├── go.mod        # Go module dependencies
│   └── go.sum        # Go module lock file
├── frontend/         # Frontend Web (Vite + React + Tailwind CSS)
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx       # Main component
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json      # NPM dependencies
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**: Vite, React 18, Tailwind CSS, Axios
- **Backend**: Golang, GORM ORM, Gorilla Mux
- **Database**: MySQL 8.0 (via XAMPP)
- **Styling**: Tailwind CSS dengan central gradient background
- **API**: RESTful dengan CORS support

## 📋 Fitur

- ✅ **Hero Section**: Headline sekolah dengan CTA button
- ✅ **About Section**: Visi dan kemitraan BEI
- ✅ **Programs Section**: Daftar program keahlian (dinamis dari API)
- ✅ **Facilities Section**: Daftar fasilitas unggulan (dinamis dari API)
- ✅ **Contact Section**: Informasi kontak sekolah
- ✅ **Central Gradient Background**: Desain modern dengan radial gradient
- ✅ **Auto Migration**: Database schema otomatis
- ✅ **Data Seeding**: Seeding data fasilitas dan program
- ✅ **CORS Enabled**: Frontend dapat akses API tanpa masalah

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ dan npm
- Go 1.21+
- MySQL 8.0+ (XAMPP)

### Setup Backend

1. **Setup Database**
   ```bash
   C:\xampp\mysql\bin\mysql.exe -u root -e "CREATE DATABASE IF NOT EXISTS sekolah_impian DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
   ```

2. **Install Dependencies & Run Server**
   ```bash
   cd backend
   go get github.com/gorilla/mux
   go get github.com/gorilla/handlers
   go get gorm.io/gorm
   go get gorm.io/driver/mysql
   go run main.go
   ```

   Server akan berjalan di `http://localhost:8080`

### Setup Frontend

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

   Akses di `http://localhost:5173`

## 📡 API Endpoints

- `GET /api/facilities` - Daftar fasilitas unggulan
- `GET /api/programs` - Daftar program keahlian

### Response Examples

**GET /api/facilities**
```json
[
  {
    "id": 1,
    "title": "Laboratorium Trading",
    "description": "Lab modern untuk belajar trading saham...",
    "icon_name": "chart"
  },
  ...
]
```

**GET /api/programs**
```json
[
  {
    "id": 1,
    "name": "Program Akuntansi",
    "description": "Keahlian mengelola keuangan..."
  },
  ...
]
```

## 🎨 Design Features

- **Central Gradient Background**: Radial gradient dari ungu ke pink (dari pusat layar)
- **Glassmorphism Cards**: Kartu dengan efek glass dengan transparency dan blur
- **Responsive Design**: Mobile-first approach dengan Tailwind CSS
- **Smooth Animations**: Hover effects dan transitions
- **Accessible**: Semantic HTML dan ARIA labels

## 📊 Database Schema

### Tabel `facilities`
- `id` (PRIMARY KEY, AUTO_INCREMENT)
- `title` (VARCHAR)
- `description` (TEXT)
- `icon_name` (VARCHAR)

### Tabel `programs`
- `id` (PRIMARY KEY, AUTO_INCREMENT)
- `name` (VARCHAR)
- `description` (TEXT)

## 🔧 Configuration

### Backend Configuration
- Port: 8080 (default)
- Database: root@localhost:3306/sekolah_impian
- CORS: Allowed dari semua origin (dapat disesuaikan di main.go)

### Frontend Configuration
- Port: 5173 (default Vite)
- API Base URL: http://localhost:8080

## 📝 Seeding Data

Data awal otomatis di-seed saat server backend dijalankan:

**Facilities:**
1. Laboratorium Trading
2. Ruang Simulasi Bursa
3. Perpustakaan Keuangan
4. Lab Komputer

**Programs:**
1. Program Akuntansi
2. Program Pasar Modal
3. Program Perbankan
4. Program Asuransi

## 🚢 Production Build

### Backend
```bash
cd backend
go build -o sekolah-impian-api main.go
./sekolah-impian-api
```

### Frontend
```bash
cd frontend
npm run build
# Build output di folder dist/
```

## 🐛 Troubleshooting

### Backend tidak bisa connect ke database
- Pastikan MySQL (XAMPP) sudah running
- Verify database name: `sekolah_impian`
- Check user credentials di DSN connection string

### Frontend tidak bisa fetch data dari API
- Pastikan backend sudah running di port 8080
- Check browser console untuk CORS errors
- Verify API endpoint URL di komponem

### Port 8080 atau 5173 sudah digunakan
- Backend: Ubah port di `main.go` (var port)
- Frontend: `npm run dev -- --port 3000`

## 📚 Resources

- [Golang Documentation](https://golang.org/doc/)
- [GORM Documentation](https://gorm.io/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 📄 License

This project is created for UAS RPL Wisyananda Affandi.

## ✨ Author

Created with ❤️ by Copilot CLI

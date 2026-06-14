# Landing Page Sekolah Impian - Cheat Sheet

## ⚡ Quick Start

**Easiest Way (Windows):**
```bash
# Just double-click this file:
start.bat
```

**Manual Way:**
```bash
# Terminal 1 - Backend
cd backend
go run main.go

# Terminal 2 - Frontend
cd frontend
npm run dev

# Then open: http://localhost:5173
```

---

## 🌐 URLs

| Service | URL | Port |
|---------|-----|------|
| Frontend | http://localhost:5173 | 5173 |
| Backend | http://localhost:8080 | 8080 |
| API (Facilities) | http://localhost:8080/api/facilities | 8080 |
| API (Programs) | http://localhost:8080/api/programs | 8080 |

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `backend/main.go` | Complete Golang API server |
| `frontend/src/App.jsx` | Main React component |
| `frontend/src/components/*.jsx` | 5 React components |
| `frontend/index.html` | HTML entry point |
| `frontend/src/index.css` | Global styles + gradient |
| `START_HERE.txt` | Setup guide |
| `README.md` | Full documentation |

---

## 🗄️ Database

- **Name:** sekolah_impian
- **User:** root (no password)
- **Host:** localhost:3306
- **Tables:** facilities, programs
- **Auto-migration:** ✓ Enabled
- **Auto-seeding:** ✓ Enabled (4 facilities + 4 programs)

---

## 🔧 Common Commands

### Backend
```bash
# Run development server
go run main.go

# Build executable
go build -o sekolah-impian-api main.go

# Run production build
./sekolah-impian-api

# Download dependencies
go get github.com/gorilla/mux
go get github.com/gorilla/handlers
go get gorm.io/gorm
go get gorm.io/driver/mysql
```

### Frontend
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Customization Quick Reference

### Change Seed Data
**File:** `backend/main.go` (line ~95)
```go
func seedData() {
    // Edit this section to change initial data
    facilities := []Facility{
        {Title: "Your Title", Description: "Your description", IconName: "icon"},
    }
}
```

### Change Colors/Styling
**File:** `frontend/src/index.css` (line ~6)
```css
background: radial-gradient(circle at center, #667eea 0%, #764ba2 100%);
/* Change these hex colors */
```

### Change Tailwind Colors
**File:** `frontend/tailwind.config.js`

### Change API Port
**File:** `backend/main.go` (line ~70)
```go
port := ":8080"  // Change this port
```

### Change Frontend Port
**Run command:**
```bash
npm run dev -- --port 3000
```

---

## ⚠️ Troubleshooting

### Backend won't start
```
Error: Failed to connect to database
→ Make sure MySQL (XAMPP) is running
→ Open XAMPP Control Panel and click "Start" on MySQL
```

### Port already in use
```
Error: listen tcp :8080: bind: address already in use
→ Change port in backend/main.go
→ Or kill the process using that port
```

### Frontend can't fetch data
```
Error: CORS policy or connection refused
→ Make sure backend is running first
→ Check that API URL is correct
→ Check browser console for errors
```

### npm install fails
```
$ npm cache clean --force
$ npm install
```

---

## 📊 Architecture

```
Client (React)
    ↓ Fetch (http://localhost:8080/api/*)
Server (Go/Golang)
    ↓ Query
Database (MySQL)
    ↓ Response
Server (Go/Golang)
    ↓ JSON
Client (React)
    ↓ Render
Browser
```

---

## ✨ Features Overview

| Component | Dynamic | Purpose |
|-----------|---------|---------|
| Hero | Static | Main title & CTA button |
| About | Static | Vision & BEI partnership |
| Programs | **Dynamic** | Fetches from `/api/programs` |
| Facilities | **Dynamic** | Fetches from `/api/facilities` |
| Contact | Static | Contact information |

---

## 🚀 Production Deployment

### Build Backend
```bash
cd backend
go build -o sekolah-impian-api main.go
```

### Build Frontend
```bash
cd frontend
npm run build
# Output: dist/ folder (upload to web server)
```

### Docker Setup (Optional)
Would require Dockerfile creation

---

## 📚 Documentation Files

| File | Content |
|------|---------|
| `START_HERE.txt` | Quick start guide |
| `README.md` | Full technical docs |
| `SETUP.md` | Detailed setup guide |
| `CHEATSHEET.md` | This file |
| `PROJECT_STATUS.txt` | Project overview |
| `PRD.md` | Requirements document |

---

## 🔗 API Reference

### GET /api/facilities

**Response:**
```json
[
  {
    "id": 1,
    "title": "Laboratorium Trading",
    "description": "Lab modern untuk belajar trading...",
    "icon_name": "chart"
  }
]
```

### GET /api/programs

**Response:**
```json
[
  {
    "id": 1,
    "name": "Program Akuntansi",
    "description": "Keahlian mengelola keuangan..."
  }
]
```

---

## 🛠️ Tech Stack Quick Reference

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend Framework** | React | 18.2.0 |
| **Frontend Build** | Vite | 5.4.21 |
| **Frontend Styling** | Tailwind CSS | 3.4.0 |
| **Backend Framework** | Golang | 1.21+ |
| **Backend ORM** | GORM | 1.31.1 |
| **Database** | MySQL | 8.0 |
| **Router** | Gorilla Mux | 1.8.1 |
| **CORS** | Gorilla Handlers | 1.5.2 |

---

## 📞 Quick Help

**Issue:** Backend doesn't work  
**Solution:** Read `SETUP.md` → Troubleshooting section

**Issue:** Frontend not loading  
**Solution:** Make sure backend is running first

**Issue:** API returns error  
**Solution:** Check terminal for error messages

**Issue:** CSS not working  
**Solution:** Check `frontend/src/index.css` and Tailwind config

**Issue:** Database error  
**Solution:** Verify MySQL is running and database exists

---

## 🎯 Workflow Recap

1. **Setup (One-time)**
   - Install Node.js, Go, MySQL
   - Run `npm install` in frontend folder
   - Create database

2. **Development (Every session)**
   - Start MySQL (XAMPP)
   - Run `go run main.go` in backend
   - Run `npm run dev` in frontend
   - Open http://localhost:5173

3. **Build (Before deployment)**
   - `go build` for backend
   - `npm run build` for frontend
   - Deploy to hosting service

---

**Last Updated:** 2026-06-10  
**Status:** ✅ Production Ready  
**Author:** Copilot CLI

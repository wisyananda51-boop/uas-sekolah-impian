@echo off
REM Startup script untuk Windows
REM Jalankan script ini untuk memulai kedua server (backend dan frontend)

echo.
echo ========================================
echo Sekolah Impian - Startup Script
echo ========================================
echo.

REM Check if running from correct directory
if not exist "backend" (
    echo Error: backend folder not found. Please run this script from project root.
    pause
    exit /b 1
)

if not exist "frontend" (
    echo Error: frontend folder not found. Please run this script from project root.
    pause
    exit /b 1
)

REM Create database
echo Creating database...
C:\xampp\mysql\bin\mysql.exe -u root -e "CREATE DATABASE IF NOT EXISTS sekolah_impian DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;" >nul 2>&1

REM Start backend in new window
echo Starting backend server on port 8080...
start "Sekolah Impian - Backend" cmd /k "cd backend && go run main.go"

REM Wait a bit for backend to start
timeout /t 3 /nobreak

REM Start frontend in new window
echo Starting frontend server on port 5173...
start "Sekolah Impian - Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo Servers started!
echo.
echo Backend:  http://localhost:8080
echo Frontend: http://localhost:5173
echo.
echo Close the console windows when done.
echo ========================================
echo.

pause

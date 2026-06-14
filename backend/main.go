package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

type Facility struct {
	ID          uint   `gorm:"primaryKey" json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	IconName    string `json:"icon_name"`
}

type Program struct {
	ID          uint   `gorm:"primaryKey" json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

func main() {
	// Inisialisasi database
	var err error
	dsn := "root:@tcp(127.0.0.1:3306)/sekolah_impian?charset=utf8mb4&parseTime=True&loc=Local"
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	// Auto Migration
	db.AutoMigrate(&Facility{}, &Program{})

	// Seeding data jika tabel kosong
	seedData()

	// Setup router
	router := mux.NewRouter()

	// CORS middleware
	corsHandler := handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)

	// Routes
	router.HandleFunc("/api/facilities", getFacilities).Methods("GET")
	router.HandleFunc("/api/programs", getPrograms).Methods("GET")

	// Server
	port := ":8080"
	log.Printf("Server running on http://localhost%s", port)
	log.Fatal(http.ListenAndServe(port, corsHandler(router)))
}

func getFacilities(w http.ResponseWriter, r *http.Request) {
	var facilities []Facility
	db.Find(&facilities)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(facilities)
}

func getPrograms(w http.ResponseWriter, r *http.Request) {
	var programs []Program
	db.Find(&programs)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(programs)
}

func seedData() {
	var count int64
	db.Model(&Facility{}).Count(&count)
	if count == 0 {
		facilities := []Facility{
			{Title: "Laboratorium Trading", Description: "Lab modern untuk belajar trading saham dan investasi dengan simulator real-time", IconName: "chart"},
			{Title: "Ruang Simulasi Bursa", Description: "Fasilitas simulasi perdagangan saham yang realistis dengan data pasar sesungguhnya", IconName: "trending"},
			{Title: "Perpustakaan Keuangan", Description: "Koleksi lengkap buku-buku tentang investasi, finansial, dan pasar modal", IconName: "book"},
			{Title: "Lab Komputer", Description: "Komputer berkonfigurasi tinggi untuk analisis data dan pemrograman finansial", IconName: "laptop"},
		}
		db.CreateInBatches(facilities, 100)
	}

	db.Model(&Program{}).Count(&count)
	if count == 0 {
		programs := []Program{
			{Name: "Program Akuntansi", Description: "Keahlian mengelola keuangan dan laporan keuangan perusahaan"},
			{Name: "Program Pasar Modal", Description: "Khusus mempelajari investasi saham dan instrumen pasar modal"},
			{Name: "Program Perbankan", Description: "Siap bekerja di sektor perbankan dan layanan keuangan digital"},
			{Name: "Program Asuransi", Description: "Mendalami bisnis asuransi dan manajemen risiko finansial"},
		}
		db.CreateInBatches(programs, 100)
	}
}

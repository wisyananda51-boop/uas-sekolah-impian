import React from 'react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-950"
    >
      {/* 1. BACKGROUND GAMBAR CANDLE SAHAM / BURSA EFEK (IDX) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920&auto=format&fit=crop')` 
        }}
      ></div>

      {/* 2. OVERLAY GELAP + CENTRAL GRADIENT (Biar teks super jelas dibaca & gradasi tetep pas di tengah) */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none z-0"></div>

      {/* 3. KONTEN UTAMA HERO */}
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-20">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wide mb-6 animate-pulse">
          📈 Terakreditasi & Bermitra dengan BEI
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Membangun Generasi <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
            Cerdas & Melek Finansial
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Selamat datang di Sekolah Impian Financial Academy. Pelopori masa depanmu dengan keahlian Akuntansi modern, analisis Pasar Modal, dan simulasi Trading real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#programs" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-900/40 hover:shadow-emerald-500/20 transform hover:-translate-y-0.5 text-center"
          >
            Lihat Program Keahlian
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Variasi Ornamen Tambahan di Bagian Bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </section>
  );
}
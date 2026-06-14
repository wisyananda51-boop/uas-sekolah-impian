import { useState } from "react";
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* KIRI: Panggil Komponen Logo Resmi */}
        <a href="#hero" className="hover:opacity-90 transition-opacity">
          <Logo size="md" />
        </a>

        {/* TENAN/KANAN: Menu Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
            Beranda
          </a>
          <a href="#about" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
            Tentang
          </a>
          <a href="#programs" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
            Program
          </a>
          <a href="#facilities" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
            Fasilitas
          </a>
          <a href="#contact" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
            Kontak
          </a>
        </div>

        {/* KANAN: Tombol CTA Desktop */}
        <div className="hidden md:block">
          <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-900/20 active:scale-95">
            Daftar Sekarang
          </button>
        </div>

        {/* TOMBOL HAMBURGER: Menu Mobile */}
        <button 
          className="md:hidden text-slate-300 hover:text-emerald-400 text-2xl focus:outline-none transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MENU MOBILE DROP DOWN */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/5 flex flex-col gap-4 px-6 py-6 animate-fadeIn">
          <a 
            href="#hero" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
          >
            Beranda
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
          >
            Tentang
          </a>
          <a 
            href="#programs" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
          >
            Program
          </a>
          <a 
            href="#facilities" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
          >
            Fasilitas
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
          >
            Kontak
          </a>
          
          <button className="w-full mt-2 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl transition shadow-lg">
            Daftar Sekarang
          </button>
        </div>
      )}
    </nav>
  );
}
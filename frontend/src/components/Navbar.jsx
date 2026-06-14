import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Sekolah Impian</h1>
        <div className="hidden md:flex gap-8">
          <a href="#hero" className="text-gray-700 hover:text-blue-600">Beranda</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">Tentang</a>
          <a href="#programs" className="text-gray-700 hover:text-blue-600">Program</a>
          <a href="#facilities" className="text-gray-700 hover:text-blue-600">Fasilitas</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Kontak</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t flex flex-col gap-4 px-6 py-4">
          <a href="#hero" className="text-gray-700">Beranda</a>
          <a href="#about" className="text-gray-700">Tentang</a>
          <a href="#programs" className="text-gray-700">Program</a>
          <a href="#facilities" className="text-gray-700">Fasilitas</a>
          <a href="#contact" className="text-gray-700">Kontak</a>
        </div>
      )}
    </nav>
  );
}

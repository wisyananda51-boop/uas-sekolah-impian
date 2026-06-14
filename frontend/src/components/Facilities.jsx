import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';

// Fungsi pengaman untuk mengambil icon dari Font Awesome
const getIcon = (iconName) => {
  if (!iconName) return FaIcons.FaSchool; // Default icon jika kosong
  
  // Konversi string seeder (misal: "fa-chart-line") ke format PascalCase (FaChartLine)
  const formattedName = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
    
  const IconComponent = FaIcons[formattedName] || FaIcons[formattedName.replace(/^FaFa/, 'Fa')];
  return IconComponent || FaIcons.FaSchool;
};

export default function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data dari backend Golang secara dinamis
  useEffect(() => {
    fetch('http://localhost:8080/api/facilities')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data dari server');
        return res.json();
      })
      .then((data) => {
        setFacilities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Gagal memuat data dari API backend.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="facilities" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Efek Central Gradient Premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Fasilitas <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Unggulan</span>
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Infrastruktur modern yang mendukung pembelajaran praktis dan interaktif
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-64">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-emerald-400 border-t-blue-400 rounded-full animate-spin mb-4 mx-auto"></div>
              <p className="text-blue-200 text-lg">Memuat fasilitas...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-red-950/30 backdrop-blur-xl rounded-2xl border border-red-500/20 max-w-2xl mx-auto">
            <p className="text-red-200 text-lg font-semibold">{error}</p>
            <p className="text-red-300/70 text-sm mt-2">Pastikan server backend Golang running di localhost:8080</p>
          </div>
        ) : facilities.length === 0 ? (
          <div className="text-center py-12 bg-blue-950/20 backdrop-blur-xl rounded-2xl border border-blue-500/20 max-w-2xl mx-auto">
            <p className="text-blue-200 text-lg">Belum ada data fasilitas tersedia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility) => {
              const IconComponent = getIcon(facility.icon_name || facility.IconName);
              return (
                <div
                  key={facility.id || Math.random()}
                  className="group bg-gradient-to-br from-slate-900/50 to-blue-950/30 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  <div className="flex items-start gap-6 relative z-10">
                    <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 p-4 bg-slate-800/60 rounded-2xl text-emerald-400 group-hover:text-emerald-300">
                      <IconComponent />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {facility.name || facility.title || 'Fasilitas'}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                        {facility.description || 'Deskripsi fasilitas tidak tersedia.'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
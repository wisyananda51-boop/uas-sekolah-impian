import React from 'react';
import { FaCalculator, FaChartLine, FaBriefcase, FaLaptopCode } from 'react-icons/fa';

export default function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Akuntansi & Keuangan',
      alias: 'Accounting & Corporate Finance',
      description: 'Menguasai pencatatan keuangan digital, audit, perpajakan, dan pengelolaan finansial korporat berbasis software modern.',
      icon: <FaCalculator />,
      color: 'from-blue-500 to-cyan-500',
      badge: 'Favorit'
    },
    {
      id: 2,
      name: 'Pasar Modal & Trading',
      alias: 'Capital Markets & Wealth Management',
      description: 'Program unggulan analisis teknikal/fundamental saham, instrumen derivatif, dan simulasi trading real-time langsung di lab.',
      icon: <FaChartLine />,
      color: 'from-emerald-500 to-teal-500',
      badge: 'Unggulan'
    },
    {
      id: 3,
      name: 'Manajemen Bisnis',
      alias: 'Digital Business & Entrepreneurship',
      description: 'Belajar strategi bisnis retail, finansial startup, marketing digital, dan pembentukan mental entrepeneur melek investasi.',
      icon: <FaBriefcase />,
      color: 'from-amber-500 to-orange-500',
      badge: 'Populer'
    },
    {
      id: 4,
      name: 'Teknologi Informasi',
      alias: 'Financial Technology (FinTech)',
      description: 'Integrasi pemrograman, pengelolaan basis data keuangan, dan pengembangan sistem informasi perbankan modern.',
      icon: <FaLaptopCode />,
      color: 'from-purple-500 to-pink-500',
      badge: 'FinTech'
    }
  ];

  return (
    <section id="programs" className="py-24 px-6 relative overflow-hidden bg-slate-950 border-b border-white/5">
      {/* Efek Central Gradient Halus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Pilihan Masa Depan
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">
            Program <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Keahlian</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Kurikulum adaptif yang dirancang khusus untuk mencetak tenaga profesional siap kerja di industri keuangan dan teknologi.
          </p>
        </div>

        {/* Grid Kartu Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group relative bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Efek Background Glow saat kartu di-hover */}
              <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 blur-[50px] rounded-full transition-opacity duration-500 pointer-events-none`}></div>

              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                {/* Kolom Icon Dinamis */}
                <div className={`text-3xl p-4 bg-gradient-to-br ${program.color} text-white rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}>
                  {program.icon}
                </div>

                {/* Kolom Teks */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {program.name}
                    </h3>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded-md">
                      {program.badge}
                    </span>
                  </div>
                  
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    {program.alias}
                  </p>
                  
                  <p className="text-sm text-slate-400 leading-relaxed pt-2 group-hover:text-slate-300 transition-colors">
                    {program.description}
                  </p>

                  {/* Tombol Interaktif Kecil */}
                  <div className="pt-4 flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors cursor-pointer">
                    <span>Pelajari Lebih Lanjut</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function Logo({ size = 'md' }) {
  const iconSizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-14 h-14 text-2xl'
  };

  const textSizes = {
    sm: { title: 'text-base', sub: 'text-[9px]' },
    md: { title: 'text-lg', sub: 'text-[10px]' },
    lg: { title: 'text-2xl', sub: 'text-xs' }
  };

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Simbol Grafis */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 border border-white/10 group-hover:border-emerald-400/40 transition-all duration-300 shadow-xl ${iconSizes[size]}`}>
        {/* Efek kilatan cahaya di background icon */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Gabungan grafis Finansial & Edukasi */}
        <span className="text-emerald-400 font-extrabold tracking-tighter relative z-10 flex items-center">
          ⚡
        </span>
      </div>

      {/* Identitas Teks */}
      <div className="flex flex-col">
        <h1 className={`font-black tracking-tight text-white leading-none ${textSizes[size].title}`}>
          Sekolah<span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Impian</span>
        </h1>
        <p className={`font-semibold tracking-[0.2em] text-slate-400 uppercase mt-0.5 ${textSizes[size].sub}`}>
          Financial Academy
        </p>
      </div>
    </div>
  );
}
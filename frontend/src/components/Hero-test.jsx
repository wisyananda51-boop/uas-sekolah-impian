export default function Hero() {
  console.log('Hero component rendering');
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="text-center max-w-5xl relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
          Sekolah <span className="text-emerald-400">Impian</span>
        </h1>
        <p className="text-2xl text-blue-100 mb-6">
          Generasi Melek Finansial & Pasar Modal
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-slate-950 font-bold rounded-xl">
          🚀 Daftar Sekarang
        </button>
      </div>
    </section>
  );
}

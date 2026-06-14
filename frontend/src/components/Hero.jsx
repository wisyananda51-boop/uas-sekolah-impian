export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Sekolah Impian</h2>
        <p className="text-xl md:text-2xl mb-8">Generasi Melek Finansial & Pasar Modal</p>
        <p className="text-lg mb-12 opacity-90">Bersiaplah menjadi pemimpin finansial masa depan bersama kemitraan resmi Bursa Efek Indonesia</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
}

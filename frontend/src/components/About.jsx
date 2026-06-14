export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Tentang Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop" 
              alt="Tentang Sekolah" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sekolah Impian adalah institusi pendidikan kejuruan yang fokus pada pemberdayaan generasi muda dalam pengetahuan finansial dan pasar modal.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dengan didukung oleh kemitraan resmi dengan Bursa Efek Indonesia, kami menyediakan kurikulum terdepan yang relevan dengan industri.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Misi kami adalah menciptakan generasi yang melek finansial dan siap menjadi pemimpin bisnis di masa depan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Kualitas Pendidikan</h3>
            <p className="text-gray-600">Kurikulum internasional dengan standar global terbaik</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Pengajar Berpengalaman</h3>
            <p className="text-gray-600">Tenaga pendidik dari praktisi industri yang berpengalaman puluhan tahun</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Peluang Karir</h3>
            <p className="text-gray-600">Jaringan luas dengan perusahaan-perusahaan terkemuka di Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

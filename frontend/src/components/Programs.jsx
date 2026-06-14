export default function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Akuntansi',
      description: 'Pelajari prinsip-prinsip akuntansi dan pembukuan keuangan profesional'
    },
    {
      id: 2,
      name: 'Pasar Modal',
      description: 'Kuasai teknik analisis dan trading di pasar modal Indonesia'
    },
    {
      id: 3,
      name: 'Manajemen Bisnis',
      description: 'Pelajari strategi bisnis dan kepemimpinan organisasi modern'
    },
    {
      id: 4,
      name: 'Teknologi Informasi',
      description: 'Kuasai pemrograman dan sistem informasi bisnis terkini'
    }
  ];

  return (
    <section id="programs" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Program Keahlian</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.name}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Pelajari Lebih Lanjut
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

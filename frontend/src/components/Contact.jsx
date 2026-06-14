import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi kirim pesan
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Efek Central Gradient Premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Hubungi <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan seputar pendaftaran atau program keahlian? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Kontak Kiri */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900/60 to-blue-950/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Informasi Sekolah</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl text-xl mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Alamat Kampus</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Jl. Edukasi Finansial No. 88, Zona Pasar Modal, Jakarta Pusat</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 text-blue-400 rounded-xl text-xl mt-1">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telepon / WhatsApp</h4>
                  <p className="text-slate-400 text-sm">(021) 555-1234 / +62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-purple-500/10 text-purple-400 rounded-xl text-xl mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Resmi</h4>
                  <p className="text-slate-400 text-sm">info@sekolahimpian.sch.id</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-amber-500/10 text-amber-400 rounded-xl text-xl mt-1">
                  <FaClock />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Jam Operasional</h4>
                  <p className="text-slate-400 text-sm">Senin - Jumat: 07.00 - 15.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Kanan */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-900/60 to-blue-950/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Kirim Pesan Langsung</h3>
              <p className="text-slate-400 text-sm mb-6">Isi formulir di bawah ini untuk meninggalkan pesan atau feedback.</p>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Alamat Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Pesan Anda</label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition resize-none"
                  placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
              >
                {submitted ? 'Pesan Berhasil Dikirim! ✓' : 'Kirim Pesan Sekarang'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;



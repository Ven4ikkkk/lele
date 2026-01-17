import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ingredients from './components/Ingredients';
import Footer from './components/Footer';
import NeuroChat from './components/NeuroChat';

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Ingredients />
        <section className="py-24 bg-gradient-to-b from-black to-zinc-900 border-t border-white/5">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase">Готовы к <span className="text-pink-500">трансформации?</span></h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                Ваша кожа заслуживает ухода на клеточном уровне. Попробуйте инновационную формулу NeuroBeaut уже сегодня.
              </p>
              <button className="px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all transform hover:-translate-y-1">
                 Заказать сыворотку
              </button>
           </div>
        </section>
      </main>
      <NeuroChat />
      <Footer />
    </div>
  );
}

export default App;
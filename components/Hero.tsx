import React from 'react';
import { ArrowRight, Sparkles, Dna, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  // ПРОПОРЦИИ: 39мм x 39мм x 110мм
  // Мы сохраняем эти пропорции для реалистичности формы

  return (
    <div id="product" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
         {/* Moving gradients */}
         <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.15]" 
              style={{backgroundImage: 'radial-gradient(circle at center, transparent 0%, #000 100%), url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>
      </div>

      <style>{`
        .scene {
          perspective: 1000px;
        }
        
        .product-container {
          position: relative;
          transform-style: preserve-3d;
          animation: float 6s ease-in-out infinite;
        }

        .cube {
          width: 160px;  /* Ширина */
          height: 450px; /* Высота */
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 15s infinite linear;
        }
        
        .cube__face {
          position: absolute;
          width: 160px;
          height: 450px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.1) inset;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backface-visibility: visible; /* Делаем стекло прозрачным */
          overflow: hidden;
        }

        /* Светящиеся грани (акценты) */
        .cube__face::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #ec4899, transparent);
          opacity: 0.8;
        }
        .cube__face::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          opacity: 0.8;
        }

        /* ПЕРЕДНЯЯ */
        .cube__face--front  { transform: rotateY(  0deg) translateZ(80px); }
        /* ЗАДНЯЯ */
        .cube__face--back   { transform: rotateY(180deg) translateZ(80px); }
        /* ПРАВАЯ */
        .cube__face--right  { transform: rotateY( 90deg) translateZ(80px); }
        /* ЛЕВАЯ */
        .cube__face--left   { transform: rotateY(-90deg) translateZ(80px); }
        
        /* ВЕРХ И НИЗ */
        .cube__face--top {
          width: 160px; height: 160px;
          transform: rotateX( 90deg) translateZ(80px);
          background: rgba(255,255,255,0.1);
        }
        .cube__face--bottom {
          width: 160px; height: 160px;
          transform: rotateX(-90deg) translateZ(370px);
          background: rgba(0,0,0,0.8);
          box-shadow: 0 0 50px 20px rgba(236, 72, 153, 0.4);
        }

        /* ЭНЕРГЕТИЧЕСКОЕ ЯДРО (ВНУТРИ) */
        .core {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%) translateZ(0);
            width: 40px; height: 300px;
            background: linear-gradient(180deg, #ec4899, #3b82f6);
            filter: blur(20px);
            border-radius: 20px;
            opacity: 0.6;
            animation: pulse-core 3s infinite ease-in-out;
        }

        /* Design Elements inside faces */
        .design-text {
            font-family: 'Unbounded', sans-serif;
            color: white;
            z-index: 10;
        }
        
        .holo-line {
            width: 1px;
            height: 100%;
            background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);
            position: absolute;
            left: 20%;
        }

        @keyframes rotate {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(10deg); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }
        @keyframes pulse-core {
            0%, 100% { opacity: 0.5; height: 300px; }
            50% { opacity: 0.8; height: 350px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-pink-300">Bio-Tech Skincare</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
            ИСТИННАЯ<br />
            <span className="neuro-gradient">КРАСОТА</span><br />
            В КЛЕТКЕ.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 font-light">
            Мы отказались от простой упаковки. 
            Сыворотка NEUROBEAUT — это чистая энергия для вашей кожи. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Купить сейчас
            </button>
            <button className="px-8 py-4 border border-white/20 hover:border-pink-500 text-white font-bold uppercase tracking-widest hover:bg-pink-500/10 transition-all flex items-center justify-center gap-2">
              О технологии <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Holographic 3D Product */}
        <div className="relative h-[650px] flex items-center justify-center order-1 lg:order-2 perspective-[2000px]">
           <div className="scene">
             <div className="product-container">
                <div className="cube">
                    {/* The glowing core inside representing the serum */}
                    <div className="core"></div>

                    {/* Front Face */}
                    <div className="cube__face cube__face--front">
                        <div className="holo-line"></div>
                        <div className="absolute top-10 right-4 text-[0.6rem] text-pink-400 font-mono">SERIES: 001</div>
                        
                        <div className="design-text text-center mt-20">
                            <Dna className="w-12 h-12 text-pink-500 mx-auto mb-4 opacity-80" />
                            <div className="text-3xl font-black tracking-tighter">NEURO</div>
                            <div className="text-xl font-light tracking-[0.2em] text-pink-300">BEAUT</div>
                        </div>
                        
                        <div className="mt-auto mb-12 text-center">
                            <div className="text-[0.6rem] uppercase tracking-widest text-zinc-400">Moisturizing Serum</div>
                            <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-2"></div>
                        </div>
                    </div>

                    {/* Right Face */}
                    <div className="cube__face cube__face--right">
                         <div className="rotate-90 text-6xl font-black text-white/5 whitespace-nowrap tracking-widest absolute">SERUM</div>
                         <div className="flex flex-col gap-4 items-center opacity-50">
                             <Activity className="text-pink-400 w-6 h-6" />
                             <div className="h-20 w-[1px] bg-gradient-to-b from-pink-400 to-transparent"></div>
                         </div>
                    </div>

                    {/* Back Face */}
                    <div className="cube__face cube__face--back">
                        <div className="p-6 text-center">
                             <div className="text-[0.5rem] text-zinc-400 font-mono leading-loose">
                                 [HYDRATION_MATRIX]<br/>
                                 LOADING... 100%<br/><br/>
                                 AKEBIA_EXTRACT<br/>
                                 HYMAGIC_4D<br/>
                             </div>
                        </div>
                    </div>

                    {/* Left Face */}
                    <div className="cube__face cube__face--left">
                        <div className="-rotate-90 text-6xl font-black text-white/5 whitespace-nowrap tracking-widest absolute">NEURO</div>
                    </div>

                    <div className="cube__face cube__face--top"></div>
                    <div className="cube__face cube__face--bottom"></div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
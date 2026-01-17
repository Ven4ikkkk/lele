import React from 'react';
import { Microscope, Droplets, ShieldCheck, Zap } from 'lucide-react';
import { Ingredient } from '../types';

const ingredients: Ingredient[] = [
  {
    name: "Akebia Quinata Extract",
    percentage: "2%",
    description: "Экстракт Акебии пятерной. Мощный антигликационный агент.",
    benefit: "Защита от стресса"
  },
  {
    name: "Hymagic 4D",
    percentage: "2%",
    description: "Комбинация 4-х видов гиалуроновой кислоты.",
    benefit: "3D Увлажнение"
  },
  {
    name: "Biosaccharide Gum-1",
    percentage: "1%",
    description: "Ферментированный полисахарид для пролонгированного увлажнения.",
    benefit: "Нежность кожи"
  }
];

const Ingredients: React.FC = () => {
  return (
    <section id="science" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
            Формула <span className="text-pink-500">Интеллекта</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Наша сыворотка — это не просто косметика. Это био-инженерный ритуал насыщения кожи влагой и аминокислотами.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-pink-500/50 hover:to-purple-500/50 transition-all duration-500">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border border-pink-500 rounded-full flex items-center justify-center z-20">
                <span className="font-bold text-xs text-pink-500">{ing.percentage}</span>
              </div>
              <div className="h-full bg-zinc-900/90 backdrop-blur-xl rounded-xl p-8 pt-10 flex flex-col items-center text-center relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2 text-white font-display uppercase tracking-wider">{ing.name}</h3>
                <div className="w-12 h-1 bg-pink-500 mb-4 rounded-full"></div>
                <p className="text-gray-400 mb-6 text-sm">{ing.description}</p>
                <span className="mt-auto inline-block px-4 py-1 rounded-full border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest">
                  {ing.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { icon: <Microscope />, label: "Инновации", sub: "Научный подход" },
                { icon: <Droplets />, label: "Гидратация", sub: "Глубокое увлажнение" },
                { icon: <ShieldCheck />, label: "Защита", sub: "Стрессоустойчивость" },
                { icon: <Zap />, label: "Энергия", sub: "Аминокислоты" },
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-xl hover:border-pink-500/50 transition-colors">
                    <div className="text-pink-500 mb-3">{item.icon}</div>
                    <div className="font-bold text-white uppercase text-sm">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
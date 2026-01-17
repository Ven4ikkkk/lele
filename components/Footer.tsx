import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-2">
             <h2 className="text-2xl font-black mb-4 tracking-tighter">NEURO<span className="text-pink-500">BEAUT</span></h2>
             <p className="text-gray-400 max-w-sm mb-6">
               Инновационная композиция активных компонентов для повышения стрессоустойчивости клеток и 3-х мерного увлажнения.
             </p>
             <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                 <span className="font-bold text-xs">EAC</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                 <span className="font-bold text-xs">30ml</span>
               </div>
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">Контакты</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 shrink-0" />
                <span>г. Саранск, ш. Лямбирское, 19</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-500 shrink-0" />
                <a href="mailto:neurobeaut@mail.ru" className="hover:text-white transition">neurobeaut@mail.ru</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-bold shrink-0">Изг:</span>
                <span>ООО «ТВОЙ БРЕНД», МО, Одинцовский р-н</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">Меню</h4>
             <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#product" className="hover:text-pink-500 transition">Продукт</a></li>
                <li><a href="#science" className="hover:text-pink-500 transition">Наука</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Доставка</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Оферта</a></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} NEUROBEAUT. Все права защищены.</p>
          <p className="mt-2 md:mt-0">Разработано с использованием NeuroAI Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
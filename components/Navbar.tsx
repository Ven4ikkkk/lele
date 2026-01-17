import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Dna } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Dna className="h-8 w-8 text-pink-500" />
            <span className="display-font font-black text-2xl tracking-tighter text-white">
              NEURO<span className="text-pink-500">BEAUT</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#product" className="hover:text-pink-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest">Продукт</a>
              <a href="#science" className="hover:text-pink-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest">Наука</a>
              <a href="#neuro-ai" className="hover:text-pink-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest">Neuro AI</a>
              <a href="#contacts" className="hover:text-pink-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest">Контакты</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/10 transition">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-500 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#product" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Продукт</a>
            <a href="#science" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Наука</a>
            <a href="#neuro-ai" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Neuro AI</a>
            <a href="#contacts" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Контакты</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
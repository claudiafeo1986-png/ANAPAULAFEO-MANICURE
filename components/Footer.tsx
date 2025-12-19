
import React from 'react';
import { LINKS } from '../constants';
import { Instagram, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
           <h3 className="text-2xl font-bold text-zinc-900 serif italic">Ana Paula Féo</h3>
           <p className="text-zinc-400 text-xs tracking-widest uppercase font-semibold">Nail Specialist & Educator</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-50 rounded-full text-zinc-600 hover:text-[#B76E79] hover:bg-[#B76E79]/5 transition-all">
            <Instagram size={24} />
          </a>
          <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-50 rounded-full text-zinc-600 hover:text-[#B76E79] hover:bg-[#B76E79]/5 transition-all">
            <MessageCircle size={24} />
          </a>
        </div>

        <div className="text-zinc-400 text-sm flex items-center gap-2">
          Made with <Heart size={14} className="text-[#B76E79] fill-current" /> in Teresópolis
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-12 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between text-[10px] text-zinc-300 uppercase tracking-[0.2em] font-bold">
        <p>© {new Date().getFullYear()} Ana Paula Féo. Todos os direitos reservados.</p>
        <p>Design Premium para Experts</p>
      </div>
    </footer>
  );
};


import React from 'react';
import { LINKS } from '../constants';
import { Instagram, MessageCircle } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4">
      <a 
        href={LINKS.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-bounce-slow"
        style={{ animationDuration: '3s' }}
      >
        <Instagram size={28} />
      </a>
      
      <a 
        href={LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform relative group"
      >
        <div className="absolute right-full mr-4 bg-white text-zinc-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale Comigo agora!
        </div>
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

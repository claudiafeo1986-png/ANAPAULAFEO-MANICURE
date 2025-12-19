
import React from 'react';
import { LINKS } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-20 bg-zinc-900 relative overflow-hidden text-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#B76E79] rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B76E79] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        <div className="flex justify-center">
          <Sparkles className="text-[#B76E79]" size={48} />
        </div>
        
        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
          Sua autoestima merece o <br />
          <span className="text-[#B76E79] serif italic font-normal">Toque de Excelência.</span>
        </h2>
        
        <p className="text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Agende agora seu horário ou tire suas dúvidas sobre nossos cursos diretamente no WhatsApp com a Ana Paula Féo.
        </p>

        <div className="pt-6">
          <a 
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#B76E79] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-[#a05d68] transition-all transform hover:scale-105 group"
          >
            Falar com Ana Paula no WhatsApp
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </a>
        </div>
        
        <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
          Teresópolis, Rio de Janeiro
        </p>
      </div>
    </section>
  );
};

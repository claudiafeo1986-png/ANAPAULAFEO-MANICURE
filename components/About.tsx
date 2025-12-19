
import React from 'react';
import { IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-[#B76E79]/10">
              <img 
                src={IMAGES.EXPERT_SECONDARY} 
                alt="Institucional Ana Paula" 
                className="w-full h-full object-cover"
              />
           </div>
           <div className="absolute top-1/2 -left-10 w-20 h-20 bg-[#B76E79]/10 rounded-full blur-2xl -z-10" />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <span className="text-[#B76E79] font-semibold tracking-widest uppercase text-sm block">Trajetória e Propósito</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
            Quem é <span className="serif italic font-normal">Ana Paula Féo</span>
          </h2>
          <div className="w-20 h-1 bg-[#B76E79]/30 rounded-full" />
          
          <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
            <p>
              Com anos de dedicação ao universo da beleza, Ana Paula Féo tornou-se referência em Teresópolis por sua técnica impecável e olhar artístico para o nail design.
            </p>
            <p>
              Sua missão vai além da estética: é sobre elevar a autoestima e proporcionar uma experiência de cuidado exclusivo. Especialista em técnicas de fibra de vidro e gel, ela une saúde, durabilidade e elegância em cada atendimento.
            </p>
            <p>
              Como educadora, já transformou a vida de centenas de alunas, transmitindo o conhecimento necessário para que iniciantes se tornem profissionais de destaque no mercado premium.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-4xl font-bold text-[#B76E79] serif italic">500+</p>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-tighter mt-1">Alunas Formadas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#B76E79] serif italic">5k+</p>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-tighter mt-1">Atendimentos Realizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

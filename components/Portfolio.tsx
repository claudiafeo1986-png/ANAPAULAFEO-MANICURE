
import React from 'react';
import { IMAGES } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
           <span className="text-[#B76E79] font-semibold tracking-widest uppercase text-sm">Portfólio</span>
           <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900">Resultados <span className="serif italic font-normal">Surpreendentes</span></h2>
        </div>
        <p className="text-zinc-500 max-w-md italic">Cada detalhe é pensado para realçar a beleza única de cada cliente.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 lg:px-20 pb-10 scrollbar-hide">
        {IMAGES.PORTFOLIO.map((img, idx) => (
          <div key={idx} className="flex-none w-[300px] md:w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg group">
            <img 
              src={img} 
              alt={`Trabalho ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center lg:hidden">
        <div className="bg-zinc-100 h-1 w-32 rounded-full overflow-hidden">
          <div className="bg-[#B76E79] h-full w-1/3 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

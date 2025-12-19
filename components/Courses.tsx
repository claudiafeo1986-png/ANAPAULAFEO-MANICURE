
import React from 'react';
import { LINKS, IMAGES } from '../constants';
import { Play } from 'lucide-react';

export const Courses: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto mb-16 space-y-4 text-center">
        <span className="text-[#B76E79] font-semibold tracking-widest uppercase text-sm block">Educação Profissional</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900">Domine a <span className="serif italic font-normal">Técnica</span></h2>
        <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">Transforme sua paixão em uma profissão lucrativa com quem entende de verdade do mercado.</p>
      </div>

      <div className="max-w-7xl mx-auto flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
        {IMAGES.COURSES.map((course, idx) => (
          <div key={idx} className="flex-none w-[280px] md:w-[320px] bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-zinc-100 hover:shadow-2xl transition-all duration-300 group">
            <div className="relative aspect-square">
              <img 
                src={course.url} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#B76E79] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Destaque</span>
              </div>
            </div>
            
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold text-zinc-900">{course.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{course.desc}</p>
              <a 
                href={LINKS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#B76E79] font-bold text-sm uppercase tracking-wider group/link"
              >
                Saiba Mais
                <div className="bg-[#B76E79] text-white p-2 rounded-full group-hover/link:translate-x-1 transition-transform">
                  <Play size={10} fill="currentColor" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

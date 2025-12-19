
import React from 'react';
import { Sparkles, Heart, ShieldCheck, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: <Sparkles className="text-[#B76E79]" size={32} />,
    title: "Alongamento Premium",
    desc: "Unas impecáveis com fibra de vidro ou gel moldado, focando na naturalidade extrema e formato perfeito."
  },
  {
    icon: <ShieldCheck className="text-[#B76E79]" size={32} />,
    title: "Saúde e Resistência",
    desc: "Protocolos exclusivos de blindagem e esmaltação em gel que garantem unhas fortes por semanas."
  },
  {
    icon: <GraduationCap className="text-[#B76E79]" size={32} />,
    title: "Cursos e Mentorias",
    desc: "Formação completa do zero ao avançado para manicures que desejam faturar mais com técnicas de elite."
  },
  {
    icon: <Heart className="text-[#B76E79]" size={32} />,
    title: "Spa de Mãos",
    desc: "Uma experiência sensorial completa de relaxamento e hidratação profunda para suas mãos."
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <span className="text-[#B76E79] font-semibold tracking-widest uppercase text-sm">O que fazemos de melhor</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900">Especialidades <span className="serif italic font-normal">Exclusivas</span></h2>
        <p className="text-zinc-500 max-w-2xl mx-auto italic">Técnicas modernas aliadas aos melhores produtos do mercado mundial.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
            <div className="mb-6 bg-[#B76E79]/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-500">
              {React.cloneElement(service.icon as React.ReactElement, { className: "group-hover:text-white transition-colors" })}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-4">{service.title}</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

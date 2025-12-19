
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Juliana Mendes",
    text: "Simplesmente a melhor de Teresópolis. O alongamento durou 30 dias intacto e super natural. O ambiente é um luxo!",
    role: "Cliente Fiel"
  },
  {
    name: "Carla Silveira",
    text: "Fiz o curso de iniciante e minha vida mudou. A Ana Paula é uma professora generosa e ensina cada detalhe da técnica.",
    role: "Ex-Aluna PRO"
  },
  {
    name: "Mariana Costa",
    text: "Atendimento impecável do início ao fim. Profissionalismo puro e as unhas ficam maravilhosas, recebo elogios sempre!",
    role: "Cliente VIP"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900">Vozes de <span className="serif italic font-normal">Satisfação</span></h2>
          <div className="flex justify-center gap-1">
             {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#B76E79" className="text-[#B76E79]" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#FDF8F5] p-10 rounded-3xl relative">
              <Quote className="absolute top-6 right-8 text-[#B76E79]/20" size={64} />
              <div className="space-y-6 relative z-10">
                <p className="text-zinc-600 leading-relaxed italic">"{item.text}"</p>
                <div>
                  <h4 className="font-bold text-zinc-900">{item.name}</h4>
                  <p className="text-[#B76E79] text-xs font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

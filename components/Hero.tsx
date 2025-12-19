
import React from 'react';
import { LINKS, IMAGES } from '../constants';
import { ChevronRight, Award, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FDF8F5] px-6 lg:px-20 py-24 lg:py-0 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B76E79]/5 -skew-x-12 transform translate-x-24 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-[#B76E79]/10 px-4 py-2 rounded-full text-[#B76E79] font-medium text-sm tracking-wide">
            <Sparkles size={16} />
            <span>EXPERT EM BELEZA PREMIUM</span>
          </div>

          <h1 className="text-5xl lg:text-7xl leading-tight text-zinc-900 font-bold">
            A Excelência <br />
            <span className="text-[#B76E79] italic font-normal serif">em Cada Detalhe.</span>
          </h1>

          <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
            Especialista em alongamentos com naturalidade e resistência. Transformando unhas em obras de arte com atendimento de alto padrão.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-700">
            <div className="flex items-center gap-3">
              <Award className="text-[#B76E79]" size={20} />
              <span className="text-sm font-medium">Atendimento de Alto Padrão 🏆</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#B76E79]" size={20} />
              <span className="text-sm font-medium">Cursos Iniciante ao Avançado</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#B76E79]" size={20} />
              <span className="text-sm font-medium">Naturalidade e Resistência</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#B76E79]" size={20} />
              <span className="text-sm font-medium">Teresópolis - RJ</span>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#B76E79] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#a05d68] transition-all transform hover:scale-105 active:scale-95 group"
            >
              Agendar Atendimento
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-[#B76E79]/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src={IMAGES.EXPERT_MAIN} 
              alt="Ana Paula Féo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#B76E79] rounded-full flex items-center justify-center text-white font-bold text-xl serif">
                AP
              </div>
              <div>
                <p className="font-bold text-zinc-900 leading-tight">Ana Paula Féo</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Nail Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Courses } from './components/Courses.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingButtons } from './components/FloatingButtons.tsx';

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden selection:bg-[#B76E79]/30">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Courses />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;

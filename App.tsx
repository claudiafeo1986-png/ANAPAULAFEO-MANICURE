
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Courses } from './components/Courses';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

const App: React.FC = () => {
  useEffect(() => {
    // Simple smooth scroll logic for anchor links if needed
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

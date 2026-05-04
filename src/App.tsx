import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';

import BootScreen from './components/BootScreen.tsx';
import Navbar from './components/Navbar.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import CustomCursor from './components/CustomCursor.tsx';

import Hero from './components/Sections/Hero.tsx';
import About from './components/Sections/About.tsx';
import Projects from './components/Sections/Projects.tsx';
import Skills from './components/Sections/Skills.tsx';
import Experience from './components/Sections/Experience.tsx';
import Contact from './components/Sections/Contact.tsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isBooted) return;

    const sections = gsap.utils.toArray<HTMLElement>('.section');
    const container = containerRef.current;

    if (window.innerWidth > 1024 && container) {
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: 'top top',
          end: () => `+=${container.offsetWidth}`,
        },
      });

      return () => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, [isBooted]);

  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence>
        {!isBooted && <BootScreen onComplete={() => setIsBooted(true)} />}
      </AnimatePresence>

      {isBooted && (
        <>
          <CustomCursor />
          <Navbar />
          {/* <AIAssistant /> */}
          
          <main ref={containerRef} className="horizontal-container">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
        </>
      )}
    
      {/* Persistent Background Elements */}
      <div className="fixed inset-0 z-[-1] bg-app-bg pointer-events-none transition-colors duration-500">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-blue/5 blur-[150px]" />
      </div>

    </div>
  );
}


import { motion } from 'framer-motion';
import { DEV_INFO } from '../../constants.ts';
import { ChevronRight, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = DEV_INFO.name;
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (index: number) => {
  const container = document.querySelector('.horizontal-container');
  if (!container) return;

  const totalScroll = container.scrollWidth - window.innerWidth;
  const targetScroll = (totalScroll / 5) * index; // 6 sections → 5 gaps

  window.scrollTo({
    top: targetScroll,
    behavior: 'smooth'
  });
};
  return (
    <section id="hero" className="section w-screen flex-shrink-0  h-screen flex items-center justify-center">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="mb-8 p-3 rounded-2xl glass text-neon-cyan flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-mono"
          >
            <Cpu size={14} className="animate-pulse" />
            Developer Portfolio v1.0: Active
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">

            <span className="block text-sm sm:text-base tracking-widest text-app-text/60 mb-2">HI, I AM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan">
              {text}<span className="text-current animate-pulse">_</span>
            </span>
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-lg sm:text-2xl text-app-text/80 font-light max-w-2xl mb-10 leading-relaxed"
          >
            {DEV_INFO.tagline}
          </motion.p>


          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
  onClick={() => scrollToSection(2)} // Projects index
  className="group px-8 py-4 bg-neon-purple text-white font-semibold rounded-xl flex items-center gap-2 hover:scale-105 transition-all text-sm uppercase tracking-widest"
>
  View My Work
  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
</button>
            <button 
  onClick={() => scrollToSection(5)} // Contact index
  className="px-8 py-4 glass text-app-text font-semibold rounded-xl hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all text-sm uppercase tracking-widest"
>
  Contact Me
</button>
          </motion.div>

        </div>
      </div>

      {/* Decorative vertical rails */}
      <div className="absolute left-6 bottom-12 hidden lg:flex flex-col items-center gap-4 text-[10px] uppercase font-mono tracking-[0.3em] text-slate-500 [writing-mode:vertical-rl]">
        <div className="w-px h-24 bg-gradient-to-t from-neon-purple to-transparent" />
        <span>Core Version: React 18</span>
      </div>

      <div className="absolute right-6 bottom-12 hidden lg:flex flex-col items-center gap-4 text-[10px] uppercase font-mono tracking-[0.3em] text-slate-500 [writing-mode:vertical-rl]">
        <span>Scroll to explore</span>
        <div className="w-px h-24 bg-gradient-to-t from-neon-cyan to-transparent" />
      </div>
    </section>
  );
}

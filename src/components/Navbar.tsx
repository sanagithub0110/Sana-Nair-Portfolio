import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Trophy as LeetcodeIcon, Download, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DEV_INFO } from '../constants.ts';
import ThemeToggle from './ThemeToggle.tsx';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // 🔥 Scroll handler
  const scrollToSection = (index: number) => {
  const container = document.querySelector('.horizontal-container');
  if (!container) return;

  const totalScroll = container.scrollWidth - window.innerWidth;
  const targetScroll = (totalScroll / (navLinks.length - 1)) * index;

  window.scrollTo({
    top: targetScroll,
    behavior: 'smooth'
  });
};

  return (
    <nav className="fixed top-0 left-0 w-full z-[80] px-6 py-4 bg-app-bg/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => scrollToSection(0)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-neon-purple rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold italic text-white">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-app-text uppercase">Sana</span>
            <span className="text-[10px] text-neon-cyan uppercase">Nair</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 glass p-1 rounded-full">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className="px-4 py-2 text-xs uppercase tracking-widest rounded-full text-app-text/60 hover:text-app-text hover:bg-app-text/5 transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Social Icons */}
          <div className="flex items-center gap-3 border-r border-app-border pr-4">
            <a href={DEV_INFO.github} target="_blank" className="text-app-text/60 hover:text-neon-purple"><Github size={18} /></a>
            <a href={DEV_INFO.leetcode} target="_blank" className="text-app-text/60 hover:text-neon-cyan"><LeetcodeIcon size={18} /></a>
            <a href={DEV_INFO.linkedin} target="_blank" className="text-app-text/60 hover:text-neon-blue"><Linkedin size={18} /></a>
            <ThemeToggle />
          </div>

          {/* Resume Buttons */}
          <div className="flex items-center gap-3">

            <a 
              href="https://drive.google.com/file/d/1rt6kNAcdmEhaayAxuubg4VOVZK4pxE_c/view"
              target="_blank"
              className="px-4 py-2 text-xs border border-white/20 rounded-lg hover:border-neon-blue hover:text-neon-blue flex items-center gap-2"
            >
              <Eye size={14} />
              View
            </a>

            <a 
              href="https://drive.google.com/uc?export=download&id=1rt6kNAcdmEhaayAxuubg4VOVZK4pxE_c"
              target="_blank"
              className="px-4 py-2 text-xs bg-neon-cyan text-white rounded-lg hover:scale-105 flex items-center gap-2"
            >
              <Download size={14} />
              Download
            </a>

          </div>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => {
                  scrollToSection(i);
                  setIsMenuOpen(false);
                }}
                className="text-2xl text-white"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
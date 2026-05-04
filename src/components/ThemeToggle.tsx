import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 glass rounded-full border border-neon-purple/30 text-current hover:bg-neon-purple/10 transition-all cursor-pointer flex items-center justify-center w-10 h-10"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon size={20} className="text-neon-purple" /> : <Sun size={20} className="text-neon-cyan" />}
    </motion.button>
  );
}

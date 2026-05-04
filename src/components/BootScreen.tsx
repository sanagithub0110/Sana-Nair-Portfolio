import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootLogs = [
    'Initializing components...',
    'Checking environment variables...',
    'Loading project registry...',
    'Connecting to portfolio instance...',
    'Mounting asset pipeline...',
    'Hydrating animation state...',
    'Applying theme configuration...',
    'Ready. Welcome to Sana\'s Portfolio.'
  ];

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev.slice(-10), bootLogs[currentLog]]);
        currentLog++;
      }
    }, 300);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          console.log("Boot complete triggered");
          setTimeout(() => {
          onComplete();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center font-mono p-4"
    >
      <div className="w-full max-w-lg">
        <div className="mb-8 space-y-1">
          {logs.map((log, i) => (
            <div key={i} className="text-neon-cyan text-sm sm:text-base">
              <span className="text-neon-purple mr-2">[{i.toString().padStart(2, '0')}]</span>
              {log}
            </div>
          ))}
          <div className="text-white animate-pulse">_</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-neon-blue uppercase tracking-widest">
            <span>Project Assets</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

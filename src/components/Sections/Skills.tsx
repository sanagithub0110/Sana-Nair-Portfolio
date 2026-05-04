import { motion } from 'motion/react';
import { SKILLS } from '../../constants.ts';
import { Zap, Box } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="section flex w-screen flex-shrink-0  h-screen items-center justify-center bg-app-bg py-20 lg:py-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 text-neon-cyan uppercase tracking-[0.3em] font-mono text-xs mb-4">
              <Zap size={14} />
              Technical Stack
            </div>
            <h2 className="text-4xl sm:text-6xl font-black italic uppercase mb-8">
              Technical <span className="text-neon-cyan">Expertise</span>
            </h2>
            
            <div className="space-y-8">
              {SKILLS.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-display font-bold uppercase tracking-widest text-app-text italic">{skill.name}</span>
                    <span className="text-xs font-mono text-neon-cyan">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-app-surface border border-app-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Visual: Orbit Grid */}
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center relative h-[500px]">
             {/* Central Hub */}
              <div className="w-32 h-32 rounded-full glass border-neon-cyan/50 flex flex-col items-center justify-center z-10 animate-pulse">
                <Box size={32} className="text-neon-cyan mb-1" />
                <span className="text-[10px] font-mono uppercase tracking-tighter text-app-text">Core</span>
             </div>

             {/* Orbit Rings */}
             <div className="absolute w-[300px] h-[300px] border border-app-border rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute w-[450px] h-[450px] border border-app-border rounded-full animate-[spin_20s_linear_infinite_reverse]" />
             
             {/* Floating Nodes */}
             {[...Array(6)].map((_, i) => (
               <motion.div
                 key={i}
                 animate={{
                   rotate: 360,
                   transition: { duration: 15 + i * 2, repeat: Infinity, ease: 'linear' }
                 }}
                 className="absolute inset-0 flex items-center justify-center"
               >
                 <motion.div 
                    animate={{ rotate: -360, transition: { duration: 15 + i * 2, repeat: Infinity, ease: 'linear' } }}
                    className="w-12 h-12 glass border-neon-purple/30 rounded-xl flex items-center justify-center translate-x-[150px] sm:translate-x-[200px]"
                 >
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-purple neon-glow-purple" />
                 </motion.div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>

  );
}

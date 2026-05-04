import { motion } from 'framer-motion';
import { DEV_INFO, ACHIEVEMENTS, CERTIFICATIONS } from '../../constants.ts';
import { User, Code2, GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Academic CGPA', value: '8.4', icon: GraduationCap },
    { label: 'Internships', value: '3', icon: Briefcase },
    { label: 'Active Projects', value: '3', icon: Code2 },
  ];

  return (
    <section id="about" className="section pt-28 md:pt-32 w-screen flex-shrink-0 h-screen flex items-center bg-app-bg" >
      <div className="container mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-neon-purple uppercase tracking-[0.3em] font-mono text-xs mb-4">
              <User size={14} />
              Professional Profile
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
              Building <br />
              <span className="text-neon-purple">Modern Solutions</span>
            </h2>
            <div className="space-y-4 text-app-text/80 text-base sm:text-lg leading-relaxed">
              <p>
                {DEV_INFO.about}
              </p>
              <p>
                My focus lies in building responsive, efficient, and user-centric applications. I enjoy tackling complex challenges and refining my skills across the full development stack.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-2 text-current mb-1">
                    <stat.icon size={18} className="text-neon-cyan" />
                    <span className="text-2xl font-display font-bold italic">{stat.value}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-app-text/40 font-mono italic">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Achievements & Certifications - Compact View */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-neon-cyan font-mono mb-4 flex items-center gap-2">
                  <Award size={14} /> Key Achievements
                </h3>
                <ul className="space-y-3">
                  {ACHIEVEMENTS.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-xs text-app-text/60 flex gap-2">
                      <CheckCircle2 size={12} className="text-neon-purple flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-neon-blue font-mono mb-4 flex items-center gap-2">
                  <Award size={14} /> Certifications
                </h3>
                <ul className="space-y-3">
                  {CERTIFICATIONS.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-xs text-app-text/60 flex gap-2">
                      <CheckCircle2 size={12} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Visual Element: Neural Grid */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="hidden lg:block relative"
          >
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto glass rounded-3xl relative overflow-hidden group border-neon-purple/20">
              <img 
              src="profile.jpg" 
              alt="Sana"
              className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-transparent to-transparent" />
              
              {/* Animated Overlays */}
              <div className="absolute top-0 left-0 w-full h-full border border-neon-purple/30 rounded-3xl" />
              <motion.div 
                animate={{ 
                  left: ['-10%', '110%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 w-px h-full bg-neon-cyan/50 shadow-[0_0_15px_#22d3ee]"
              />
            </div>

            <div className="absolute bottom-2 right-2 w-48 h-48 glass rounded-2xl border-neon-blue/20 p-6 flex flex-col justify-center">
              <div className="text-[10px] uppercase tracking-widest text-app-text/40 font-mono mb-2">Location</div>
              <div className="text-current font-display font-bold italic">{DEV_INFO.location}</div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
                <span className="text-[10px] text-neon-cyan uppercase">Remote Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

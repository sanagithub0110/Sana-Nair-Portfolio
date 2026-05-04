import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants.ts';
import { History, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section pt-28 h-screen bg-app-bg w-screen flex-shrink-0 flex items-center">
      <div className="container mx-auto px-6 w-full">

        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-neon-purple uppercase tracking-[0.3em] font-mono text-xs mb-4">
            <History size={14} />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Professional <span className="text-neon-purple">Experience</span>
          </h2>
        </div>

        {/* Horizontal Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] max-w-[360px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all"
            >

              {/* Period */}
              <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">
                {exp.period}
              </span>

              {/* Role */}
              <h3 className="text-lg font-semibold mt-2">
                {exp.role}
              </h3>

              {/* Company */}
              <div className="text-neon-purple text-sm mb-4 uppercase tracking-widest">
                {exp.company}
              </div>

              {/* Description */}
              <ul className="space-y-3">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-app-text/80">
                    <CheckCircle2 size={14} className="text-neon-cyan mt-1" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
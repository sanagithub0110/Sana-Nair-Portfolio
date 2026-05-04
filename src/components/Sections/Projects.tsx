import { motion } from 'motion/react';
import { PROJECTS } from '../../constants.ts';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section flex flex-col w-screen flex-shrink-0 h-screen justify-center bg-app-bg overflow-hidden py-20 lg:py-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 text-neon-blue uppercase tracking-[0.3em] font-mono text-xs mb-4">
            <Layers size={14} />
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-6xl font-black italic uppercase">
            Portfolio <span className="text-neon-blue">Showcase</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
                <div className="p-6 border-b border-app-border">
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">
      {project.title}
    </h3>
    <div className="flex gap-3">
  <a 
    href={project.github} 
    target="_blank"
    className="flex items-center gap-1 text-xs text-app-text/70 hover:text-neon-blue transition"
  >
    <Github size={16} />
    Code
  </a>
</div>
  </div>
</div>
              

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-mono tracking-tighter text-neon-cyan/70 border border-neon-cyan/20 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-display font-bold italic mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-app-text/80 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-6 pt-6 border-t border-app-border flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono text-app-text/30">Trace: 04.21.2026</span>
                  <a 
  href={project.github} 
  target="_blank"
  className="text-xs uppercase font-semibold tracking-widest text-app-text/70 hover:text-neon-blue transition flex items-center gap-2"
>
  View Code <Github size={14} />
</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}

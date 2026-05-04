import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Globe, Terminal } from 'lucide-react';
import { DEV_INFO } from '../../constants.ts';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section pt-28 md:pt-32 w-screen  h-screen flex-shrink-0 bg-app-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 text-neon-cyan uppercase tracking-[0.3em] font-mono text-xs mb-4">
                <Terminal size={14} />
                Communication Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl font-black italic uppercase mb-8">
                Let's <span className="text-neon-cyan">Connect</span>
              </h2>
              <p className="text-app-text/70 text-lg sm:text-xl font-light leading-relaxed mb-8">
                I am open to internships, collaborations, and opportunities to work on real-world projects. Feel free to reach out!
                </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass border border-app-border rounded-2xl flex items-center justify-center group-hover:border-neon-purple transition-all">
                    <Mail className="text-neon-purple" size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-app-text/40 font-mono mb-1">Electronic Mail</div>
                    <div className="text-current font-display font-medium text-lg">{DEV_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass border border-app-border rounded-2xl flex items-center justify-center group-hover:border-neon-blue transition-all">
                    <Globe className="text-neon-blue" size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-app-text/40 font-mono mb-1">Geographical Node</div>
                    <div className="text-current font-display font-medium text-lg">{DEV_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="glass p-6 sm:p-12 rounded-2xl border border-app-border relative overflow-hidden"
            >
              {/* Form Scanline effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/20 animate-[scan_4s_linear_infinite]" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-app-text/40 font-mono ml-4">Identity String</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Enter name or entity name" 
                    className="w-full bg-app-surface border border-app-border rounded-2xl px-6 py-4 text-app-text focus:outline-none focus:border-neon-cyan/50 transition-colors placeholder:text-app-text/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-app-text/40 font-mono ml-4">Transmission Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="entity@network.db" 
                    className="w-full bg-app-surface border border-app-border rounded-2xl px-6 py-4 text-app-text focus:outline-none focus:border-neon-cyan/50 transition-colors placeholder:text-app-text/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-app-text/40 font-mono ml-4">Payload Content</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Detail your request or inquiry..." 
                    className="w-full bg-app-surface border border-app-border rounded-2xl px-6 py-4 text-app-text focus:outline-none focus:border-neon-cyan/50 transition-colors resize-none placeholder:text-app-text/20"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-neon-cyan text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSent ? (
                    "Transmission Successful"
                  ) : (
                    <>
                      Execute Broadcast <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          <footer className="mt-16 pt-8 border-t border-app-border flex flex-col sm:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-all duration-700">
             <div className="flex flex-col items-center sm:items-start text-current">
               <div className="font-display font-black text-2xl italic tracking-tighter">SANA SANTOSH</div>
               <div className="text-[10px] uppercase tracking-[0.5em] font-mono">Creative Engineering Unit // 2026</div>
             </div>
             <div className="flex gap-8">
               <a href="#" className="text-[10px] uppercase tracking-widest text-app-text/60 hover:text-neon-purple transition-colors font-mono italic">Encryption Policy</a>
               <a href="#" className="text-[10px] uppercase tracking-widest text-app-text/60 hover:text-neon-blue transition-colors font-mono italic">Access Rights</a>
               <a href="#" className="text-[10px] uppercase tracking-widest text-app-text/60 hover:text-neon-cyan transition-colors font-mono italic">Node Network</a>
             </div>
          </footer>

        </div>
      </div>
    </section>
  );
}

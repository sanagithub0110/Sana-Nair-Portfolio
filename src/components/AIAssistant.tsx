import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, X, Minimize2, Maximize2, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { DEV_INFO, PROJECTS, EXPERIENCES, SKILLS, ACHIEVEMENTS, CERTIFICATIONS } from '../constants.ts';
import { ChatMessage } from '../types.ts';
import { cn } from '../lib/utils.ts';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: `Hello! I'm Sana's AI agent. Ask me anything about her skills, projects, or experience.` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const systemInstruction = `
        You are Sana Santosh Nair's AI portfolio assistant. 
        Sana is an aspiring Computer Engineering student specializing in full-stack web development and interactive UI.
        
        Developer Info:
        - Name: ${DEV_INFO.name}
        - Role: ${DEV_INFO.role}
        - Education: Bachelor of Computer Engineering at PCCOE&R, Pune (CGPA 8.4)
        - Skills: ${SKILLS.map(s => s.name).join(', ')}
        - Achievements: ${ACHIEVEMENTS.join(', ')}
        - Certifications: ${CERTIFICATIONS.join(', ')}
        - Contact: ${DEV_INFO.email} | ${DEV_INFO.phone}
        
        Guidelines:
        - Be professional, concise, and helpful.
        - Highlight her expertise in React, GSAP, and Angular.
        - Encourage recruiting or collaboration inquiries.
        - Use markdown for formatting.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction,
        }
      });

      const reply = response.text || "I'm sorry, I couldn't process that. Can we try again?";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to my neural network. Please check my server status." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-neon-purple text-white flex items-center justify-center neon-glow-purple hover:scale-110 transition-transform cursor-pointer"
          >
            <Bot size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            className="w-[350px] sm:w-[400px] h-[500px] glass rounded-2xl flex flex-col shadow-2xl overflow-hidden border-app-border"
          >
            {/* Header */}
            <div className="p-4 bg-neon-purple/10 border-b border-app-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-purple flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-app-text">Ask Sana AI</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-app-text/40 uppercase tracking-tighter">System Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-app-text/10 rounded cursor-pointer">
                  <Minimize2 size={16} className="text-app-text/40" />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-app-text/10 rounded cursor-pointer">
                  <X size={16} className="text-app-text/40" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex flex-col", m.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-sm",
                    m.role === 'user' 
                      ? "bg-neon-blue text-white border border-neon-blue/30 rounded-tr-none" 
                      : "bg-app-surface text-app-text border border-app-border rounded-tl-none markdown-body"
                  )}>
                    {m.role === 'assistant' ? (
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    ) : m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex space-x-2 p-2 bg-app-surface rounded-full w-16 justify-center">
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-app-border">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="w-full bg-app-surface border border-app-border rounded-full py-2 pl-4 pr-12 text-sm text-app-text focus:outline-none focus:border-neon-purple/50 transition-colors placeholder:text-app-text/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1.5 p-1 bg-neon-purple rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Minimized view */}
      {isOpen && isMinimized && (
        <motion.button
          layoutId="ai-chat"
          onClick={() => setIsMinimized(false)}
          className="bg-neon-purple text-white px-4 py-2 rounded-full flex items-center gap-2 neon-glow-purple cursor-pointer"
        >
          <Bot size={18} />
          <span className="text-sm font-bold">Resume Assistant</span>
        </motion.button>
      )}
    </div>
  );
}

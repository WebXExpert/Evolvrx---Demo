import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Zap } from "lucide-react";

export function AIAutomationsHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <Bot className="w-4 h-4" /> AI & Custom Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Work smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              not harder.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We build custom AI agents and workflow automations that eliminate manual tasks, reduce overhead, and scale your operations infinitely without adding headcount.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Automate Your Business
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: AI Brain/Core (Premium Glass) */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Central Core - Glowing Glass Orb */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full blur-3xl opacity-40"
            />
            
            <div className="relative z-20 w-48 h-48 bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-[0_0_80px_rgba(37,99,235,0.3)] border border-white/80 flex items-center justify-center transform rotate-45">
              <div className="absolute inset-2 border border-blue-100/50 rounded-[2.5rem] shadow-inner" />
              <Cpu className="w-20 h-20 text-blue-600 transform -rotate-45 filter drop-shadow-md" />
            </div>

            {/* Orbiting Nodes - Glassmorphic with Animated Borders */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute p-[1px] rounded-3xl overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
                    style={{ x, y }}
                  >
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(6,182,212,0.8)_360deg)] opacity-70" 
                    />
                    <div className="relative bg-white/90 backdrop-blur-xl p-5 rounded-3xl border border-white/50 flex items-center justify-center">
                      {i % 2 === 0 ? <Zap className="w-6 h-6 text-amber-500" /> : <Bot className="w-6 h-6 text-cyan-500" />}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <motion.circle 
                cx="50%" cy="50%" r="200" 
                fill="none" stroke="rgba(14,165,233,0.3)" strokeWidth="2" strokeDasharray="8 12"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
              />
            </svg>

          </div>
        </div>

      </div>
    </section>
  );
}

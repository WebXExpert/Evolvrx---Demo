import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp } from "lucide-react";

export function PaidAdsHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(6,182,212,0.08)]"
          >
            <Target className="w-4 h-4" /> Paid Media & Advertising
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Turn clicks into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              customers.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Stop burning ad spend. We engineer highly targeted, data-driven campaigns across Google, Meta, and LinkedIn that maximize your ROAS and scale your revenue.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Scale Your Ads
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: Exploding ROAS Counter */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          
          {/* Background Exploding Charts - Frosted Glass */}
          <div className="absolute inset-0 flex items-end justify-center gap-4 pb-20 opacity-60 pointer-events-none z-10">
            {[40, 60, 30, 80, 50, 100].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="w-14 bg-gradient-to-t from-blue-500/40 to-cyan-400/80 rounded-t-2xl backdrop-blur-sm border-t border-l border-r border-white/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              />
            ))}
          </div>

          {/* ROAS Box - Deep Glassmorphism with Animated Border */}
          <div className="relative z-20 p-[2px] rounded-[3.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(16,185,129,1)_360deg)] opacity-70" 
            />
            <div className="relative bg-white/80 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/60 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-100/80 rounded-3xl flex items-center justify-center mb-6 shadow-inner border border-emerald-200/50">
                <TrendingUp className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest mb-2 text-sm">Average ROAS</div>
              <div className="text-8xl font-black text-slate-900 flex items-center tracking-tighter">
                <motion.span 
                  animate={{ opacity: [0.7, 1] }} 
                  transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                >
                  450
                </motion.span>
                <span className="text-emerald-500 ml-2">%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

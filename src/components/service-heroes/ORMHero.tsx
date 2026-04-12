import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, AlertCircle } from "lucide-react";

export function ORMHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08)_0%,transparent_100%)] pointer-events-none z-0" />

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(6,182,212,0.08)]"
          >
            <ShieldCheck className="w-4 h-4" /> Online Reputation Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Protect your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              digital legacy.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Your reputation is your most valuable asset. We suppress negative search results, amplify positive PR, and build an impenetrable digital fortress around your brand.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Secure Your Brand
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Shield Deflection */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          {/* Central Shield - Premium Glass & Glow */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotateY: [-10, 10, -10] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-30 w-56 h-56 rounded-full flex items-center justify-center transform-style-3d"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full opacity-90 shadow-[0_0_80px_rgba(14,165,233,0.6)]" />
            <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full border border-white/50 backdrop-blur-sm" />
            <ShieldCheck className="w-28 h-28 text-white relative z-10 filter drop-shadow-lg" />
            
            {/* Forcefield Pulse */}
            <motion.div 
              animate={{ scale: [1, 1.6, 2.2], opacity: [0.6, 0.2, 0] }} 
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-cyan-300 rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.4, 1.8], opacity: [0.8, 0.3, 0] }} 
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 border border-blue-400 rounded-full"
            />
          </motion.div>

          {/* Incoming Negative Reviews (Deflected) - Frosted Glass */}
          <motion.div 
            initial={{ x: -350, y: -150, opacity: 0, rotate: -20 }}
            animate={{ x: [-350, -100, -250], y: [-150, 0, 250], opacity: [0, 1, 0], rotate: [-20, 0, -60] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            className="absolute z-20 bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(225,29,72,0.1)] border border-rose-200/50 flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-50/50 to-transparent rounded-2xl" />
            <AlertCircle className="w-6 h-6 text-rose-500 relative z-10" />
            <div className="flex gap-1 relative z-10">
              <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
              <Star className="w-4 h-4 text-slate-300" />
              <Star className="w-4 h-4 text-slate-300" />
            </div>
          </motion.div>

          {/* Incoming Positive Reviews (Absorbed) - Frosted Glass */}
          <motion.div 
            initial={{ x: 350, y: 150, opacity: 0, rotate: 20 }}
            animate={{ x: [350, 100, 0], y: [150, 0, 0], opacity: [0, 1, 0], scale: [1, 1, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1.7 }}
            className="absolute z-40 bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(16,185,129,0.1)] border border-emerald-200/50 flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-transparent rounded-2xl" />
            <div className="flex gap-1 relative z-10">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

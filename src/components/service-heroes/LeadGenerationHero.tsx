import { motion } from "framer-motion";
import { ArrowRight, Magnet, UserPlus, CheckCircle2 } from "lucide-react";

export function LeadGenerationHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_100%)] pointer-events-none z-0" />

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <Magnet className="w-4 h-4" /> Lead Generation
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Fill your pipeline <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              on autopilot.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Stop chasing cold prospects. We build automated inbound engines that attract, qualify, and deliver high-intent leads directly to your sales team.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Start Generating Leads
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Glowing Funnel */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [10, 0, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex flex-col items-center justify-center transform-style-3d"
          >
            
            {/* Raw Data Particles Falling In */}
            <div className="absolute top-0 w-full h-32 flex justify-center gap-8 z-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -50, opacity: 0, scale: 0.5 }}
                  animate={{ y: 150, opacity: [0, 1, 0], scale: 1 }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "easeIn" }}
                  className="w-4 h-4 bg-slate-300 rounded-full shadow-[0_0_10px_rgba(148,163,184,0.5)]"
                />
              ))}
            </div>

            {/* 3D Funnel Rings (Glassmorphic) */}
            <div className="relative flex flex-col items-center gap-4 transform translate-z-[0px] z-20 mt-10">
              {/* Top Ring (Wide) */}
              <motion.div 
                animate={{ rotateX: 60, rotateZ: 360 }} transition={{ rotateZ: { duration: 20, repeat: Infinity, ease: "linear" } }}
                className="w-80 h-80 rounded-full border-[16px] border-white/40 backdrop-blur-md shadow-[0_16px_32px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.8)] flex items-center justify-center"
              >
                <div className="w-full h-full rounded-full border border-blue-200/50" />
              </motion.div>
              
              {/* Middle Ring */}
              <motion.div 
                animate={{ rotateX: 60, rotateZ: -360 }} transition={{ rotateZ: { duration: 15, repeat: Infinity, ease: "linear" } }}
                className="w-56 h-56 rounded-full border-[12px] border-white/60 backdrop-blur-lg shadow-[0_16px_32px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.8)] -mt-48 flex items-center justify-center"
              >
                <div className="w-full h-full rounded-full border border-cyan-300/50" />
              </motion.div>

              {/* Bottom Ring (Narrow, Glowing) */}
              <motion.div 
                animate={{ rotateX: 60, rotateZ: 360 }} transition={{ rotateZ: { duration: 10, repeat: Infinity, ease: "linear" } }}
                className="w-32 h-32 rounded-full border-[8px] border-blue-400/80 backdrop-blur-xl shadow-[0_0_40px_rgba(37,99,235,0.6),inset_0_0_20px_rgba(255,255,255,0.8)] -mt-32 flex items-center justify-center"
              >
                <div className="w-full h-full rounded-full border border-white/80" />
              </motion.div>
            </div>

            {/* Qualified Lead Card Popping Out */}
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.5 }}
              animate={{ y: 250, opacity: [0, 1, 0], scale: [0.5, 1, 1.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
              className="absolute z-30 bg-white/90 backdrop-blur-2xl p-4 rounded-2xl shadow-[0_24px_48px_rgba(16,185,129,0.2)] border border-emerald-200 flex items-center gap-4 transform translate-z-[80px]"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Qualified Lead</div>
                <div className="text-xs text-emerald-600 font-bold">Ready to Buy</div>
              </div>
            </motion.div>

            {/* Floating UI Element */}
            <motion.div 
              animate={{ z: [40, 80, 40], x: [20, 40, 20] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-10 top-20 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[60px] flex items-center gap-3"
            >
              <UserPlus className="w-6 h-6 text-blue-600" />
              <div className="text-sm font-bold text-slate-900">+1 New Contact</div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

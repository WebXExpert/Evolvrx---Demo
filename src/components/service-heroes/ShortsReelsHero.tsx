import { motion } from "framer-motion";
import { ArrowRight, PlaySquare, TrendingUp, Flame } from "lucide-react";

export function ShortsReelsHero() {
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
            <PlaySquare className="w-4 h-4" /> Shorts & Reels
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Vertical video <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              that goes viral.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We script, edit, and produce high-retention short-form content designed specifically for the algorithms of TikTok, Instagram Reels, and YouTube Shorts.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Go Viral
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Staggered Phones with Viral Trajectory */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <div className="relative w-full h-full flex items-center justify-center transform-style-3d rotate-y-[-15deg] rotate-x-[5deg]">
            
            {/* Viral Trajectory Line */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="viralGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                d="M 100 500 Q 300 500, 400 300 T 500 50" 
                fill="none" stroke="url(#viralGrad)" strokeWidth="8" strokeLinecap="round"
                className="filter drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              />
            </svg>

            {/* Phone 1 (Back) */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-10 top-20 w-48 h-96 bg-white/40 backdrop-blur-md rounded-[2rem] shadow-[0_16px_32px_rgba(0,0,0,0.05)] border border-white/40 p-2 transform translate-z-[-100px] opacity-60"
            >
              <div className="w-full h-full bg-slate-200 rounded-[1.5rem] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Video" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            {/* Phone 2 (Middle/Main) */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 w-56 h-[440px] bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.15)] border border-white/80 p-2 transform translate-z-[50px]"
            >
              <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Video" referrerPolicy="no-referrer" />
                
                {/* UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <div className="w-3/4 h-4 bg-white/90 rounded mb-2 shadow-sm" />
                  <div className="w-1/2 h-3 bg-white/70 rounded shadow-sm" />
                </div>
                {/* Floating Engagement */}
                <div className="absolute right-3 bottom-20 flex flex-col gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Flame className="w-5 h-5 text-rose-500 fill-rose-500" />
                    </div>
                    <span className="text-white text-[10px] font-bold">1.2M</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone 3 (Front Right) */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-10 bottom-20 w-48 h-96 bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_24px_48px_rgba(0,0,0,0.1)] border border-white/60 p-2 transform translate-z-[150px]"
            >
              <div className="w-full h-full bg-slate-200 rounded-[1.5rem] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Video" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            {/* Floating Metric */}
            <motion.div 
              animate={{ z: [100, 150, 100], y: [-10, -20, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 bg-emerald-500 text-white p-4 rounded-2xl shadow-[0_16px_32px_rgba(16,185,129,0.3)] transform translate-z-[200px] flex items-center gap-3 z-30"
            >
              <TrendingUp className="w-6 h-6" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-80">Views</div>
                <div className="text-xl font-black">2.4M</div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

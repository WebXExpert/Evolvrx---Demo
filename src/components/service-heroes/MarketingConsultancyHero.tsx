import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Target, Compass } from "lucide-react";

export function MarketingConsultancyHero() {
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
            <Lightbulb className="w-4 h-4" /> Marketing Consultancy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Strategy that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              drives dominance.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Stop guessing. We provide fractional CMO expertise to build comprehensive, multi-channel marketing roadmaps that align with your aggressive growth targets.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Book a Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Glowing Strategy Map / Chessboard */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-10, 10, -10], rotateX: [60, 50, 60] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg h-96 transform-style-3d"
          >
            
            {/* The Board (Glassmorphic Grid) */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden">
              <div className="w-full h-full grid grid-cols-4 grid-rows-4 opacity-30">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`border border-slate-300 ${i % 2 === 0 ? 'bg-slate-100/50' : 'bg-transparent'}`} />
                ))}
              </div>
            </div>

            {/* Strategy Pieces (Floating Nodes) */}
            {/* Piece 1: SEO */}
            <motion.div 
              animate={{ z: [20, 60, 20], x: [0, 40, 0], y: [0, -40, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/90 backdrop-blur-xl rounded-2xl shadow-[0_16px_32px_rgba(37,99,235,0.4)] border border-blue-300 flex items-center justify-center transform translate-z-[40px]"
            >
              <Compass className="w-8 h-8 text-white" />
            </motion.div>

            {/* Piece 2: Paid Ads */}
            <motion.div 
              animate={{ z: [40, 80, 40], x: [0, -40, 0], y: [0, 40, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-cyan-500/90 backdrop-blur-xl rounded-2xl shadow-[0_16px_32px_rgba(6,182,212,0.4)] border border-cyan-300 flex items-center justify-center transform translate-z-[60px]"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>

            {/* The "Winning Move" Path */}
            <svg className="absolute inset-0 w-full h-full transform translate-z-[10px] pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                d="M 100 100 L 200 100 L 200 300 L 300 300" 
                fill="none" stroke="url(#pathGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                className="filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              />
            </svg>

            {/* Goal Node (Glowing) */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], z: [10, 30, 10] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-10 w-12 h-12 bg-emerald-400 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.8)] border-4 border-white flex items-center justify-center transform translate-z-[20px]"
            />

          </motion.div>
        </div>

      </div>
    </section>
  );
}

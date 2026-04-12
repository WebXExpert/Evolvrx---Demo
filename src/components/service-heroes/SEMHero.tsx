import { motion } from "framer-motion";
import { ArrowRight, Search, MousePointerClick, TrendingUp } from "lucide-react";

export function SEMHero() {
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
            <Search className="w-4 h-4" /> Search Engine Marketing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Capture high-intent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              buyers instantly.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We engineer hyper-targeted SEM campaigns that place your brand at the exact moment your customers are ready to buy. Maximum visibility, minimum wasted spend.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Launch Campaign
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Search Results with Popping Ad */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-10, 10, -10], rotateX: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg transform-style-3d"
          >
            {/* Background Browser Frame */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[2rem] shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-white/60 transform translate-z-[0px] p-6 flex flex-col gap-4">
              
              {/* Search Bar */}
              <div className="w-full h-12 bg-white/80 rounded-full border border-slate-200 flex items-center px-4 shadow-inner">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <div className="w-48 h-3 bg-slate-200 rounded-full" />
              </div>

              {/* Organic Result (Blurred/Background) */}
              <div className="mt-8 p-4 opacity-40">
                <div className="w-3/4 h-4 bg-slate-300 rounded mb-2" />
                <div className="w-full h-2 bg-slate-200 rounded mb-1" />
                <div className="w-5/6 h-2 bg-slate-200 rounded" />
              </div>
              
              {/* Organic Result 2 */}
              <div className="p-4 opacity-30">
                <div className="w-2/3 h-4 bg-slate-300 rounded mb-2" />
                <div className="w-full h-2 bg-slate-200 rounded mb-1" />
              </div>
            </div>
            
            {/* The "Ad" Result - Popping out in 3D */}
            <motion.div 
              animate={{ z: [40, 80, 40], scale: [1, 1.05, 1] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-28 left-4 right-4 bg-white/90 backdrop-blur-2xl p-6 rounded-2xl shadow-[0_24px_48px_rgba(37,99,235,0.15)] border border-blue-200 transform translate-z-[60px]"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50 mix-blend-overlay" />
              
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-slate-900 text-white text-[10px] font-bold rounded">Sponsored</span>
                <div className="w-32 h-3 bg-slate-200 rounded" />
              </div>
              
              <div className="w-4/5 h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded mb-3 opacity-90" />
              <div className="w-full h-2 bg-slate-200 rounded mb-2" />
              <div className="w-11/12 h-2 bg-slate-200 rounded mb-4" />
              
              <div className="flex gap-2">
                <div className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg border border-blue-100">Sitelink 1</div>
                <div className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg border border-blue-100">Sitelink 2</div>
              </div>
            </motion.div>

            {/* Floating Clicks / Conversions */}
            <motion.div 
              animate={{ z: [60, 100, 60], y: [-20, -40, -20], opacity: [0, 1, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
              className="absolute top-20 right-[-20px] bg-emerald-500 text-white p-3 rounded-xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] transform translate-z-[80px] flex items-center gap-2"
            >
              <MousePointerClick className="w-5 h-5" />
              <span className="font-bold text-sm">Click</span>
            </motion.div>

            <motion.div 
              animate={{ z: [60, 100, 60], y: [20, 40, 20], opacity: [0, 1, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 2.5 }}
              className="absolute bottom-32 right-[-40px] bg-blue-600 text-white p-3 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] transform translate-z-[80px] flex items-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-bold text-sm">Conversion</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

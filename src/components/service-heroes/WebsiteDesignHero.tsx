import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Layout } from "lucide-react";

export function WebsiteDesignHero() {
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
            <Code2 className="w-4 h-4" /> Website Design & Dev
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Digital experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              built to scale.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We don't just build websites; we engineer digital flagships. Blazing fast, SEO-optimized, and designed with conversion-centric UX to turn visitors into loyal customers.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Exploded Website Layers */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-15, 15, -15], rotateX: [20, 10, 20] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md h-96 transform-style-3d"
          >
            
            {/* Layer 1: Database/Backend (Bottom) */}
            <motion.div 
              animate={{ y: [40, 60, 40] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.2)] border border-slate-700 p-6 transform translate-z-[-80px] flex flex-col justify-center opacity-80"
            >
              <Database className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
              <div className="space-y-2">
                <div className="w-full h-2 bg-slate-800 rounded" />
                <div className="w-3/4 h-2 bg-slate-800 rounded" />
                <div className="w-5/6 h-2 bg-slate-800 rounded" />
              </div>
            </motion.div>

            {/* Layer 2: Code/Logic (Middle) */}
            <motion.div 
              animate={{ y: [0, 0, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-blue-900/40 backdrop-blur-xl rounded-3xl shadow-[0_32px_64px_rgba(37,99,235,0.1)] border border-blue-500/30 p-6 transform translate-z-[0px] flex flex-col justify-center"
            >
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="space-y-3 font-mono text-[8px] text-cyan-200/70">
                <div>const App = () =&gt; {'{'}</div>
                <div className="pl-4">return (</div>
                <div className="pl-8">&lt;Layout&gt;</div>
                <div className="pl-12">&lt;Hero /&gt;</div>
                <div className="pl-12">&lt;Features /&gt;</div>
                <div className="pl-8">&lt;/Layout&gt;</div>
                <div className="pl-4">)</div>
                <div>{'}'}</div>
              </div>
            </motion.div>

            {/* Layer 3: UI/Frontend (Top) */}
            <motion.div 
              animate={{ y: [-40, -60, -40] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.15)] border border-white p-4 transform translate-z-[80px] flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl mb-4 border border-blue-100 flex items-center justify-center">
                <Layout className="w-10 h-10 text-blue-300" />
              </div>
              <div className="w-3/4 h-4 bg-slate-200 rounded mb-2" />
              <div className="w-full h-2 bg-slate-100 rounded mb-1" />
              <div className="w-5/6 h-2 bg-slate-100 rounded" />
            </motion.div>

            {/* Connecting Data Beams */}
            <svg className="absolute inset-0 w-full h-full transform-style-3d pointer-events-none z-10" style={{ transform: "translateZ(0px)" }}>
              <motion.line 
                x1="20%" y1="20%" x2="20%" y2="80%" 
                stroke="rgba(6,182,212,0.5)" strokeWidth="2" strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.line 
                x1="80%" y1="20%" x2="80%" y2="80%" 
                stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </svg>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

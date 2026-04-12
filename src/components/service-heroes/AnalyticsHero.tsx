import { motion } from "framer-motion";
import { ArrowRight, BarChart3, PieChart, Activity } from "lucide-react";

export function AnalyticsHero() {
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
            <BarChart3 className="w-4 h-4" /> Data & Analytics
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Clarity in a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              sea of data.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We transform complex marketing data into actionable insights. Custom dashboards, advanced tracking, and deep-dive analysis that reveal exactly what's driving your growth.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Build My Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Holographic Data Visualization */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-15, 15, -15], rotateX: [10, -10, 10] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
          >
            
            {/* Central Data Core (Rotating Rings) */}
            <div className="absolute w-64 h-64 flex items-center justify-center transform-style-3d">
              <motion.div 
                animate={{ rotateX: 360, rotateY: 180 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border-2 border-blue-400/30"
              />
              <motion.div 
                animate={{ rotateY: 360, rotateZ: 180 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 rounded-full border-2 border-cyan-400/40"
              />
              <motion.div 
                animate={{ rotateZ: 360, rotateX: 180 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 rounded-full border-2 border-emerald-400/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              />
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-50" />
            </div>

            {/* Floating Glass Panel 1 (Line Chart) */}
            <motion.div 
              animate={{ z: [50, 100, 50], x: [-60, -80, -60], y: [-40, -60, -40] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 bg-white/60 backdrop-blur-2xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/80 transform translate-z-[80px]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-700 uppercase">Traffic Growth</span>
              </div>
              <svg className="w-full h-20" viewBox="0 0 200 80">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path 
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  d="M 0 70 Q 40 60, 80 40 T 160 20 L 200 10" 
                  fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"
                />
                <path d="M 0 70 Q 40 60, 80 40 T 160 20 L 200 10 L 200 80 L 0 80 Z" fill="url(#lineGrad)" />
              </svg>
            </motion.div>

            {/* Floating Glass Panel 2 (Pie Chart) */}
            <motion.div 
              animate={{ z: [80, 120, 80], x: [60, 80, 60], y: [40, 60, 40] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-48 bg-white/60 backdrop-blur-2xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/80 transform translate-z-[100px]"
            >
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="w-4 h-4 text-cyan-600" />
                <span className="text-xs font-bold text-slate-700 uppercase">Sources</span>
              </div>
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="16" />
                  <motion.circle 
                    cx="50" cy="50" r="40" fill="none" stroke="#06b6d4" strokeWidth="16" strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }} animate={{ strokeDashoffset: 100 }} transition={{ duration: 2, ease: "easeOut" }}
                  />
                  <motion.circle 
                    cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="16" strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }} animate={{ strokeDashoffset: 200 }} transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Floating Metric Card */}
            <motion.div 
              animate={{ z: [100, 150, 100], y: [-60, -40, -60] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-10 right-20 bg-slate-900 text-white p-4 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.3)] border border-slate-700 transform translate-z-[120px]"
            >
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total Revenue</div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">$842k</div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

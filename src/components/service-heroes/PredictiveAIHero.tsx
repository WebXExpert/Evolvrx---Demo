import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, LineChart, Sparkles } from "lucide-react";

export function PredictiveAIHero() {
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
            <BrainCircuit className="w-4 h-4" /> Predictive AI Models
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            See the future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              your revenue.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We train custom machine learning models on your historical data to forecast trends, predict customer churn, and identify massive revenue opportunities before they happen.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Forecast My Growth
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Glowing Neural Core & Holographic Chart */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-10, 10, -10], rotateX: [5, -5, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
          >
            
            {/* Central Neural Core */}
            <div className="absolute w-40 h-40 flex items-center justify-center transform-style-3d">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-2xl"
              />
              <motion.div 
                animate={{ rotateZ: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 rounded-full border border-cyan-400/30 border-dashed"
              />
              <div className="relative w-24 h-24 bg-white/90 backdrop-blur-xl rounded-full shadow-[0_0_40px_rgba(34,211,238,0.6)] border border-white/80 flex items-center justify-center">
                <BrainCircuit className="w-10 h-10 text-blue-600" />
              </div>
            </div>

            {/* Holographic Projection Chart */}
            <motion.div 
              animate={{ z: [40, 80, 40], y: [-60, -80, -60] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 bg-white/60 backdrop-blur-2xl p-6 rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/80 transform translate-z-[60px] w-80"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-slate-900">Q4 Forecast</span>
                </div>
                <div className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 98% Confidence
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="relative h-32 w-full">
                {/* Historical Data (Solid) */}
                <svg className="absolute inset-0 w-1/2 h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0 80 L 30 70 L 60 50 L 100 60" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Predicted Data (Glowing/Dashed) */}
                <svg className="absolute inset-0 left-1/2 w-1/2 h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path 
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    d="M 0 60 L 40 30 L 80 10 L 100 0" 
                    fill="none" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"
                    className="filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  />
                </svg>
                {/* Prediction Zone Highlight */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent to-cyan-500/10 rounded-r-lg" />
              </div>
            </motion.div>

            {/* Floating Data Nodes */}
            {[
              { x: -120, y: 40, z: 20, label: "User Behavior" },
              { x: 120, y: 20, z: 60, label: "Market Trends" },
              { x: 0, y: 120, z: 40, label: "Historical Sales" }
            ].map((node, i) => (
              <motion.div 
                key={i}
                animate={{ y: [node.y - 10, node.y + 10, node.y - 10] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bg-white/90 backdrop-blur-xl px-4 py-2 rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 flex items-center gap-2"
                style={{ left: `calc(50% + ${node.x}px)`, top: `calc(50% + ${node.y}px)`, transform: `translateZ(${node.z}px)` }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-700">{node.label}</span>
              </motion.div>
            ))}

          </motion.div>
        </div>

      </div>
    </section>
  );
}

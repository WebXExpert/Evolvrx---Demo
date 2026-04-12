import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Activity, PieChart } from "lucide-react";

export function PerformanceHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-200/30 blur-[100px]" />
        <motion.div animate={{ x: [0, 50, 0], y: [0, -50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-200/30 blur-[120px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <BarChart3 className="w-4 h-4" /> Performance & Strategy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Data that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              dictates growth.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Gut feelings don't scale. We provide deep analytics, conversion rate optimization, and actionable strategies based on hard data to maximize your ROI.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Analyze Performance
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Analytics Dashboard (Ultra Premium Glass) */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg transform-style-3d"
          >
            {/* Main Glass Panel */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.08)] border border-white/80 transform translate-z-[0px]" />
            
            <div className="relative z-10 p-8 grid grid-cols-2 gap-6">
              {/* Metric 1 */}
              <motion.div 
                animate={{ z: [20, 40, 20] }} transition={{ duration: 4, repeat: Infinity }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/50 shadow-[0_16px_32px_rgba(37,99,235,0.08)] transform translate-z-[20px]"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 shadow-inner border border-blue-100/50">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-4xl font-black text-slate-900 tracking-tighter">2.4M</div>
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">Total Sessions</div>
              </motion.div>

              {/* Metric 2 */}
              <motion.div 
                animate={{ z: [30, 50, 30] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-cyan-100/50 shadow-[0_16px_32px_rgba(6,182,212,0.08)] transform translate-z-[30px]"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-4 shadow-inner border border-cyan-100/50">
                  <PieChart className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="text-4xl font-black text-slate-900 tracking-tighter">8.2%</div>
                <div className="text-sm font-bold text-cyan-600 uppercase tracking-wider mt-1">Conversion Rate</div>
              </motion.div>

              {/* Large Chart Area */}
              <motion.div 
                animate={{ z: [40, 60, 40] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                className="col-span-2 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-[0_24px_48px_rgba(0,0,0,0.1)] transform translate-z-[40px]"
              >
                <div className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Revenue Growth</div>
                <div className="h-36 flex items-end gap-3">
                  {[20, 30, 25, 45, 60, 80, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg shadow-[0_4px_10px_rgba(37,99,235,0.3)]"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

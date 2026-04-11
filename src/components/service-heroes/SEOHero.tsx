import { motion } from "framer-motion";
import { ArrowRight, Search, Activity, CheckCircle2, Zap } from "lucide-react";

export function SEOHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Unique Diagonal Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[200%] bg-white rotate-12 shadow-[0_0_50px_rgba(0,0,0,0.03)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-blue-700 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Search className="w-3.5 h-3.5" /> Search Engine Optimization
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Algorithmic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              dominance on autopilot.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Stop guessing what Google wants. We deploy automated site crawlers and AI-driven content models that continuously monitor, fix, and optimize your search architecture 24/7.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Run Automated Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right: Automation Animation */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            
            {/* Main Dashboard UI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-2xl p-6 relative z-10"
            >
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-slate-900">Auto-Crawler Active</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Live
                </div>
              </div>

              {/* Simulated Code/Structure Blocks */}
              <div className="space-y-4 relative">
                {/* Scanning Line */}
                <motion.div 
                  animate={{ y: [0, 250, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-20"
                />

                {[
                  { label: "Meta Tags", delay: 0 },
                  { label: "Schema Markup", delay: 0.5 },
                  { label: "Core Web Vitals", delay: 1 },
                  { label: "Keyword Density", delay: 1.5 }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex items-center justify-between relative overflow-hidden">
                    <span className="text-sm font-medium text-slate-600">{item.label}</span>
                    
                    {/* Status update animation */}
                    <motion.div 
                      initial={{ opacity: 0.5, color: "#94a3b8" }} // slate-400
                      animate={{ opacity: 1, color: "#0ea5e9" }} // sky-500
                      transition={{ duration: 0.5, delay: item.delay, repeat: Infinity, repeatDelay: 3.5 }}
                      className="flex items-center gap-1.5 text-xs font-bold"
                    >
                      <motion.div
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: item.delay, repeat: Infinity, repeatDelay: 3.5 }}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </motion.div>
                      Optimized
                    </motion.div>

                    {/* Flash effect when scanned */}
                    <motion.div 
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: [0, 0.2, 0], x: "100%" }}
                      transition={{ duration: 1, delay: item.delay, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent skew-x-12"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Automation Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 -bottom-12 bg-white border border-slate-200 shadow-xl rounded-2xl p-5 z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">99/100</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Health Score</div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

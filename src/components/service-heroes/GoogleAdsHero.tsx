import { motion } from "framer-motion";
import { ArrowRight, Target, BarChart2, DollarSign, TrendingUp } from "lucide-react";

export function GoogleAdsHero() {
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
            <Target className="w-4 h-4" /> Google Ads Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Maximize your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              return on ad spend.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We don't just manage bids; we engineer profitability. Our data-driven Google Ads strategies eliminate wasted spend and scale your highest-converting campaigns.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Audit My Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Glassmorphic Dashboard */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg transform-style-3d"
          >
            {/* Main Dashboard Panel */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.08)] border border-white/80 transform translate-z-[0px] p-6 grid grid-cols-2 gap-4">
              
              {/* Massive ROI Dial */}
              <div className="col-span-2 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-100 shadow-sm p-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Campaign ROAS</div>
                  <div className="text-5xl font-black text-slate-900">5.2x</div>
                </div>
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                    <motion.circle 
                      cx="50" cy="50" r="40" fill="none" stroke="url(#roiGrad)" strokeWidth="12" strokeLinecap="round"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 40 }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="roiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Spend Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm p-5">
                <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center mb-3">
                  <DollarSign className="w-4 h-4 text-rose-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">$12.4k</div>
                <div className="text-xs text-slate-500 font-medium">Ad Spend</div>
              </div>

              {/* Revenue Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm p-5">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <BarChart2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">$64.8k</div>
                <div className="text-xs text-slate-500 font-medium">Revenue</div>
              </div>

            </div>

            {/* Floating Keyword Tags (Bidding Animation) */}
            <motion.div 
              animate={{ z: [30, 60, 30], y: [-10, -20, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-20 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[40px] flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-700">"b2b saas marketing"</span>
              <span className="text-xs text-emerald-600 font-bold ml-2">Bid Won</span>
            </motion.div>

            <motion.div 
              animate={{ z: [40, 70, 40], y: [10, 20, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-32 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[50px] flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-700">"enterprise seo"</span>
              <span className="text-xs text-blue-600 font-bold ml-2">Optimizing</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

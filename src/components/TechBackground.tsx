import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Activity } from "lucide-react";

export function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-slate-50 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,rgba(248,250,252,1)_100%)]" />
      
      {/* Glowing Horizontal Streaks */}
      <div className="absolute top-[45%] left-[-10%] w-[120%] h-[2px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent blur-[2px] -translate-y-1/2 rotate-[-8deg] opacity-80" />
      <div className="absolute top-[45%] left-[-10%] w-[120%] h-[8px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent blur-[8px] -translate-y-1/2 rotate-[-8deg] opacity-60" />
      
      <div className="absolute top-[60%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-[1px] -translate-y-1/2 rotate-[-5deg] opacity-80" />
      
      <div className="absolute top-[35%] left-[-10%] w-[120%] h-[3px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-[3px] -translate-y-1/2 rotate-[-12deg] opacity-50" />

      {/* Additional glowing streaks */}
      <div className="absolute top-[55%] left-[-10%] w-[120%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-[2px] -translate-y-1/2 rotate-[5deg] opacity-70" />
      <div className="absolute top-[25%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent blur-[1px] -translate-y-1/2 rotate-[10deg] opacity-60" />

      {/* Animated Chart Boxes - Hidden on mobile */}
      <motion.div 
        className="hidden md:block absolute top-[20%] left-[15%] bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 w-36 z-10"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-blue-600" />
          </div>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Traffic</span>
        </div>
        <div className="text-lg font-bold text-slate-800 mb-1">+124%</div>
        <svg viewBox="0 0 100 30" className="w-full h-8 overflow-visible">
          <motion.path
            d="M 0 30 Q 20 25, 40 15 T 80 5 T 100 0"
            fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div 
        className="hidden md:block absolute bottom-[30%] right-[15%] bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 w-36 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center">
            <BarChart3 className="w-3 h-3 text-emerald-600" />
          </div>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Conversions</span>
        </div>
        <div className="flex items-end gap-1.5 h-10 mt-2">
          {[40, 60, 45, 80, 100].map((h, i) => (
            <motion.div key={i} className="w-full bg-emerald-500 rounded-t-sm"
              initial={{ height: "20%" }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="hidden md:flex absolute top-[35%] right-[30%] bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 items-center gap-3 z-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          <Activity className="w-4 h-4 text-orange-500" />
        </div>
        <div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Efficiency</div>
          <div className="text-sm font-bold text-slate-800">3.2x ROI</div>
        </div>
      </motion.div>

      {/* Isometric Blocks (Simulated with CSS) */}
      <div className="absolute top-[40%] left-[25%] w-40 h-40 border border-orange-500/20 bg-orange-500/5 rotate-[-8deg] skew-x-[30deg] skew-y-[10deg] shadow-[0_0_40px_rgba(249,115,22,0.05)] backdrop-blur-sm flex items-center justify-center">
        <div className="w-20 h-20 border border-orange-400/30 bg-orange-400/10 shadow-[inset_0_0_20px_rgba(249,115,22,0.1)]" />
      </div>
      
      <div className="absolute top-[25%] right-[25%] w-48 h-48 border border-purple-500/20 bg-purple-500/5 rotate-[-12deg] skew-x-[30deg] skew-y-[10deg] shadow-[0_0_50px_rgba(168,85,247,0.05)] backdrop-blur-sm flex items-center justify-center">
        <div className="w-24 h-24 border border-purple-400/30 bg-purple-400/10 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]" />
      </div>
      
      <div className="absolute top-[65%] right-[15%] w-32 h-32 border border-cyan-500/20 bg-cyan-500/5 rotate-[-5deg] skew-x-[30deg] skew-y-[10deg] shadow-[0_0_30px_rgba(6,182,212,0.05)] backdrop-blur-sm flex items-center justify-center">
        <div className="w-16 h-16 border border-cyan-400/30 bg-cyan-400/10 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]" />
      </div>

      {/* Intersection Dots */}
      <div className="absolute top-[45%] left-[30%] w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(253,186,116,0.8)]" />
      <div className="absolute top-[35%] right-[35%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(216,180,254,0.8)]" />
      <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(103,232,249,0.8)]" />

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30% 40% Q 50% 50% 70% 30%" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 70% 30% Q 80% 45% 80% 60%" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 30% 40% Q 40% 60% 80% 60%" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

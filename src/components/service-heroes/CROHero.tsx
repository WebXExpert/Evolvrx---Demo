import { motion } from "framer-motion";
import { ArrowRight, SplitSquareHorizontal, TrendingUp, XCircle, CheckCircle2 } from "lucide-react";

export function CROHero() {
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
            <SplitSquareHorizontal className="w-4 h-4" /> Conversion Rate Optimization
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Turn more clicks <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              into customers.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Stop losing money on leaky funnels. We use data-driven A/B testing, heatmaps, and psychological triggers to maximize the revenue from your existing traffic.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Optimize My Funnel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D A/B Testing Variants */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
          >
            
            {/* Variant A (Losing) */}
            <motion.div 
              animate={{ x: -120, z: -50, opacity: [1, 0.4, 1], filter: ["grayscale(0%)", "grayscale(100%)", "grayscale(0%)"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-96 bg-white/40 backdrop-blur-md rounded-3xl shadow-[0_16px_32px_rgba(0,0,0,0.05)] border border-white/40 p-4 flex flex-col"
            >
              <div className="absolute -top-4 -left-4 bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <XCircle className="w-3 h-3" /> Variant A
              </div>
              <div className="w-full h-32 bg-slate-200 rounded-xl mb-4" />
              <div className="w-3/4 h-4 bg-slate-300 rounded mb-2" />
              <div className="w-full h-2 bg-slate-200 rounded mb-1" />
              <div className="w-5/6 h-2 bg-slate-200 rounded mb-6" />
              <div className="w-full h-10 bg-slate-300 rounded-lg mt-auto" />
              {/* Low Conversion Chart */}
              <div className="absolute bottom-16 left-4 right-4 h-12 flex items-end gap-1 opacity-50">
                <div className="w-1/4 bg-rose-400 rounded-t h-1/4" />
                <div className="w-1/4 bg-rose-400 rounded-t h-1/3" />
                <div className="w-1/4 bg-rose-400 rounded-t h-1/4" />
                <div className="w-1/4 bg-rose-400 rounded-t h-1/5" />
              </div>
            </motion.div>

            {/* Variant B (Winning - Glowing) */}
            <motion.div 
              animate={{ x: 80, z: 50, scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-[420px] bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_32px_64px_rgba(16,185,129,0.2)] border-2 border-emerald-400 p-5 flex flex-col z-20"
            >
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="w-4 h-4" /> Winner (+42%)
              </div>
              <div className="w-full h-36 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-xl mb-4 border border-blue-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400')] opacity-40 mix-blend-overlay object-cover" />
              </div>
              <div className="w-3/4 h-5 bg-slate-800 rounded mb-3" />
              <div className="w-full h-2 bg-slate-300 rounded mb-2" />
              <div className="w-5/6 h-2 bg-slate-300 rounded mb-8" />
              <div className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-xl mt-auto shadow-[0_8px_16px_rgba(16,185,129,0.3)]" />
              
              {/* High Conversion Chart */}
              <div className="absolute bottom-20 left-5 right-5 h-16 flex items-end gap-1.5">
                <motion.div animate={{ height: ["20%", "30%", "20%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-1/4 bg-emerald-400 rounded-t" />
                <motion.div animate={{ height: ["30%", "50%", "30%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-1/4 bg-emerald-400 rounded-t" />
                <motion.div animate={{ height: ["50%", "80%", "50%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-1/4 bg-emerald-400 rounded-t" />
                <motion.div animate={{ height: ["80%", "100%", "80%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-1/4 bg-emerald-500 rounded-t shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              </div>
            </motion.div>

            {/* Floating VS Badge */}
            <motion.div 
              animate={{ z: [60, 100, 60], y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-30 bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-xl border-4 border-white transform translate-z-[80px]"
            >
              VS
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Smartphone } from "lucide-react";

export function WebDevHero() {
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
            <Code className="w-4 h-4" /> Design & Development
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Digital flagships, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              built to scale.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We engineer lightning-fast, SEO-optimized websites that serve as the ultimate conversion engine for your brand. Beautiful design meets flawless code.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Start Your Build
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: Wireframe to UI Scanner */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <div className="relative w-full max-w-lg bg-white/60 backdrop-blur-3xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden transform-style-3d rotate-y-[-10deg] rotate-x-[5deg]">
            
            {/* Browser Header - Premium Glass */}
            <div className="h-12 bg-white/40 backdrop-blur-md border-b border-white/60 flex items-center px-5 gap-2 relative z-30">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-400 shadow-inner border border-rose-500/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-inner border border-amber-500/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-inner border border-emerald-500/20" />
              </div>
              <div className="ml-4 flex-1 h-7 bg-white/50 rounded-md border border-white/60 flex items-center px-3">
                <div className="w-32 h-2 bg-slate-200/80 rounded-full" />
              </div>
            </div>
            
            {/* Content Area */}
            <div className="relative h-[420px] bg-slate-50/50 p-6">
              {/* Wireframe Layer (Bottom) */}
              <div className="absolute inset-0 p-6 space-y-4 opacity-40">
                <div className="w-1/3 h-8 bg-slate-300 rounded-lg" />
                <div className="w-full h-32 bg-slate-300 rounded-2xl" />
                <div className="flex gap-4">
                  <div className="w-1/2 h-24 bg-slate-300 rounded-2xl" />
                  <div className="w-1/2 h-24 bg-slate-300 rounded-2xl" />
                </div>
              </div>

              {/* High Fidelity Layer (Top, clipped by scanner) */}
              <motion.div 
                animate={{ clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)", "inset(0 0 100% 0)"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/90 backdrop-blur-xl p-6 space-y-4 z-10 border-t border-white/50"
              >
                <div className="w-1/3 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-sm" />
                <div className="w-full h-32 relative rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="UI" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2 h-24 bg-blue-50/80 rounded-2xl border border-blue-100/50 p-4 shadow-sm">
                    <Layout className="w-6 h-6 text-blue-500 mb-2" />
                    <div className="w-full h-2 bg-blue-200 rounded-full" />
                  </div>
                  <div className="w-1/2 h-24 bg-cyan-50/80 rounded-2xl border border-cyan-100/50 p-4 shadow-sm">
                    <Smartphone className="w-6 h-6 text-cyan-500 mb-2" />
                    <div className="w-full h-2 bg-cyan-200 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Scanner Line - Enhanced Glow */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1),0_0_40px_rgba(34,211,238,0.5)] z-20"
              >
                <div className="absolute inset-0 bg-white blur-[2px]" />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

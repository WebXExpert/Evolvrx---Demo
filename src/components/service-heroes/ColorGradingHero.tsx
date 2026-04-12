import { motion } from "framer-motion";
import { ArrowRight, Palette, SlidersHorizontal, Sparkles } from "lucide-react";

export function ColorGradingHero() {
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
            <Palette className="w-4 h-4" /> Color Grading
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Cinematic looks <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              for every frame.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We transform flat, lifeless footage into visually stunning, mood-driven masterpieces. Professional color correction and grading that elevates your brand's aesthetic.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Grade My Footage
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Color Wheels & Laser Scanner */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg transform-style-3d"
          >
            {/* Main Video Panel - Glassmorphic */}
            <div className="relative w-full h-72 bg-white/40 backdrop-blur-3xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden transform translate-z-[0px]">
              
              {/* Raw Footage (Grayscale/Flat) */}
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-60 contrast-75" alt="Raw Footage" referrerPolicy="no-referrer" />
              </div>

              {/* Graded Footage (Revealed by Scanner) */}
              <motion.div 
                animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-10"
              >
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover saturate-150 contrast-125 brightness-110" alt="Graded Footage" referrerPolicy="no-referrer" />
                {/* Cinematic Teal/Orange Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 mix-blend-overlay" />
              </motion.div>

              {/* Laser Scanner Line */}
              <motion.div 
                animate={{ left: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1),0_0_40px_rgba(34,211,238,0.5)] z-20"
              >
                <div className="absolute inset-0 bg-white blur-[2px]" />
              </motion.div>
            </div>

            {/* Floating Color Wheels (Lumetri Style) */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-6 transform translate-z-[40px]">
              {[
                { name: "Shadows", color: "from-blue-600 to-indigo-900" },
                { name: "Midtones", color: "from-emerald-400 to-teal-600" },
                { name: "Highlights", color: "from-amber-300 to-orange-500" }
              ].map((wheel, i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [-10, 10, -10], rotateZ: 360 }}
                  transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }, rotateZ: { duration: 20, repeat: Infinity, ease: "linear" } }}
                  className="relative w-24 h-24 bg-white/90 backdrop-blur-xl rounded-full shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 flex items-center justify-center"
                >
                  {/* Color Gradient Ring */}
                  <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${wheel.color} opacity-80 blur-[2px]`} />
                  <div className="absolute inset-3 rounded-full bg-white/80 backdrop-blur-md border border-white/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-900" />
                  </div>
                  {/* Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-full h-px bg-slate-900" />
                    <div className="absolute h-full w-px bg-slate-900" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Sliders */}
            <motion.div 
              animate={{ z: [30, 60, 30], x: [10, 30, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-12 top-10 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[60px] flex flex-col gap-3 w-40"
            >
              <div className="flex items-center gap-2 mb-1">
                <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-bold text-slate-700">Contrast</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full relative">
                <motion.div animate={{ width: ["40%", "80%", "40%"] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-0 top-0 h-full bg-blue-500 rounded-full" />
                <motion.div animate={{ left: ["40%", "80%", "40%"] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm -ml-2" />
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

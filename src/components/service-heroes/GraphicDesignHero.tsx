import { motion } from "framer-motion";
import { ArrowRight, Palette, Layers, Type, MousePointer2 } from "lucide-react";

export function GraphicDesignHero() {
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
            <Palette className="w-4 h-4" /> Graphic Design
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Visuals that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              demand attention.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            From scroll-stopping social assets to comprehensive brand identities. We craft premium, high-converting visuals that elevate your brand above the noise.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Elevate Your Brand
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Floating Canvas & Tools */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg transform-style-3d"
          >
            {/* Main Canvas - Premium Glass */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/80 transform translate-z-[0px] overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800')] opacity-30 mix-blend-overlay object-cover" />
              
              {/* Drawing Animation */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="drawGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <motion.path 
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                  d="M 50 200 C 100 50, 300 350, 350 200" 
                  fill="none" stroke="url(#drawGrad)" strokeWidth="8" strokeLinecap="round"
                  className="filter drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                />
              </svg>
            </div>
            
            {/* Floating Elements */}
            {/* Color Palette */}
            <motion.div 
              animate={{ z: [30, 60, 30], y: [-20, -40, -20] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-10 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[40px] flex flex-col gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 shadow-inner" />
              <div className="w-10 h-10 rounded-full bg-cyan-400 shadow-inner" />
              <div className="w-10 h-10 rounded-full bg-rose-400 shadow-inner" />
              <div className="w-10 h-10 rounded-full bg-amber-400 shadow-inner" />
            </motion.div>

            {/* Typography Block */}
            <motion.div 
              animate={{ z: [40, 80, 40], y: [20, 40, 20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-12 bottom-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[60px] flex items-center justify-center"
            >
              <div className="text-6xl font-serif text-slate-900 tracking-tighter">Aa</div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-white shadow-sm">
                <Type className="w-4 h-4 text-blue-600" />
              </div>
            </motion.div>

            {/* Layers Icon */}
            <motion.div 
              animate={{ z: [20, 50, 20], x: [10, 30, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-10 top-20 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[50px]"
            >
              <Layers className="w-8 h-8 text-cyan-500" />
            </motion.div>

            {/* Stylus/Cursor */}
            <motion.div 
              animate={{ 
                x: [50, 350, 50], 
                y: [200, 200, 200],
                z: [60, 60, 60]
              }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 transform translate-z-[60px] drop-shadow-2xl"
            >
              <MousePointer2 className="w-10 h-10 text-slate-900 fill-white -rotate-12" />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

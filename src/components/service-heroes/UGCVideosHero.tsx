import { motion } from "framer-motion";
import { ArrowRight, Video, Star, Heart } from "lucide-react";

export function UGCVideosHero() {
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
            <Video className="w-4 h-4" /> UGC Videos
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Authentic content <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              that converts.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            People trust people. We source, script, and produce high-converting User-Generated Content from real creators that builds trust and drives massive sales.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Get UGC Creators
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Floating UGC Network */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
            
            {/* Central Brand Core */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-30 w-32 h-32 bg-white/90 backdrop-blur-2xl rounded-full shadow-[0_0_50px_rgba(37,99,235,0.3)] border border-white flex items-center justify-center"
            >
              <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">BRAND</div>
            </motion.div>

            {/* Orbiting UGC Bubbles */}
            {[
              { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200", delay: 0, angle: 0, radius: 180, size: "w-32 h-40" },
              { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", delay: 1, angle: 120, radius: 200, size: "w-28 h-36" },
              { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200", delay: 2, angle: 240, radius: 160, size: "w-36 h-48" }
            ].map((bubble, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: bubble.delay }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.div 
                  animate={{ rotate: -360, rotateY: [-10, 10, -10], rotateX: [5, -5, 5] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className={`absolute ${bubble.size} bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/80 p-1.5 transform-style-3d`}
                  style={{ 
                    x: Math.cos(bubble.angle * Math.PI / 180) * bubble.radius, 
                    y: Math.sin(bubble.angle * Math.PI / 180) * bubble.radius 
                  }}
                >
                  <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative">
                    <img src={bubble.img} className="w-full h-full object-cover" alt="UGC Creator" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 flex gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    </div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Heart className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <motion.circle 
                cx="50%" cy="50%" r="180" 
                fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="2" strokeDasharray="10 10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
              />
            </svg>

          </div>
        </div>

      </div>
    </section>
  );
}

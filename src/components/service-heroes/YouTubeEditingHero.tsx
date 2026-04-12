import { motion } from "framer-motion";
import { ArrowRight, Youtube, Play, Scissors } from "lucide-react";

export function YouTubeEditingHero() {
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
            <Youtube className="w-4 h-4" /> YouTube Video Editing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Keep them watching <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              until the end.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We turn raw footage into high-retention YouTube masterpieces. Fast-paced cuts, dynamic motion graphics, and sound design that maximizes watch time and subscriber growth.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Edit My Video
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Dark Glassmorphic Timeline */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-xl transform-style-3d"
          >
            {/* Main Editor Interface - Dark Glass */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-3xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.3)] border border-slate-700/50 transform translate-z-[0px] overflow-hidden flex flex-col">
              
              {/* Video Preview */}
              <div className="relative h-64 bg-black flex items-center justify-center border-b border-slate-800">
                <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80" alt="Video Preview" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                {/* Floating VFX Layer */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                  className="absolute z-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl mix-blend-screen"
                />
                
                <div className="relative z-20 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <Play className="w-6 h-6 text-white ml-1 filter drop-shadow-md" />
                </div>
              </div>
              
              {/* Timeline Area */}
              <div className="flex-1 p-6 relative bg-slate-950/50">
                {/* Playhead */}
                <motion.div 
                  animate={{ left: ["10%", "90%", "10%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-0.5 bg-rose-500 z-30 shadow-[0_0_15px_rgba(244,63,94,0.8)]"
                >
                  <div className="absolute -top-3 -left-2.5 w-5 h-5 bg-rose-500 rounded-sm shadow-md flex items-center justify-center">
                    <Scissors className="w-3 h-3 text-white" />
                  </div>
                </motion.div>

                <div className="space-y-3 relative z-20">
                  {/* Video Track */}
                  <div className="h-10 bg-slate-900 rounded-lg flex overflow-hidden border border-slate-800 shadow-inner">
                    <div className="w-1/4 h-full bg-blue-600/60 border-r border-slate-950 backdrop-blur-sm" />
                    <div className="w-1/2 h-full bg-cyan-500/60 border-r border-slate-950 backdrop-blur-sm" />
                    <div className="flex-1 h-full bg-blue-400/60 backdrop-blur-sm" />
                  </div>
                  {/* B-Roll Track */}
                  <div className="h-8 bg-slate-900 rounded-lg flex overflow-hidden border border-slate-800 shadow-inner">
                    <div className="w-1/3 h-full bg-transparent border-r border-slate-950" />
                    <div className="w-1/3 h-full bg-emerald-500/60 border-r border-slate-950 backdrop-blur-sm rounded-md" />
                  </div>
                  {/* Audio Track */}
                  <div className="h-10 bg-slate-900 rounded-lg flex overflow-hidden border border-slate-800 shadow-inner">
                    <div className="w-full h-full bg-purple-500/40 backdrop-blur-sm flex items-center px-2 gap-1">
                      {/* Waveform simulation */}
                      {[...Array(40)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: ["20%", `${40 + Math.random() * 60}%`, "20%"] }}
                          transition={{ duration: 0.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                          className="flex-1 bg-purple-400/80 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tool Panel */}
            <motion.div 
              animate={{ z: [30, 60, 30], y: [-20, -40, -20] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-20 bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.3)] border border-slate-600/50 transform translate-z-[40px] flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center border border-slate-600"><Scissors className="w-5 h-5 text-slate-300" /></div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]"><Play className="w-5 h-5 text-white" /></div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Video, Play } from "lucide-react";

export function VideoHero() {
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
            <Video className="w-4 h-4" /> Video Editing & Production
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Stop the scroll. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Start the show.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We transform raw footage into high-retention masterpieces. From viral TikToks to cinematic brand anthems, our editing keeps eyes glued to the screen.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Produce Your Video
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: Animated Timeline (Dark Glassmorphism) */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <div className="w-full max-w-xl bg-slate-900/80 backdrop-blur-3xl rounded-[2rem] shadow-[0_32px_64px_rgba(0,0,0,0.3)] border border-slate-700/50 overflow-hidden transform-style-3d rotate-y-[-5deg] rotate-x-[5deg]">
            
            {/* Video Player Area */}
            <div className="relative h-72 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800">
              {/* Raw vs Graded Split */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-slate-800 grayscale opacity-80" />
                <div className="w-1/2 h-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-90" />
              </div>
              {/* Play Button - Glass */}
              <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <Play className="w-8 h-8 text-white ml-2 filter drop-shadow-md" />
              </div>
            </div>
            
            {/* Timeline Area */}
            <div className="p-8 bg-slate-900/50 relative">
              <div className="flex items-center gap-4 mb-6 text-slate-400 text-xs font-mono">
                <span>00:00:00</span>
                <div className="flex-1 h-px bg-slate-700/50" />
                <span>00:01:30</span>
              </div>
              
              {/* Tracks */}
              <div className="space-y-3 relative">
                {/* Playhead */}
                <motion.div 
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[-10px] bottom-[-10px] w-0.5 bg-rose-500 z-20 shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                >
                  <div className="absolute -top-2 -left-2 w-4.5 h-4.5 bg-rose-500 rounded-sm shadow-md" />
                </motion.div>

                <div className="h-10 bg-slate-950/50 rounded-lg flex overflow-hidden shadow-inner border border-slate-800/50">
                  <div className="w-1/3 h-full bg-blue-600/60 border-r border-slate-900 backdrop-blur-sm" />
                  <div className="w-1/2 h-full bg-cyan-500/60 border-r border-slate-900 backdrop-blur-sm" />
                  <div className="flex-1 h-full bg-blue-400/60 backdrop-blur-sm" />
                </div>
                <div className="h-10 bg-slate-950/50 rounded-lg flex overflow-hidden shadow-inner border border-slate-800/50">
                  <div className="w-1/4 h-full bg-emerald-500/60 border-r border-slate-900 backdrop-blur-sm" />
                  <div className="w-2/3 h-full bg-emerald-400/60 border-r border-slate-900 backdrop-blur-sm" />
                </div>
                <div className="h-10 bg-slate-950/50 rounded-lg flex overflow-hidden shadow-inner border border-slate-800/50">
                  <div className="w-full h-full bg-purple-500/60 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

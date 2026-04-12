import { motion } from "framer-motion";
import { ArrowRight, Type, Mic, Sparkles } from "lucide-react";

export function SubtitlesHero() {
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
            <Type className="w-4 h-4" /> Subtitles & Captions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Make every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              word pop.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            80% of videos are watched on mute. We create dynamic, animated, and highly engaging subtitles that capture attention and dramatically increase watch time.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Caption My Video
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Audio Waveform to Text */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg transform-style-3d flex flex-col items-center justify-center gap-12"
          >
            
            {/* Audio Waveform - Glassmorphic Container */}
            <div className="w-full bg-white/60 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-white/80 transform translate-z-[0px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mic className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Audio Analysis</div>
              </div>
              
              {/* Dynamic Waveform Bars */}
              <div className="flex items-center justify-center gap-1 h-24">
                {[...Array(30)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: ["20%", `${40 + Math.random() * 60}%`, "20%"] }}
                    transition={{ duration: 0.3 + Math.random() * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
                ))}
              </div>
            </div>

            {/* Generated Subtitles - Popping out in 3D */}
            <div className="relative w-full flex flex-col items-center gap-4 transform translate-z-[60px]">
              
              {/* Connection Beams */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent opacity-50" />
              
              {/* Subtitle Word 1 */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(6,182,212,0.8)", "0px 0px 0px rgba(0,0,0,0)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="bg-slate-900 text-white text-5xl font-black px-8 py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-slate-700 uppercase tracking-tighter"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Dynamic</span>
              </motion.div>
              
              {/* Subtitle Word 2 */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(59,130,246,0.8)", "0px 0px 0px rgba(0,0,0,0)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white/90 backdrop-blur-xl text-slate-900 text-4xl font-black px-6 py-3 rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 uppercase tracking-tight transform translate-z-[20px]"
              >
                Captions
              </motion.div>

            </div>

            {/* Floating Sparkles */}
            <motion.div 
              animate={{ z: [40, 80, 40], y: [-20, -40, -20], rotate: 180 }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/2 bg-white/90 backdrop-blur-xl p-3 rounded-full shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[40px]"
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

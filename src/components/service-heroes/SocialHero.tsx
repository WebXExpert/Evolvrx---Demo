import { motion } from "framer-motion";
import { ArrowRight, Heart, Share2, MessageCircle } from "lucide-react";

export function SocialHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <Share2 className="w-4 h-4" /> Social Media Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Build a cult <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              following.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We don't just post; we build communities. Our automated scheduling, trend-jacking algorithms, and viral content frameworks turn passive scrollers into brand advocates.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Grow Your Audience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: Exploding Phone Mockup */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          {/* Premium Phone Bezel */}
          <div className="relative w-[300px] h-[600px] bg-gradient-to-b from-slate-200 to-slate-300 rounded-[3.5rem] p-2 shadow-[0_32px_64px_rgba(0,0,0,0.15)] transform-style-3d rotate-y-[-15deg] rotate-x-[5deg]">
            <div className="absolute inset-0 rounded-[3.5rem] border border-white/60 mix-blend-overlay" />
            
            {/* Screen */}
            <div className="relative w-full h-full bg-slate-50 rounded-[3rem] overflow-hidden flex flex-col border-4 border-slate-900 shadow-inner">
              
              {/* Post Mockup - Glassmorphic */}
              <div className="p-5 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-inner" />
                  <div>
                    <div className="w-24 h-3 bg-slate-200 rounded mb-1.5" />
                    <div className="w-16 h-2 bg-slate-100 rounded" />
                  </div>
                </div>
                <div className="w-full h-48 bg-slate-100 rounded-2xl mb-4 relative overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" alt="Social Post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="flex justify-between px-2">
                  <Heart className="w-6 h-6 text-rose-500 fill-rose-500 filter drop-shadow-md" />
                  <MessageCircle className="w-6 h-6 text-slate-300" />
                  <Share2 className="w-6 h-6 text-slate-300" />
                </div>
              </div>
              
              {/* Follower Counter */}
              <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50/50 to-cyan-50/50 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]" />
                <div className="relative z-10 text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Followers</div>
                <div className="relative z-10 text-5xl font-black text-slate-900 flex items-center tracking-tighter">
                  12,
                  <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.1, repeat: Infinity }}>4</motion.span>
                  <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.05, repeat: Infinity }}>9</motion.span>
                  <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.02, repeat: Infinity }}>2</motion.span>
                </div>
              </div>
            </div>

            {/* Exploding Particles */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  x: (Math.random() - 0.5) * 600,
                  y: -Math.random() * 700 - 100,
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/2 z-30 pointer-events-none"
              >
                {i % 3 === 0 ? <Heart className="w-8 h-8 text-rose-500 fill-rose-500 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" /> :
                 i % 3 === 1 ? <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-white/50">+1</div> :
                 <Share2 className="w-8 h-8 text-cyan-500 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />}
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

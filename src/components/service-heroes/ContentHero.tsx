import { motion } from "framer-motion";
import { ArrowRight, PenTool, FileText, Share2, Mail, Sparkles } from "lucide-react";

export function ContentHero() {
  const orbitVariants = {
    animate: { rotate: 360, transition: { duration: 20, repeat: Infinity, ease: "linear" } }
  };
  const reverseOrbitVariants = {
    animate: { rotate: -360, transition: { duration: 20, repeat: Infinity, ease: "linear" } }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_100%)] pointer-events-none z-0" />

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(6,182,212,0.1)]"
          >
            <PenTool className="w-4 h-4" /> Content Marketing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Words that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              drive action.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We build automated content engines. From high-converting landing page copy to authoritative blog clusters, we produce content that ranks, engages, and converts.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Scale Your Content
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: Orbital Content Engine */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          
          {/* Central Core */}
          <div className="relative z-20 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full shadow-[0_0_60px_rgba(14,165,233,0.5)] flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-white rounded-full blur-md mix-blend-overlay" />
            <Sparkles className="w-12 h-12 text-white relative z-10" />
          </div>

          {/* Orbit Ring 1 */}
          <motion.div variants={orbitVariants} animate="animate" className="absolute w-[320px] h-[320px] border border-cyan-200/50 rounded-full flex items-center justify-center shadow-[inset_0_0_40px_rgba(6,182,212,0.05)]">
            <motion.div variants={reverseOrbitVariants} animate="animate" className="absolute -top-10">
              <div className="relative p-[1px] rounded-2xl overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl" />
                <div className="relative bg-white/60 backdrop-blur-2xl p-4 rounded-2xl border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-100/80 rounded-full flex items-center justify-center shadow-inner"><FileText className="w-5 h-5 text-rose-600" /></div>
                  <div className="font-bold text-slate-900 text-sm">Blog Post</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={reverseOrbitVariants} animate="animate" className="absolute -bottom-10">
              <div className="relative p-[1px] rounded-2xl overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl" />
                <div className="relative bg-white/60 backdrop-blur-2xl p-4 rounded-2xl border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100/80 rounded-full flex items-center justify-center shadow-inner"><Share2 className="w-5 h-5 text-blue-600" /></div>
                  <div className="font-bold text-slate-900 text-sm">Social Media</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Orbit Ring 2 */}
          <motion.div variants={reverseOrbitVariants} animate="animate" className="absolute w-[540px] h-[540px] border border-blue-200/40 border-dashed rounded-full flex items-center justify-center">
            <motion.div variants={orbitVariants} animate="animate" className="absolute -left-10">
              <div className="relative p-[1px] rounded-2xl overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl" />
                <div className="relative bg-white/60 backdrop-blur-2xl p-4 rounded-2xl border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100/80 rounded-full flex items-center justify-center shadow-inner"><Mail className="w-5 h-5 text-emerald-600" /></div>
                  <div className="font-bold text-slate-900 text-sm">Newsletter</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={orbitVariants} animate="animate" className="absolute -right-10">
              <div className="relative p-[1px] rounded-2xl overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl" />
                <div className="relative bg-white/60 backdrop-blur-2xl p-4 rounded-2xl border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100/80 rounded-full flex items-center justify-center shadow-inner"><PenTool className="w-5 h-5 text-purple-600" /></div>
                  <div className="font-bold text-slate-900 text-sm">Whitepaper</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

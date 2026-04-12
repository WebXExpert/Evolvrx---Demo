import { motion } from "framer-motion";
import { ArrowRight, Search, TrendingUp, Trophy, Sparkles } from "lucide-react";

export function SEOHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Showstopper Background: Moving Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-200/40 blur-[120px]" />
        <motion.div animate={{ x: [0, -100, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-200/40 blur-[150px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text Content */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <Sparkles className="w-4 h-4 text-blue-500" /> Search Engine Optimization
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Dominate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              the search.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We don't just chase algorithms; we anticipate them. Our programmatic SEO strategies secure the #1 spot and turn organic traffic into a predictable revenue engine.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Start Ranking
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper 3D Visual */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div
            initial={{ rotateY: 15, rotateX: 5 }}
            animate={{ rotateY: [-5, 5, -5], y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg transform-style-3d"
          >
            {/* Search Bar with Animated Gradient Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-30 transform translate-z-[60px]">
              <div className="relative p-[1px] rounded-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(6,182,212,1)_360deg)] opacity-50" 
                />
                <div className="relative bg-white/90 backdrop-blur-2xl rounded-full border border-white/50 p-4 flex items-center gap-4">
                  <Search className="w-6 h-6 text-blue-500" />
                  <div className="flex-1 h-6 relative overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute left-0 top-0 h-full flex items-center whitespace-nowrap text-slate-700 font-medium text-lg overflow-hidden"
                    >
                      best digital marketing agency
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute top-1 bottom-1 w-0.5 bg-blue-500"
                      style={{ left: "260px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Results - Premium Glassmorphism */}
            <div className="mt-12 bg-white/40 backdrop-blur-3xl rounded-[2rem] shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-white/60 p-6 space-y-4 transform translate-z-[20px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
              
              {/* Result 1 (Yours) */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="relative bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-blue-100/50 shadow-[0_8px_24px_rgba(37,99,235,0.08)]"
              >
                <div className="absolute -left-3 -top-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Trophy className="w-3 h-3" /> Rank #1
                </div>
                <div className="w-3/4 h-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded mb-3 mt-2 opacity-80" />
                <div className="w-full h-3 bg-slate-200/80 rounded mb-2" />
                <div className="w-5/6 h-3 bg-slate-200/80 rounded" />
              </motion.div>

              {/* Result 2 */}
              <div className="p-5 rounded-2xl border border-white/40 bg-white/20 backdrop-blur-sm">
                <div className="w-2/3 h-5 bg-slate-300/50 rounded mb-3" />
                <div className="w-full h-3 bg-slate-200/50 rounded mb-2" />
                <div className="w-4/5 h-3 bg-slate-200/50 rounded" />
              </div>
              {/* Result 3 */}
              <div className="p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                <div className="w-3/4 h-5 bg-slate-300/30 rounded mb-3" />
                <div className="w-full h-3 bg-slate-200/30 rounded mb-2" />
              </div>
            </div>

            {/* Floating Chart - Premium Glass */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-16 -bottom-16 bg-white/80 backdrop-blur-2xl p-6 rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[90px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shadow-inner">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Organic Traffic</div>
                  <div className="text-xs text-emerald-600 font-bold">+342%</div>
                </div>
              </div>
              <div className="flex items-end gap-2 h-20">
                {[20, 35, 25, 50, 45, 70, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 2.5 + (i * 0.1) }}
                    className="w-6 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-md shadow-[0_4px_10px_rgba(52,211,153,0.3)]"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

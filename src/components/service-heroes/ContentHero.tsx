import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, CheckCircle2 } from "lucide-react";

export function ContentHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white border-b border-slate-200">
      {/* Soft Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 shadow-sm text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <FileText className="w-3.5 h-3.5" /> Content Marketing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Content engines <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              that scale infinitely.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Stop relying on manual creation. We build automated content pipelines that take a single core idea and instantly generate, format, and distribute high-converting narratives across every channel.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Build Your Pipeline
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right: Image + Floating UI Compositing */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          
          {/* Main Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative w-[90%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
              alt="Creative Strategy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </motion.div>

          {/* Floating UI Badge 1: AI Generation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-20 -right-4 bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-4 z-20 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">AI Pipeline Active</div>
              <div className="text-xs font-medium text-slate-500">Generating 5 assets...</div>
            </div>
          </motion.div>

          {/* Floating UI Badge 2: Published Status */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute -bottom-6 left-12 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 z-20 w-64"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Distribution</span>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Live</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Blog Post", delay: 1.4 },
                { label: "LinkedIn Thread", delay: 1.6 },
                { label: "Email Newsletter", delay: 1.8 }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: item.delay, type: "spring" }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </motion.div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

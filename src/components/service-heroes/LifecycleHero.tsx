import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Smartphone, RefreshCw } from "lucide-react";

export function LifecycleHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08)_0%,transparent_100%)] pointer-events-none z-0" />

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Text */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <RefreshCw className="w-4 h-4" /> Lifecycle Marketing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Never lose a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              customer again.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We build automated, hyper-personalized retention loops across Email, SMS, and WhatsApp. Turn one-time buyers into lifelong brand advocates.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Automate Retention
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: Animated Pipeline */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* SVG Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M 100 100 C 300 100, 300 300, 500 300 C 700 300, 700 500, 900 500" fill="none" stroke="url(#pipeGrad)" strokeWidth="12" strokeLinecap="round" />
              
              {/* Animated Data Packets */}
              <motion.circle 
                r="8" fill="#ffffff" filter="url(#glow)"
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: "path('M 100 100 C 300 100, 300 300, 500 300 C 700 300, 700 500, 900 500')" } as any}
              />
              <motion.circle 
                r="8" fill="#ffffff" filter="url(#glow)"
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
                style={{ offsetPath: "path('M 100 100 C 300 100, 300 300, 500 300 C 700 300, 700 500, 900 500')" } as any}
              />
            </svg>

            {/* Nodes - Premium Glassmorphism */}
            <div className="absolute top-[50px] left-[50px] bg-white/70 backdrop-blur-2xl p-5 rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white/80 flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100/80 rounded-2xl flex items-center justify-center shadow-inner border border-white"><Smartphone className="w-6 h-6 text-slate-600" /></div>
              <div>
                <div className="font-bold text-slate-900 text-base">Visitor</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Acquisition</div>
              </div>
            </div>

            <div className="absolute top-[250px] left-[430px] bg-white/70 backdrop-blur-2xl p-5 rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white/80 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100/80 rounded-2xl flex items-center justify-center shadow-inner border border-white"><Mail className="w-6 h-6 text-blue-600" /></div>
              <div>
                <div className="font-bold text-slate-900 text-base">Lead</div>
                <div className="text-xs text-blue-600 uppercase tracking-wider font-semibold">Welcome Series</div>
              </div>
            </div>

            <div className="absolute top-[450px] left-[830px] p-[1px] rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(14,165,233,0.2)]">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(6,182,212,1)_360deg)] opacity-50" />
              <div className="relative bg-white/90 backdrop-blur-2xl p-5 rounded-3xl border border-white/50 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-inner border border-white/20"><MessageSquare className="w-6 h-6 text-white" /></div>
                <div>
                  <div className="font-bold text-slate-900 text-base">Advocate</div>
                  <div className="text-xs text-cyan-600 font-bold uppercase tracking-wider">Loyalty Loop</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

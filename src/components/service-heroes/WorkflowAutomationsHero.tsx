import { motion } from "framer-motion";
import { ArrowRight, Workflow, Zap, Database, Mail } from "lucide-react";

export function WorkflowAutomationsHero() {
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
            <Workflow className="w-4 h-4" /> Workflow Automations
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Eliminate the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              busywork.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We connect your fragmented tools into seamless, automated ecosystems. Save hundreds of hours, reduce human error, and scale operations without adding headcount.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Automate My Business
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Isometric App Factory */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-10, 10, -10], rotateX: [60, 50, 60] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg h-96 transform-style-3d"
          >
            
            {/* Base Platform */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-white/40" />

            {/* App Node 1: Trigger (Zapier/Webhook) */}
            <motion.div 
              animate={{ z: [20, 40, 20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-20 h-20 bg-orange-500/90 backdrop-blur-xl rounded-2xl shadow-[0_16px_32px_rgba(249,115,22,0.4)] border border-orange-300 flex items-center justify-center transform translate-z-[40px]"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>

            {/* App Node 2: Database (CRM) */}
            <motion.div 
              animate={{ z: [30, 50, 30] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600/90 backdrop-blur-xl rounded-2xl shadow-[0_16px_32px_rgba(37,99,235,0.4)] border border-blue-400 flex items-center justify-center transform translate-z-[60px]"
            >
              <Database className="w-12 h-12 text-white" />
            </motion.div>

            {/* App Node 3: Action (Email/Slack) */}
            <motion.div 
              animate={{ z: [20, 40, 20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 right-10 w-20 h-20 bg-emerald-500/90 backdrop-blur-xl rounded-2xl shadow-[0_16px_32px_rgba(16,185,129,0.4)] border border-emerald-300 flex items-center justify-center transform translate-z-[40px]"
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>

            {/* Glowing Data Tubes */}
            <svg className="absolute inset-0 w-full h-full transform translate-z-[20px] pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="tubeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="tubeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              
              {/* Tube 1 */}
              <path d="M 80 80 L 200 200" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" strokeLinecap="round" />
              <motion.path 
                initial={{ strokeDashoffset: 200, strokeDasharray: "50 150" }}
                animate={{ strokeDashoffset: -50 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                d="M 80 80 L 200 200" fill="none" stroke="url(#tubeGrad1)" strokeWidth="8" strokeLinecap="round"
                className="filter drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]"
              />

              {/* Tube 2 */}
              <path d="M 200 200 L 320 320" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" strokeLinecap="round" />
              <motion.path 
                initial={{ strokeDashoffset: 200, strokeDasharray: "50 150" }}
                animate={{ strokeDashoffset: -50 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                d="M 200 200 L 320 320" fill="none" stroke="url(#tubeGrad2)" strokeWidth="8" strokeLinecap="round"
                className="filter drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
              />
            </svg>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

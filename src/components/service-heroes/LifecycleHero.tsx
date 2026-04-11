import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, GitBranch, PlayCircle } from "lucide-react";

export function LifecycleHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white border-b border-slate-200">
      {/* Sparse Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_2px,transparent_2px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-blue-700 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <GitBranch className="w-3.5 h-3.5" /> Lifecycle Marketing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Revenue <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              on repeat.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We architect intelligent, automated workflows across Email and WhatsApp that trigger at the exact right moment to convert, retain, and upsell your customers without manual effort.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Map Your Workflow
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right: Automation Animation (Workflow Builder) */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-lg h-[500px] bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl p-8">
            
            {/* Grid Pattern inside canvas */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl pointer-events-none" />

            {/* Workflow Nodes */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-between">
              
              {/* Trigger Node */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white border-2 border-slate-200 shadow-md rounded-xl px-4 py-3 flex items-center gap-3 w-48"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <PlayCircle className="w-4 h-4 text-slate-600" />
                </div>
                <div className="text-sm font-bold text-slate-900">Cart Abandoned</div>
              </motion.div>

              {/* Connecting Line 1 */}
              <div className="w-0.5 h-12 bg-slate-200 relative">
                <motion.div 
                  animate={{ height: ["0%", "100%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full bg-blue-500"
                />
              </div>

              {/* Condition Node */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white border-2 border-blue-100 shadow-md rounded-xl px-4 py-3 flex items-center justify-center w-40"
              >
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Wait 1 Hour</div>
              </motion.div>

              {/* Split Lines */}
              <div className="relative w-48 h-12">
                <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-slate-200 -translate-x-1/2" />
                <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200" />
                <div className="absolute top-6 left-0 w-0.5 h-6 bg-slate-200" />
                <div className="absolute top-6 right-0 w-0.5 h-6 bg-slate-200" />
                
                {/* Animated Split Pulses */}
                <motion.div 
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full overflow-visible">
                    <path d="M 96 0 L 96 24 L 0 24 L 0 48" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                    <path d="M 96 0 L 96 24 L 192 24 L 192 48" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                  </svg>
                </motion.div>
              </div>

              {/* Action Nodes */}
              <div className="flex justify-between w-64">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.1 }}
                  className="bg-white border-2 border-cyan-100 shadow-md rounded-xl px-3 py-3 flex flex-col items-center gap-2 w-28"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-900 text-center">Send Email</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.3 }}
                  className="bg-white border-2 border-blue-100 shadow-md rounded-xl px-3 py-3 flex flex-col items-center gap-2 w-28"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-900 text-center">Send WhatsApp</div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

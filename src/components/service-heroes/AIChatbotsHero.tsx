import { motion } from "framer-motion";
import { ArrowRight, Bot, MessageSquare, Zap } from "lucide-react";

export function AIChatbotsHero() {
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
            <Bot className="w-4 h-4" /> AI Chatbots
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            24/7 sales & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              support agents.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Deploy intelligent, context-aware AI chatbots that handle customer inquiries, qualify leads, and close sales around the clock without human intervention.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Deploy an AI Agent
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Phone with Floating AI Orb */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-10, 10, -10], rotateX: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
          >
            
            {/* 3D Glassmorphic Phone */}
            <div className="absolute w-72 h-[500px] bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] border-8 border-white/80 p-4 flex flex-col transform translate-z-[0px]">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-inner">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">AI Assistant</div>
                  <div className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Online
                  </div>
                </div>
              </div>
              
              {/* Chat Area */}
              <div className="flex-1 flex flex-col gap-4">
                {/* User Message */}
                <div className="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%] shadow-md">
                  Can you help me upgrade my plan?
                </div>
                {/* AI Typing Indicator */}
                <div className="self-start bg-slate-100 text-slate-500 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[80%] flex gap-1">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Floating AI Orb (Popping out of screen) */}
            <motion.div 
              animate={{ z: [60, 120, 60], y: [-20, -40, -20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 transform translate-z-[80px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="relative w-20 h-20 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_30px_rgba(34,211,238,0.8)] border border-white/50 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
            </motion.div>

            {/* Floating Instant Reply Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], x: [-50, 0, 0, 50], z: [100, 150, 150, 100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.15)] border border-white/60 transform translate-z-[100px] flex items-start gap-3 w-64"
            >
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs text-slate-700 font-medium leading-relaxed">
                "I've successfully upgraded your account to the Pro tier. Is there anything else I can help you with today?"
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

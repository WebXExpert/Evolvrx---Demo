import { motion } from "framer-motion";
import { ArrowRight, Share2, BarChart3, Heart, MessageCircle } from "lucide-react";

export function SocialHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Clean Background with Floating Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-64 h-64 border-4 border-blue-100 rounded-full"
        />
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[40%] w-48 h-48 border-4 border-cyan-100 rounded-2xl rotate-12"
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-blue-700 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Share2 className="w-3.5 h-3.5" /> Social Media Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Omnipresence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              without the overhead.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We engineer automated social ecosystems. From AI-assisted scheduling grids to algorithmic engagement routing, we keep your brand viral and responsive 24/7.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Automate Your Socials
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right: Image + Floating Social UI Compositing */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          
          {/* Main Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative w-[320px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000" 
              alt="Social Media Influencer" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            
            {/* Mock Social Post Info */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm" />
                <div className="text-sm font-bold">@brand_official</div>
              </div>
              <p className="text-xs text-white/80 line-clamp-2">Launching our new automated workflow system today! 🚀 #automation #growth</p>
            </div>
          </motion.div>

          {/* Floating Analytics Card */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-12 top-20 bg-white border border-slate-200 shadow-xl rounded-2xl p-5 z-20 w-48"
          >
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-slate-600 uppercase">Engagement</span>
            </div>
            <div className="text-3xl font-black text-slate-900 mb-2">+428%</div>
            {/* Animated Graph Line */}
            <svg className="w-full h-10 overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                d="M 0 30 Q 10 10, 20 20 T 40 10 T 60 25 T 80 5 T 100 0" 
                fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Floating Engagement Bubbles */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, type: "spring" }}
            className="absolute -left-8 top-1/3 bg-white shadow-lg rounded-full p-3 flex items-center gap-2 z-20"
          >
            <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            </div>
            <span className="text-sm font-bold pr-2">12.4k</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring" }}
            className="absolute -left-4 bottom-1/3 bg-white shadow-lg rounded-full p-3 flex items-center gap-2 z-20"
          >
            <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-cyan-600 fill-cyan-600" />
            </div>
            <span className="text-sm font-bold pr-2">842</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

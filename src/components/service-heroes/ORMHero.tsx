import { motion } from "framer-motion";
import { ArrowRight, Shield, Star } from "lucide-react";

export function ORMHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white border-b border-slate-200">
      {/* Split Background */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full bg-white" />
        <div className="w-1/2 h-full bg-slate-50" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 shadow-sm text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Shield className="w-3.5 h-3.5" /> Online Reputation Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Your digital legacy, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              bulletproofed.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            Our automated sentiment monitors scan the web 24/7, instantly intercepting negative brand mentions and systematically amplifying 5-star reviews to engineer a pristine digital presence.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Scan My Brand
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right: Image + Shield Automation Compositing */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          
          {/* Main Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative w-[80%] h-[80%] rounded-full overflow-hidden shadow-2xl border-8 border-white z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Business Leader" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Glowing Shield Overlay */}
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border-[12px] border-cyan-400/30 rounded-full"
            />
          </motion.div>

          {/* Automated Interception Animation */}
          
          {/* Negative Mention (Red) getting intercepted */}
          <motion.div 
            initial={{ x: 200, y: -150, opacity: 0, scale: 0 }}
            animate={{ x: [200, 100, 100], y: [-150, -80, -80], opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            className="absolute z-20 bg-white border border-red-100 shadow-lg rounded-xl p-3 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold text-slate-700">Negative Mention</span>
            {/* Shield pop */}
            <motion.div 
              animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 border-2 border-cyan-400 rounded-xl"
            />
          </motion.div>

          {/* Positive Review (Gold) getting amplified */}
          <motion.div 
            initial={{ x: -250, y: 150, opacity: 0, scale: 0.5 }}
            animate={{ x: [-250, -150, -50], y: [150, 80, -150], opacity: [0, 1, 1], scale: [0.5, 1, 1.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute z-30 bg-white border border-blue-100 shadow-2xl rounded-xl p-4 flex flex-col gap-2"
          >
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <span className="text-xs font-bold text-slate-900">5-Star Review Amplified</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

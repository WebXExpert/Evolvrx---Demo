import { ArrowUpRight, Play } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Hero() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      <HeroBackground />
      
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 w-full px-8 lg:px-16 relative flex flex-col justify-center min-h-[80vh]">
          
          {/* Right Side Content (Heading) */}
          <div className="flex flex-col items-start lg:items-end w-full relative z-10 lg:pr-24 xl:pr-48 mt-20 lg:mt-0">
            <motion.div 
              className="w-full lg:w-auto flex flex-col items-start"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeUpVariants} className="text-blue-600 font-medium tracking-wide text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                AI-Driven Growth Engineering
              </motion.div>
              
              <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] text-left">
                <span className="block text-slate-900">WE BUILD</span>
                <span className="block text-blue-600 my-2">GROWTH SYSTEMS.</span>
                <span className="block text-slate-900">NOT CAMPAIGNS.</span>
              </motion.h1>

              <motion.div variants={fadeUpVariants} className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all hover:scale-105 duration-300 text-sm shadow-lg shadow-slate-900/20">
                  Build Your Growth System
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all hover:scale-105 duration-300 text-sm shadow-sm">
                  Start A Conversation
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Left Card & Text */}
          <motion.div 
            className="hidden lg:flex absolute bottom-12 left-8 lg:left-16 items-end gap-8 z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            
            <div className="relative">
              {/* Speech Bubble */}
              <div className="absolute -top-20 -left-6 z-30">
                <motion.div 
                  className="relative w-32 h-32 flex items-center justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-white drop-shadow-xl" style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.1))' }}>
                    <path fill="currentColor" d="M 100, 20 C 120, 20 135, 30 145, 45 C 165, 45 180, 60 180, 80 C 180, 95 170, 110 155, 120 C 165, 135 160, 155 140, 165 C 125, 175 105, 175 90, 165 C 70, 175 45, 170 35, 150 C 20, 140 15, 120 25, 105 C 10, 95 5, 75 15, 60 C 25, 45 45, 40 60, 50 C 70, 30 85, 20 100, 20 Z" />
                  </svg>
                  <div className="relative z-10 flex flex-col items-center">
                    <ArrowUpRight className="w-4 h-4 text-slate-500 mb-1" />
                    <span className="text-sm font-medium text-slate-900">Let's Talk</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-2 overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-colors w-64 shadow-xl shadow-slate-200/50">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                    alt="Team member" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 text-slate-900 fill-slate-900 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-2 flex items-center justify-between">
                  <span className="font-medium text-sm text-slate-800">How We Work</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-slate-600 max-w-sm pb-4">
              <div className="w-8 h-8 flex flex-wrap gap-[2px] mb-4">
                <div className="w-[14px] h-[14px] bg-slate-900 rounded-[2px]" />
                <div className="w-[14px] h-[14px] bg-slate-900 rounded-[2px]" />
                <div className="w-[14px] h-[14px] bg-slate-900 rounded-[2px] translate-x-[4px] translate-y-[4px]" />
                <div className="w-[14px] h-[14px] bg-slate-900 rounded-[2px]" />
              </div>
              <p>Most companies run marketing activities.</p>
              <p>Few build growth infrastructure.</p>
              <p><span className="text-slate-900 font-medium">Marketing is temporary. Growth systems compound.</span></p>
            </div>
          </motion.div>

          {/* Right Side Vertical Text */}
          <motion.div 
            className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-32 z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-slate-400 text-xs tracking-widest rotate-90 origin-center whitespace-nowrap">
              hello@evolvrxdigital.com
            </span>
          </motion.div>

          {/* Bottom Right Star */}
          <motion.div 
            className="absolute bottom-12 right-12 text-slate-300"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
             <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
          </motion.div>

        </main>
      </div>
    </div>
  );
}

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Palette, Cpu, Play } from "lucide-react";

const FloatingCard = ({ 
  title, 
  subtitle,
  icon: Icon, 
  image, 
  delay, 
  className,
  yOffset = [0, -15, 0]
}: { 
  title: string, 
  subtitle: string,
  icon: any, 
  image: string, 
  delay: number, 
  className: string,
  yOffset?: number[]
}) => (
  <motion.div
    initial={{ opacity: 0, y: 100, rotate: -10 }}
    animate={{ opacity: 1, y: 0, rotate: 0 }}
    transition={{ duration: 1, delay, type: "spring", bounce: 0.4 }}
    className={`absolute ${className}`}
  >
    <motion.div 
      animate={{ y: yOffset }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      className="bg-white/90 backdrop-blur-2xl border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-3xl p-3 w-64 md:w-72 group cursor-pointer hover:border-blue-200 transition-colors"
    >
      <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="px-2 pb-2">
        <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
        <p className="text-xs text-slate-500 font-medium mt-1">{subtitle}</p>
      </div>
    </motion.div>
  </motion.div>
);

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      <Navbar />
      
      {/* Premium Services Hero */}
      <main className="flex-1 w-full pt-24 pb-32 relative flex flex-col justify-center min-h-[90vh]">
        
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-white to-transparent opacity-80" />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" 
        />

        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Typography & CTA */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-xs font-bold tracking-[0.2em] uppercase mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Our Capabilities
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]"
              >
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  digital dominance.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed"
              >
                We don't just run campaigns. We build interconnected growth engines—combining elite design, AI automation, and data-driven acquisition to scale your revenue.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all hover:scale-105 duration-300 text-sm shadow-[0_10px_20px_rgba(15,23,42,0.2)]">
                  Explore Services
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all hover:scale-105 duration-300 text-sm shadow-sm group">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Play className="w-3 h-3 text-blue-700 fill-blue-700" />
                  </div>
                  Watch Showreel
                </button>
              </motion.div>

              {/* Quick Stats/Trust */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-16 pt-8 border-t border-slate-200/60 flex items-center gap-8 md:gap-12"
              >
                <div>
                  <div className="text-2xl font-black text-slate-900">6+</div>
                  <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mt-1">Core Disciplines</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-2xl font-black text-slate-900">360°</div>
                  <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mt-1">Growth Approach</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Visual Showcase */}
            <div className="lg:col-span-6 relative h-[600px] hidden md:block mt-12 lg:mt-0">
              {/* Center Anchor Point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              
              {/* Floating Cards */}
              <FloatingCard 
                title="Growth Marketing"
                subtitle="Acquisition & Scaling"
                icon={TrendingUp}
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                delay={0.2}
                className="top-[5%] right-[10%] z-30"
                yOffset={[0, -20, 0]}
              />
              
              <FloatingCard 
                title="Design & Dev"
                subtitle="High-Performance UX"
                icon={Palette}
                image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600"
                delay={0.4}
                className="top-[35%] left-[0%] z-20"
                yOffset={[0, 15, 0]}
              />
              
              <FloatingCard 
                title="AI Automation"
                subtitle="Enterprise Efficiency"
                icon={Cpu}
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
                delay={0.6}
                className="bottom-[10%] right-[20%] z-40"
                yOffset={[0, -10, 0]}
              />

              {/* Decorative connecting lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.2))' }}>
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                  d="M 150 300 Q 300 200 450 150" 
                  fill="none" 
                  stroke="url(#blue-grad)" 
                  strokeWidth="2" 
                  strokeDasharray="6 6"
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                  d="M 150 300 Q 300 400 400 450" 
                  fill="none" 
                  stroke="url(#blue-grad)" 
                  strokeWidth="2" 
                  strokeDasharray="6 6"
                />
                <defs>
                  <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

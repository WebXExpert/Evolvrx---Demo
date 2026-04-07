import { ArrowUpRight, Brain, Cloud, Filter, Settings, Gauge, LayoutDashboard, Layout, FileText, Network, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 60, 
      damping: 15 
    } 
  }
};

export function ServicesBento() {
  return (
    <section className="py-24 px-8 lg:px-16 w-full max-w-[1600px] mx-auto bg-slate-50">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-2xl leading-[1.1]">
          Growth Engineering Partner
        </h2>
        <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
          strategy, AI, engineering, and automation into connected growth infrastructure.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(200px,auto)]"
      >
        
        {/* Large Main Card (Spans 4 cols, 2 rows on desktop) */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-12 lg:col-span-4 lg:row-span-2 bg-[#0b1121] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px] group"
        >
          {/* Abstract Tech Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[1px] border-cyan-500/30 rounded-full" 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[1px] border-cyan-500/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
            <motion.div 
              animate={{ scale: [1, 0.95, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-[2px] border-cyan-500/40 rounded-full" 
            />
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>

          <div className="relative z-10">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 mb-6 uppercase">Evolvrx Digital</h3>
            <h2 className="text-4xl font-extrabold leading-tight mb-2">
              We build growth<br />systems.
            </h2>
            <h2 className="text-3xl font-bold text-slate-400 mb-8">
              Not campaigns.
            </h2>
            
            <div className="flex gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-white mb-1">8+</div>
                <div className="text-xs text-slate-400 font-medium tracking-wide">Years</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-1">120+</div>
                <div className="text-xs text-slate-400 font-medium tracking-wide">Campaigns</div>
              </div>
            </div>
          </div>

          <button className="relative z-10 bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold flex items-center justify-between w-fit gap-4 hover:bg-slate-100 transition-colors group-hover:scale-105 duration-300">
            Let's Build <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Card 01: Growth Strategy */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-6 lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 flex flex-col relative overflow-hidden group"
        >
          <div className="text-cyan-500 font-bold text-sm mb-4">01</div>
          <div className="flex-1 flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity relative">
            <svg width="80" height="80" viewBox="0 0 120 100" className="text-slate-300 relative z-10">
              <path d="M10 10 L110 10 L75 60 L75 90 L45 90 L45 60 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
              <ellipse cx="60" cy="10" rx="50" ry="10" fill="none" stroke="currentColor" strokeWidth="3" />
              <ellipse cx="60" cy="60" rx="15" ry="5" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
            {/* Falling dots */}
            <motion.div className="absolute top-0 w-2 h-2 bg-cyan-400 rounded-full z-0" animate={{ y: [0, 40, 80], x: [0, 10, 0], opacity: [0, 1, 0], scale: [1, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            <motion.div className="absolute top-0 w-2 h-2 bg-blue-400 rounded-full z-0" animate={{ y: [0, 40, 80], x: [-10, -5, 0], opacity: [0, 1, 0], scale: [1, 0.8, 0.5] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "linear" }} />
            <motion.div className="absolute top-0 w-2 h-2 bg-indigo-400 rounded-full z-0" animate={{ y: [0, 40, 80], x: [10, 0, 0], opacity: [0, 1, 0], scale: [1, 0.8, 0.5] }} transition={{ duration: 2, delay: 1.2, repeat: Infinity, ease: "linear" }} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1.5 text-lg">Growth Strategy</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Structured acquisition systems built to generate predictable traffic and leads.</p>
          </div>
        </motion.div>

        {/* Card 02: AI-Driven Analytics */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-6 lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 flex flex-col relative overflow-hidden group"
        >
          <div className="text-cyan-500 font-bold text-sm mb-4">02</div>
          <div className="flex-1 flex items-center justify-center gap-4 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <Cloud className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
            </motion.div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
            </div>
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <Brain className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
            </motion.div>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1.5 text-lg">AI-Driven Analytics</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Predictive intelligence and AI-assisted decisions that continuously improve performance.</p>
          </div>
        </motion.div>

        {/* Card 03: Conversion Engineering */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-12 lg:col-span-2 bg-[#1a2b3c] rounded-3xl p-6 text-white flex flex-col relative overflow-hidden"
        >
          <div className="text-cyan-400 font-bold text-sm mb-4">03</div>
          <div className="flex-1 flex items-center justify-center mb-6 relative">
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <Filter className="w-12 h-12 text-cyan-400/50" strokeWidth={1.5} />
            </motion.div>
            {/* Scanning line */}
            <motion.div 
              className="absolute w-16 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
              animate={{ y: [-20, 20, -20], opacity: [0, 1, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
            />
          </div>
          <div>
            <h3 className="font-bold mb-1.5 text-lg">Conversion Engineering</h3>
            <p className="text-[11px] text-slate-400 leading-relaxed">CRO systems, funnel improvements and behavioural analysis focused on revenue.</p>
          </div>
        </motion.div>

        {/* Card 04: Automation Workflows */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 flex flex-col relative overflow-hidden group"
        >
          <div className="text-cyan-500 font-bold text-sm mb-4">04</div>
          <div className="flex-1 flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 relative">
              <Settings className="w-8 h-8 text-slate-400 animate-[spin_4s_linear_infinite]" />
              <div className="h-0.5 w-8 bg-slate-200 relative overflow-hidden">
                <motion.div className="absolute top-0 left-0 h-full w-4 bg-cyan-400" animate={{ x: [-16, 32] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
              </div>
              <Settings className="w-10 h-10 text-slate-600 animate-[spin_6s_linear_infinite_reverse]" />
              <div className="h-0.5 w-8 bg-slate-200 relative overflow-hidden">
                <motion.div className="absolute top-0 left-0 h-full w-4 bg-cyan-400" animate={{ x: [-16, 32] }} transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }} />
              </div>
              <Settings className="w-6 h-6 text-slate-400 animate-[spin_3s_linear_infinite]" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1.5 text-lg">Automation Workflows</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Connected CRM, email, analytics and ad channels — running automatically.</p>
          </div>
        </motion.div>

        {/* Card 05: Custom Software Development */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-6 lg:col-span-4 bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-6 text-white flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full" />
          <div className="text-blue-300 font-bold text-sm mb-4 relative z-10">05</div>
          <div className="flex-1 flex items-center justify-center mb-6 relative z-10">
            <div className="relative w-24 h-24">
              {/* Isometric blocks animated */}
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 left-4 w-12 h-12 bg-blue-400/40 border border-blue-300/50 rounded transform rotate-45 skew-x-12 skew-y-12" />
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 left-8 w-12 h-12 bg-cyan-400/40 border border-cyan-300/50 rounded transform rotate-45 skew-x-12 skew-y-12 backdrop-blur-sm" />
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 left-12 w-12 h-12 bg-purple-400/40 border border-purple-300/50 rounded transform rotate-45 skew-x-12 skew-y-12 backdrop-blur-sm" />
            </div>
            <motion.div animate={{ rotate: [0, 45, -20, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-8 bottom-16 opacity-50">
              <Gauge className="w-10 h-10 text-cyan-300" />
            </motion.div>
          </div>
          <div className="relative z-10">
            <h3 className="font-bold mb-1.5 text-lg">Custom Software Development</h3>
            <p className="text-xs text-blue-200 leading-relaxed">High-performance platforms built for speed, engagement and conversions.</p>
          </div>
        </motion.div>

        {/* Card 06: Performance Marketing */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-4 lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 flex flex-col relative overflow-hidden group"
        >
          <div className="text-cyan-500 font-bold text-sm mb-4">06</div>
          <div className="flex-1 flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="w-full max-w-[140px] bg-slate-50 border border-slate-200 rounded-lg p-2 shadow-sm">
              <div className="flex gap-1 mb-2">
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <div className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <motion.div className="h-8 bg-blue-100 rounded border border-blue-200" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.div className="h-8 bg-emerald-100 rounded border border-emerald-200" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              </div>
              <div className="h-12 bg-slate-100 rounded border border-slate-200 flex items-end p-1 gap-1">
                <motion.div className="w-full bg-blue-400 rounded-t-sm" animate={{ height: ["40%", "80%", "50%", "40%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="w-full bg-blue-400 rounded-t-sm" animate={{ height: ["70%", "30%", "90%", "70%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="w-full bg-blue-400 rounded-t-sm" animate={{ height: ["50%", "100%", "60%", "50%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="w-full bg-blue-400 rounded-t-sm" animate={{ height: ["90%", "50%", "80%", "90%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1.5 text-lg">Performance Marketing</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Paid strategies engineered for ROI, not just impressions.</p>
          </div>
        </motion.div>

        {/* Card 07: Digital Experience Design */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-8 lg:col-span-4 bg-[#142e3b] rounded-3xl p-6 text-white flex flex-col relative overflow-hidden"
        >
          <div className="text-cyan-400 font-bold text-sm mb-4">07</div>
          <div className="flex-1 flex items-center justify-center mb-6">
            <div className="flex items-center gap-3">
              {[0, 1, 2].map((i) => (
                <React.Fragment key={i}>
                  <motion.div 
                    className="w-12 h-16 border border-cyan-500/40 rounded-md flex flex-col gap-1 p-1 relative overflow-hidden"
                    animate={{ borderColor: ["rgba(6,182,212,0.4)", "rgba(6,182,212,0.8)", "rgba(6,182,212,0.4)"] }}
                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                  >
                    <div className="w-full h-4 bg-cyan-500/20 rounded-sm" />
                    <div className="w-full flex-1 bg-cyan-500/10 rounded-sm" />
                    {/* Scanning highlight */}
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" 
                      animate={{ y: ["-100%", "200%"] }} 
                      transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity, ease: "linear" }} 
                    />
                  </motion.div>
                  {i < 2 && (
                    <div className="relative w-8 h-px bg-cyan-500/20">
                      <motion.div 
                        className="absolute top-0 left-0 w-2 h-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" 
                        animate={{ x: [0, 32] }} 
                        transition={{ duration: 1, delay: i * 0.4 + 0.5, repeat: Infinity, ease: "linear" }} 
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-1.5 text-lg">Digital Experience Design</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Interfaces and digital touchpoints that convert visitors into customers.</p>
          </div>
        </motion.div>

        {/* Card 08: Comparison */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-12 lg:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Background waves */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            {/* Traditional Agency */}
            <div className="bg-slate-100 rounded-xl p-4 flex items-center justify-between border border-slate-200">
              <div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 mb-1 uppercase">Traditional Agency</div>
                <div className="text-sm font-medium text-slate-700">We provide digital marketing services.</div>
              </div>
              <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <FileText className="text-slate-400 w-8 h-8 opacity-50" strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Evolvrx Digital */}
            <div className="bg-blue-50/50 rounded-xl p-4 flex items-center justify-between border border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <div>
                <div className="text-[10px] font-bold tracking-wider text-blue-600 mb-1 uppercase">Evolvrx Digital</div>
                <div className="text-sm font-bold text-slate-900">We build growth systems powered by technology.</div>
              </div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <Network className="text-blue-500 w-8 h-8 opacity-80" strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>
          
          <p className="text-xs text-slate-500 italic mt-6 text-center">
            "Marketing is temporary. Growth systems compound."
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

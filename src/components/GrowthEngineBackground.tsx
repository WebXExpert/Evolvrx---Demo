import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, TrendingUp, Users, Database, Bot, Activity, BarChart3 } from "lucide-react";

export function GrowthEngineBackground() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for parallax
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // Max movement 20px
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020617]">
      {/* Base ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1)_0%,rgba(2,6,23,1)_80%)]" />

      {/* --- LAYER 1: Deep Background Grid & Particles --- */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)', 
          backgroundSize: '60px 60px',
          x: springX,
          y: springY
        }}
      />

      {/* --- LAYER 2: The Automation Flowchart (Center/Left) --- */}
      <motion.div 
        className="absolute inset-0"
        style={{ x: useSpring(mouseX, { stiffness: 20, damping: 20 }), y: useSpring(mouseY, { stiffness: 20, damping: 20 }) }}
      >
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-40">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Path from Data -> AI */}
          <path d="M 15% 30% C 25% 30%, 30% 45%, 40% 45%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <motion.path 
            d="M 15% 30% C 25% 30%, 30% 45%, 40% 45%" 
            fill="none" stroke="url(#flow-gradient)" strokeWidth="3" filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Path from AI -> Actions */}
          <path d="M 40% 45% C 50% 45%, 55% 35%, 65% 35%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <motion.path 
            d="M 40% 45% C 50% 45%, 55% 35%, 65% 35%" 
            fill="none" stroke="url(#flow-gradient)" strokeWidth="3" filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />

          {/* Path from AI -> CRM */}
          <path d="M 40% 45% C 45% 45%, 50% 60%, 60% 60%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <motion.path 
            d="M 40% 45% C 45% 45%, 50% 60%, 60% 60%" 
            fill="none" stroke="url(#flow-gradient)" strokeWidth="3" filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.8 }}
          />
        </svg>

        {/* Node 1: Raw Data / Leads */}
        <div className="absolute top-[30%] left-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
          <div className="mt-3 text-xs font-mono text-blue-400/80 bg-blue-950/50 px-2 py-1 rounded border border-blue-500/20">
            Raw Signals
          </div>
        </div>

        {/* Node 2: AI Processing Engine */}
        <div className="absolute top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <motion.div 
            className="w-24 h-24 rounded-full bg-cyan-950/80 border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.4)] relative"
            animate={{ boxShadow: ["0 0 30px rgba(6,182,212,0.3)", "0 0 70px rgba(6,182,212,0.6)", "0 0 30px rgba(6,182,212,0.3)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bot className="w-10 h-10 text-cyan-300" />
            {/* Spinning ring */}
            <motion.div 
              className="absolute inset-[-10px] rounded-full border border-cyan-500/30 border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <div className="mt-4 text-xs font-mono text-cyan-300 bg-cyan-950/50 px-3 py-1.5 rounded border border-cyan-500/30 flex items-center gap-2">
            <Zap className="w-3 h-3" />
            AI Enrichment
          </div>
        </div>

        {/* Node 3: Automated Actions */}
        <div className="absolute top-[35%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <Activity className="w-8 h-8 text-purple-400" />
          </div>
          <div className="mt-3 text-xs font-mono text-purple-400/80 bg-purple-950/50 px-2 py-1 rounded border border-purple-500/20">
            Dynamic Campaigns
          </div>
        </div>

        {/* Node 4: CRM / Infrastructure */}
        <div className="absolute top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <Database className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="mt-3 text-xs font-mono text-emerald-400/80 bg-emerald-950/50 px-2 py-1 rounded border border-emerald-500/20">
            Growth Infrastructure
          </div>
        </div>
      </motion.div>

      {/* --- LAYER 3: The Growth Result (Massive Chart) --- */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[40vh] opacity-30"
        style={{ x: useSpring(mouseX, { stiffness: 10, damping: 20 }), y: useSpring(mouseY, { stiffness: 10, damping: 20 }) }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
          <defs>
            <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          
          {/* Animated Area Fill */}
          <motion.path 
            d="M 0 300 L 0 250 Q 100 240, 200 200 T 400 180 T 600 120 T 800 80 T 1000 20 L 1000 300 Z"
            fill="url(#chart-gradient)"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          
          {/* Animated Line */}
          <motion.path 
            d="M 0 250 Q 100 240, 200 200 T 400 180 T 600 120 T 800 80 T 1000 20"
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />

          {/* Data Points on Chart */}
          {[
            { cx: 200, cy: 200, delay: 1 },
            { cx: 400, cy: 180, delay: 1.5 },
            { cx: 600, cy: 120, delay: 2 },
            { cx: 800, cy: 80, delay: 2.5 },
            { cx: 1000, cy: 20, delay: 3 }
          ].map((point, i) => (
            <motion.circle 
              key={i}
              cx={point.cx} cy={point.cy} r="6" 
              fill="#fff"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: 1 }}
              transition={{ duration: 0.5, delay: point.delay }}
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          ))}
        </svg>

        {/* Floating Metrics */}
        <FloatingMetric 
          title="Conversion Rate" 
          value="+42.8%" 
          trend="up"
          className="bottom-[50%] left-[10%]"
          delay={2}
        />
        <FloatingMetric 
          title="Pipeline Velocity" 
          value="3.2x" 
          trend="up"
          className="bottom-[70%] left-[30%]"
          delay={2.5}
        />
        <FloatingMetric 
          title="CAC" 
          value="-28%" 
          trend="down"
          className="bottom-[30%] left-[50%]"
          delay={3}
        />
      </motion.div>

      {/* --- LAYER 4: Foreground Light Leaks --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
    </div>
  );
}

function FloatingMetric({ title, value, trend, className, delay }: { title: string, value: string, trend: 'up'|'down', className: string, delay: number }) {
  return (
    <motion.div 
      className={`absolute flex items-center gap-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
        {trend === 'up' ? <TrendingUp className="w-5 h-5" /> : <BarChart3 className="w-5 h-5" />}
      </div>
      <div>
        <div className="text-xs text-gray-400 font-medium">{title}</div>
        <div className={`text-lg font-bold ${trend === 'up' ? 'text-emerald-400' : 'text-blue-400'}`}>{value}</div>
      </div>
    </motion.div>
  );
}

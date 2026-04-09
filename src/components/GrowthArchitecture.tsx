import { motion } from "framer-motion";
import { Database, Zap, Target, Repeat, Cpu, Instagram, Mail, MessageCircle, Search } from "lucide-react";

const DataVisual = () => (
  <div className="w-full h-48 bg-white rounded-2xl border border-slate-200 p-5 flex items-end gap-3 overflow-hidden relative shadow-sm">
    <div className="absolute top-4 left-4 text-[10px] text-slate-500 font-mono uppercase">Performance Tracking</div>
    {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
      <motion.div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-md opacity-90"
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
      />
    ))}
  </div>
);

const AcqVisual = () => (
  <div className="w-full h-48 bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-center relative overflow-hidden shadow-sm">
    <div className="absolute top-4 left-4 text-[10px] text-slate-500 font-mono uppercase">Omnichannel Traffic</div>
    
    <motion.div animate={{ x: [0, 10, 0], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 right-12 w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center border border-pink-200 shadow-sm">
      <Instagram size={18} className="text-pink-500" />
    </motion.div>

    <motion.div animate={{ x: [0, -10, 0], y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-8 left-10 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center border border-green-200 shadow-sm">
      <MessageCircle size={18} className="text-green-500" />
    </motion.div>

    <motion.div animate={{ x: [0, 10, 0], y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-6 right-20 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200 shadow-sm">
      <Mail size={18} className="text-blue-500" />
    </motion.div>

    <motion.div animate={{ x: [0, -10, 0], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-10 left-16 w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center border border-purple-200 shadow-sm">
      <Search size={18} className="text-purple-500" />
    </motion.div>

    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full z-10 flex items-center justify-center shadow-lg shadow-blue-500/30 relative">
      <Target size={24} className="text-white" />
      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-blue-400 rounded-full" />
    </div>
  </div>
);

const ConvVisual = () => (
  <div className="w-full h-48 bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-center gap-4 shadow-sm relative">
    <div className="absolute top-4 left-4 text-[10px] text-slate-500 font-mono uppercase">A/B Testing</div>
    <motion.div whileHover={{ y: -5, scale: 1.02 }} className="w-1/2 h-full bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all">
      <div className="text-3xl font-black text-slate-400">A</div>
      <div className="text-xs text-slate-500 font-mono">2.4% CR</div>
    </motion.div>
    <motion.div whileHover={{ y: -5, scale: 1.02 }} className="w-1/2 h-full bg-blue-50 rounded-xl border border-blue-200 flex flex-col items-center justify-center gap-2 cursor-pointer shadow-sm transition-all">
      <div className="text-3xl font-black text-blue-600">B</div>
      <div className="text-xs text-emerald-600 font-mono font-bold">+4.8% CR</div>
    </motion.div>
  </div>
);

const AutoVisual = () => (
  <div className="w-full h-48 bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-center relative shadow-sm">
    <div className="absolute top-4 left-4 text-[10px] text-slate-500 font-mono uppercase">Email Automation</div>
    <div className="flex items-center gap-4 w-full justify-center">
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-12 h-12 bg-blue-100 rounded-xl border border-blue-200 flex items-center justify-center z-10"><Database size={20} className="text-blue-600" /></motion.div>
      <div className="w-12 h-1 bg-slate-200 relative overflow-hidden rounded-full">
        <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
      </div>
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, delay: 0.2, repeat: Infinity }} className="w-12 h-12 bg-emerald-100 rounded-xl border border-emerald-200 flex items-center justify-center z-10"><Repeat size={20} className="text-emerald-600" /></motion.div>
    </div>
  </div>
);

const steps = [
  {
    id: "01",
    title: "Data & Strategy",
    description: "We analyze your current performance, identify hidden bottlenecks, and build a clear roadmap to scale your revenue.",
    icon: Database,
    color: "from-blue-500 to-cyan-400",
    metrics: ["Performance Audit", "Growth Strategy", "Clear Tracking"],
    Visual: DataVisual
  },
  {
    id: "02",
    title: "Traffic Generation",
    description: "We launch highly targeted campaigns across social media, email, WhatsApp, and search to attract high-quality leads ready to buy.",
    icon: Zap,
    color: "from-blue-500 to-cyan-400",
    metrics: ["Social & Search Ads", "WhatsApp Marketing", "Email Campaigns"],
    Visual: AcqVisual
  },
  {
    id: "03",
    title: "Conversion Optimization",
    description: "We design fast, persuasive landing pages that turn your expensive website traffic into actual paying customers.",
    icon: Target,
    color: "from-blue-500 to-cyan-400",
    metrics: ["Landing Pages", "A/B Testing", "Higher ROI"],
    Visual: ConvVisual
  },
  {
    id: "04",
    title: "Automated Retention",
    description: "We build automated email and SMS systems that follow up with leads and keep customers coming back for more.",
    icon: Repeat,
    color: "from-blue-500 to-cyan-400",
    metrics: ["Email Automation", "Customer Loyalty", "Repeat Sales"],
    Visual: AutoVisual
  }
];

const techStack = [
  "OpenAI", "HubSpot", "Salesforce", "Google Cloud", "Meta Advanced API", "Segment", "Snowflake", "Vercel", "Next.js", "Figma", "Stripe", "Zapier"
];

export function GrowthArchitecture() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          {/* Header */}
          <div className="w-full mb-16 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Cpu size={14} />
              The Growth Engine
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight"
            >
              How we engineer <br className="hidden md:block" />
              <span className="text-blue-600">
                predictable revenue.
              </span>
            </motion.h2>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-md relative group mb-8 shrink-0">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <step.icon className="w-8 h-8 text-blue-600 relative z-10" />
                </div>

                {/* Animated Visual Card */}
                <div className="w-full mb-8">
                  <step.Visual />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-blue-600 mb-3 uppercase">
                    Phase {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm flex-1">{step.description}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {step.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-600 shadow-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Infinite Marquee */}
      <section className="border-y border-slate-200 bg-white py-10 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
        <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-8 text-center">Powered by enterprise-grade infrastructure</p>
        
        <div className="flex w-[200%] animate-[scroll_30s_linear_infinite]">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="flex-1 flex justify-center items-center px-8 min-w-[200px]">
              <span className="text-xl font-bold text-slate-400 hover:text-blue-600 transition-colors duration-300 cursor-default">
                {tech}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  );
}

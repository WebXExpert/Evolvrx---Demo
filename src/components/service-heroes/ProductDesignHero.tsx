import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

export function ProductDesignHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8">
            <Box className="w-3.5 h-3.5" /> Product Design
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Architecting <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">digital products.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10">
            From user flows to scalable design systems. We engineer products layer by layer, ensuring robust architecture and stunning aesthetics that scale automatically.
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20">
            Design Your Product
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1000px]">
          <div className="relative w-64 h-64 transform-style-3d rotate-x-[60deg] rotate-z-[-45deg]">
            {[
              { color: "bg-slate-800", delay: 0, z: 0, label: "Database" },
              { color: "bg-blue-600", delay: 0.5, z: 80, label: "Logic" },
              { color: "bg-cyan-400", delay: 1.0, z: 160, label: "UI Layer" }
            ].map((layer, i) => (
              <motion.div 
                key={i}
                initial={{ translateZ: 0, opacity: 0 }}
                animate={{ translateZ: layer.z, opacity: 0.9 }}
                transition={{ duration: 2, delay: layer.delay, repeat: Infinity, repeatType: "reverse" }}
                className={`absolute inset-0 ${layer.color} rounded-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.2)] border border-white/20 flex items-center justify-center`}
                style={{ transform: `translateZ(${layer.z}px)` }}
              >
                <span className="text-white font-bold tracking-widest uppercase text-sm transform rotate-x-[-60deg] rotate-z-[45deg]">{layer.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

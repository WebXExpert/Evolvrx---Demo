import { motion } from "framer-motion";
import { ArrowRight, SplitSquareHorizontal, Trophy } from "lucide-react";

export function LandingPagesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white border-b border-slate-200">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8">
            <SplitSquareHorizontal className="w-3.5 h-3.5" /> Landing Pages
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Built to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">convert clicks.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10">
            We build high-velocity landing pages with automated A/B testing baked in. Watch the algorithm automatically find the winning variant that maximizes your ROI.
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20">
            Build Your Page
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        <div className="relative h-[600px] hidden lg:flex items-center justify-center gap-6">
          {/* Variant A */}
          <motion.div animate={{ scale: [1, 0.95, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-64 h-[400px] bg-slate-50 border border-slate-200 rounded-2xl shadow-lg p-4 flex flex-col gap-4">
            <div className="text-xs font-bold text-slate-400 text-center uppercase">Variant A</div>
            <div className="w-full h-32 bg-slate-200 rounded-lg" />
            <div className="w-3/4 h-4 bg-slate-200 rounded" />
            <div className="w-full h-10 bg-slate-300 rounded-lg mt-auto" />
          </motion.div>
          {/* Variant B (Winner) */}
          <motion.div animate={{ scale: [0.95, 1.05, 0.95], borderColor: ["#e2e8f0", "#0ea5e9", "#e2e8f0"] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} className="w-64 h-[450px] bg-white border-2 border-cyan-400 rounded-2xl shadow-2xl p-4 flex flex-col gap-4 relative">
            <motion.div animate={{ opacity: [0, 1, 0], y: [10, 0, 10] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Trophy className="w-3 h-3" /> Winner (+42% CR)
            </motion.div>
            <div className="text-xs font-bold text-cyan-600 text-center uppercase mt-2">Variant B</div>
            <div className="w-full h-40 bg-blue-50 border border-blue-100 rounded-lg" />
            <div className="w-3/4 h-4 bg-slate-100 rounded" />
            <div className="w-full h-12 bg-blue-600 rounded-lg mt-auto flex items-center justify-center text-white text-xs font-bold">CTA Button</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

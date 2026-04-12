import { motion } from "framer-motion";
import { ArrowRight, Server, Shield, Globe } from "lucide-react";

export function EnterpriseSoftwareHero() {
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
            <Server className="w-4 h-4" /> Enterprise Software
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Secure, scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              infrastructure.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We engineer robust, enterprise-grade software solutions designed to handle massive data loads, ensure bank-level security, and integrate seamlessly with your legacy systems.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Discuss Architecture
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Server Rack / Command Center */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-15, 15, -15], rotateX: [10, -10, 10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md transform-style-3d"
          >
            
            {/* Main Server Rack */}
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.3)] border border-slate-700 p-6 flex flex-col gap-4 transform translate-z-[0px]">
              
              {/* Server Blade 1 */}
              <div className="w-full h-16 bg-slate-800 rounded-xl border border-slate-600 flex items-center px-4 justify-between relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-150" />
                </div>
                <div className="text-[10px] font-mono text-cyan-400">NODE_01_ACTIVE</div>
              </div>

              {/* Server Blade 2 */}
              <div className="w-full h-16 bg-slate-800 rounded-xl border border-slate-600 flex items-center px-4 justify-between relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-150" />
                </div>
                <div className="text-[10px] font-mono text-blue-400">DB_CLUSTER_SYNC</div>
              </div>

              {/* Server Blade 3 */}
              <div className="w-full h-16 bg-slate-800 rounded-xl border border-slate-600 flex items-center px-4 justify-between relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-150" />
                </div>
                <div className="text-[10px] font-mono text-emerald-400">API_GATEWAY_OK</div>
              </div>

            </div>

            {/* Floating Security Shield */}
            <motion.div 
              animate={{ z: [40, 80, 40], y: [-20, -40, -20] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-10 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 transform translate-z-[60px] flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">SOC2 Type II</div>
                <div className="text-xs text-emerald-600 font-bold">Secured</div>
              </div>
            </motion.div>

            {/* Floating Global Node Map */}
            <motion.div 
              animate={{ z: [60, 100, 60], x: [-20, -40, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-16 bottom-20 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.3)] border border-slate-700 transform translate-z-[80px] flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-slate-300 uppercase">Global Edge</span>
              </div>
              <div className="flex items-end gap-1 h-10">
                <motion.div animate={{ height: ["40%", "80%", "40%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 bg-cyan-500 rounded-t" />
                <motion.div animate={{ height: ["60%", "100%", "60%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-2 bg-blue-500 rounded-t" />
                <motion.div animate={{ height: ["30%", "70%", "30%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-2 bg-cyan-500 rounded-t" />
                <motion.div animate={{ height: ["80%", "40%", "80%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-2 bg-blue-500 rounded-t" />
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

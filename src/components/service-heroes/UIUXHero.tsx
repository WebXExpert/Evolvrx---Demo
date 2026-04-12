import { motion } from "framer-motion";
import { ArrowRight, PenTool, LayoutTemplate, MousePointer2 } from "lucide-react";

export function UIUXHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_100%)] pointer-events-none z-0" />

      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        
        {/* Left: Showstopper Visual (Order 1 on Desktop, 2 on Mobile) */}
        <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center perspective-[1200px]">
          
          <div className="relative w-full max-w-lg h-[500px] bg-white/60 backdrop-blur-3xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden transform-style-3d rotate-y-[10deg] rotate-x-[5deg]">
            
            {/* Browser Header - Premium Glass */}
            <div className="h-12 bg-white/40 backdrop-blur-md border-b border-white/60 flex items-center px-5 gap-2 relative z-30">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-400 shadow-inner border border-rose-500/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-inner border border-amber-500/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-inner border border-emerald-500/20" />
              </div>
              <div className="ml-4 flex-1 h-7 bg-white/50 rounded-md border border-white/60 flex items-center px-3">
                <div className="w-32 h-2 bg-slate-200/80 rounded-full" />
              </div>
            </div>
            
            {/* Scrolling Content Area */}
            <div className="relative h-[calc(100%-3rem)] bg-slate-50 overflow-hidden">
              <motion.div 
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full"
              >
                {/* We duplicate the content to make the scroll seamless */}
                {[0, 1].map((iteration) => (
                  <div key={iteration} className="relative w-full h-[800px]">
                    
                    {/* Wireframe Layer */}
                    <div className="absolute inset-0 p-6 space-y-8 opacity-60">
                      {/* Hero Wireframe */}
                      <div className="w-full h-48 bg-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 space-y-4">
                        <div className="w-3/4 h-6 bg-slate-300 rounded-lg" />
                        <div className="w-1/2 h-4 bg-slate-300 rounded-lg" />
                        <div className="w-32 h-10 bg-slate-300 rounded-full mt-4" />
                      </div>
                      
                      {/* Features Wireframe */}
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-32 bg-slate-200 rounded-xl p-4 flex flex-col items-center space-y-3">
                            <div className="w-10 h-10 bg-slate-300 rounded-full" />
                            <div className="w-full h-2 bg-slate-300 rounded" />
                            <div className="w-4/5 h-2 bg-slate-300 rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Content Wireframe */}
                      <div className="flex gap-6">
                        <div className="w-1/2 h-40 bg-slate-200 rounded-xl" />
                        <div className="w-1/2 space-y-3 py-2">
                          <div className="w-full h-4 bg-slate-300 rounded" />
                          <div className="w-5/6 h-4 bg-slate-300 rounded" />
                          <div className="w-full h-2 bg-slate-200 rounded mt-4" />
                          <div className="w-full h-2 bg-slate-200 rounded" />
                          <div className="w-3/4 h-2 bg-slate-200 rounded" />
                        </div>
                      </div>
                    </div>

                    {/* Real UI Layer (Fades In) */}
                    <motion.div 
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{ duration: 15, repeat: Infinity, times: [0, 0.2, 0.4, 0.8, 1], ease: "easeInOut" }}
                      className="absolute inset-0 p-6 space-y-8 bg-slate-50"
                    >
                      {/* Hero UI */}
                      <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex flex-col items-center justify-center p-6 space-y-4 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800')] opacity-20 mix-blend-overlay object-cover" />
                        <div className="w-3/4 h-6 bg-white/90 rounded-lg shadow-sm relative z-10" />
                        <div className="w-1/2 h-4 bg-white/70 rounded-lg shadow-sm relative z-10" />
                        <div className="w-32 h-10 bg-white text-blue-600 rounded-full mt-4 shadow-md relative z-10 flex items-center justify-center font-bold text-xs">Get Started</div>
                      </div>
                      
                      {/* Features UI */}
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-32 bg-white rounded-xl p-4 flex flex-col items-center space-y-3 shadow-md border border-slate-100">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner ${i === 1 ? 'bg-blue-100' : i === 2 ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                              <MousePointer2 className={`w-5 h-5 ${i === 1 ? 'text-blue-600' : i === 2 ? 'text-emerald-600' : 'text-rose-600'}`} />
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded" />
                            <div className="w-4/5 h-2 bg-slate-100 rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Content UI */}
                      <div className="flex gap-6">
                        <div className="w-1/2 h-40 rounded-xl overflow-hidden shadow-md">
                          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=500" alt="UI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="w-1/2 space-y-3 py-2">
                          <div className="w-full h-4 bg-slate-800 rounded shadow-sm" />
                          <div className="w-5/6 h-4 bg-slate-700 rounded shadow-sm" />
                          <div className="w-full h-2 bg-slate-300 rounded mt-4" />
                          <div className="w-full h-2 bg-slate-300 rounded" />
                          <div className="w-3/4 h-2 bg-slate-300 rounded" />
                        </div>
                      </div>
                    </motion.div>

                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Floating Cursor (Optional extra touch) */}
            <motion.div
              animate={{ 
                x: [100, 250, 150, 100], 
                y: [150, 200, 350, 150],
                scale: [1, 0.9, 1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-40 drop-shadow-xl pointer-events-none"
            >
              <MousePointer2 className="w-8 h-8 text-slate-900 fill-white" />
            </motion.div>
          </div>
        </div>

        {/* Right: Text (Order 2 on Desktop, 1 on Mobile) */}
        <div className="order-1 lg:order-2 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <PenTool className="w-4 h-4" /> UI/UX Design
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Interfaces that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              feel like magic.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We design intuitive, frictionless user experiences. Watch as wireframes automatically evolve into high-fidelity, conversion-optimized interfaces right before your eyes.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Design Your App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}

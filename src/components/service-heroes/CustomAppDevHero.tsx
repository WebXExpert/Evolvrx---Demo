import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Code, Layers } from "lucide-react";

export function CustomAppDevHero() {
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
            <Smartphone className="w-4 h-4" /> Custom App Development
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            From concept to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              App Store.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We build native and cross-platform mobile applications that users love. Scalable architecture, intuitive UX, and flawless performance on every device.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Build My App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Wireframe to High-Fi Phone */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div 
            animate={{ rotateY: [-15, 15, -15], rotateX: [5, -5, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
          >
            
            {/* Back Layer: Wireframe */}
            <motion.div 
              animate={{ z: [-40, -20, -40] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-[500px] border-2 border-blue-400/30 rounded-[3rem] transform translate-z-[-40px] p-4 flex flex-col gap-4 opacity-50"
            >
              <div className="w-full h-48 border-2 border-blue-400/30 rounded-2xl border-dashed" />
              <div className="w-3/4 h-6 border-2 border-blue-400/30 rounded border-dashed" />
              <div className="w-full h-4 border-2 border-blue-400/30 rounded border-dashed" />
              <div className="w-5/6 h-4 border-2 border-blue-400/30 rounded border-dashed" />
            </motion.div>

            {/* Front Layer: High-Fi Glassmorphic Phone */}
            <motion.div 
              animate={{ z: [40, 60, 40] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-[500px] bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_rgba(0,0,0,0.15)] border-8 border-white/80 p-2 transform translate-z-[40px] overflow-hidden"
            >
              <div className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden relative flex flex-col">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-400 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400')] opacity-20 mix-blend-overlay object-cover" />
                </div>
                <div className="p-4 flex-1 bg-white">
                  <div className="w-3/4 h-6 bg-slate-800 rounded mb-3" />
                  <div className="w-full h-2 bg-slate-200 rounded mb-2" />
                  <div className="w-5/6 h-2 bg-slate-200 rounded mb-6" />
                  <div className="w-full h-12 bg-blue-600 rounded-xl shadow-md mt-auto" />
                </div>
              </div>
            </motion.div>

            {/* Floating Code Snippet */}
            <motion.div 
              animate={{ z: [80, 120, 80], x: [-40, -60, -40] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-0 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl shadow-[0_24px_48px_rgba(0,0,0,0.2)] border border-slate-700 transform translate-z-[80px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-400">App.tsx</span>
              </div>
              <div className="font-mono text-[10px] text-cyan-200/80 space-y-1">
                <div>{'<NavigationContainer>'}</div>
                <div className="pl-2">{'<Stack.Navigator>'}</div>
                <div className="pl-4">{'<Stack.Screen'}</div>
                <div className="pl-6">{'name="Home"'}</div>
                <div className="pl-6">{'component={Home}'}</div>
                <div className="pl-4">{'>'}</div>
                <div className="pl-2">{'</Stack.Navigator>'}</div>
                <div>{'</NavigationContainer>'}</div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

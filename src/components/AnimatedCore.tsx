import { motion } from "framer-motion";

export function AnimatedCore() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none flex items-center justify-center">
      {/* Outer Glow */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Grid Lines (Simulated) */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" 
           style={{ backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Rotating Rings */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full border border-cyan-400/30 border-dashed"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-[300px] h-[300px] rounded-full border-2 border-blue-500/40 border-dotted"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-[200px] h-[200px] rounded-full border border-cyan-300/50"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Inner Core */}
      <motion.div 
        className="absolute w-32 h-32 rounded-full bg-cyan-400 blur-[20px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute w-16 h-16 rounded-full bg-white blur-[5px]" />
      
      {/* Core Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-200 rounded-full"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 250],
            y: [0, (Math.random() - 0.5) * 250],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

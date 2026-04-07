import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface FloatingNodeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FloatingNode({ children, className, delay = 0, duration = 4, yOffset = 15 }: FloatingNodeProps) {
  return (
    <motion.div
      className={cn("absolute z-10", className)}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center gap-3">
        {children}
      </div>
    </motion.div>
  );
}

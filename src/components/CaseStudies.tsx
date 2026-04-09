import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "Aura Commerce",
    category: "E-Commerce Scaling",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200",
    description: "Re-engineered their acquisition funnel and implemented predictive LTV bidding, resulting in record-breaking Q4 revenue.",
    metrics: [
      { label: "Revenue Growth", value: "+240%", icon: TrendingUp },
      { label: "CAC Reduction", value: "-32%", icon: DollarSign }
    ]
  },
  {
    id: 2,
    client: "Nexus SaaS",
    category: "B2B Acquisition",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    description: "Built a programmatic SEO engine and automated LinkedIn outreach system to fill their enterprise sales pipeline.",
    metrics: [
      { label: "Pipeline Generated", value: "$4.2M", icon: DollarSign },
      { label: "Demo Requests", value: "3x", icon: Users }
    ]
  },
  {
    id: 3,
    client: "FinFlow App",
    category: "Mobile App Growth",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: "Scaled user acquisition through algorithmic TikTok & Meta ads, paired with a frictionless onboarding UX overhaul.",
    metrics: [
      { label: "New Installs", value: "150k+", icon: ArrowUpRight },
      { label: "Cost Per Install", value: "$0.85", icon: Activity }
    ]
  },
  {
    id: 4,
    client: "Lumina Health",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    description: "Deployed a closed-loop marketing system connecting Google Ads directly to their CRM for offline conversion tracking.",
    metrics: [
      { label: "Lead Volume", value: "+185%", icon: Users },
      { label: "Close Rate", value: "42%", icon: TargetIcon }
    ]
  }
];

// Helper component for the target icon since it wasn't imported directly above to avoid conflicts
function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default to first item expanded

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
      </div>

      <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Activity size={14} />
              The Proof
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
            >
              Engineered <span className="text-blue-600">Results.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-md text-base md:text-lg"
          >
            Explore how our growth systems have transformed acquisition and revenue for our partners.
          </motion.p>
        </div>

        {/* Interactive Image Showcase */}
        <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[600px] gap-4">
          {caseStudies.map((study, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={study.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                animate={{ 
                  flex: isHovered ? (window.innerWidth > 768 ? 3 : 3) : 1,
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="relative rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 md:flex-shrink shadow-lg"
                style={{ flexBasis: isHovered ? 'auto' : '100px' }}
              >
                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  animate={{ scale: isHovered ? 1 : 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img 
                    src={study.image} 
                    alt={study.client} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent' : 'bg-slate-900/60 group-hover:bg-slate-900/40'}`} />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  
                  {/* Vertical Title (when collapsed) */}
                  <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 transition-opacity duration-300 whitespace-nowrap ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <h3 className="text-white font-bold text-xl md:-rotate-90 md:origin-bottom-left tracking-wider">
                      {study.client}
                    </h3>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="w-full max-w-2xl"
                      >
                        <div className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-2">
                          {study.category}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                          {study.client}
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base mb-8 line-clamp-2 md:line-clamp-none max-w-lg">
                          {study.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="flex flex-wrap gap-4 md:gap-8 mb-8">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
                              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <metric.icon className="w-5 h-5 text-blue-400" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-white leading-none mb-1">{metric.value}</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{metric.label}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors group/btn">
                          Read Case Study 
                          <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

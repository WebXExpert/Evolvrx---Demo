import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Dominate search results with technical SEO, programmatic content, and high-authority link building. We build organic engines that compound over time.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
    tags: ["Technical SEO", "Programmatic", "Content Strategy"]
  },
  {
    id: "paid",
    title: "Performance Advertising",
    description: "Algorithmic media buying across Google, Meta, and LinkedIn to acquire customers at target CAC. We scale what works and cut what doesn't.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    tags: ["Google Ads", "Meta Ads", "LinkedIn B2B"]
  },
  {
    id: "social",
    title: "Social Media & Community",
    description: "Building engaged audiences and brand authority through viral short-form content and community management.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    tags: ["Short-form Video", "Community Management", "Brand Voice"]
  },
  {
    id: "email",
    title: "Lifecycle & Email",
    description: "Automated retention systems using email and SMS to maximize Customer Lifetime Value (LTV) and drive repeat purchases.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    tags: ["Klaviyo", "SMS Marketing", "Retention Flows"]
  }
];

export function CoreServices() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Core Digital <br className="hidden md:block" />
            <span className="text-blue-600">Marketing Services.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            We don't just run ads. We build comprehensive digital ecosystems that capture demand, nurture leads, and drive continuous revenue.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 min-h-[600px]">
          {/* Left: Interactive List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
            {services.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className={`group cursor-pointer p-8 rounded-3xl transition-all duration-500 border-2 ${
                  activeService.id === service.id 
                    ? 'bg-slate-50 border-blue-100 shadow-lg shadow-blue-900/5' 
                    : 'bg-transparent border-transparent hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                    activeService.id === service.id ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {service.title}
                  </h3>
                  <ArrowRight className={`transition-all duration-300 ${
                    activeService.id === service.id ? 'text-blue-600 translate-x-0 opacity-100' : 'text-slate-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                  }`} />
                </div>
                
                <AnimatePresence mode="wait">
                  {activeService.id === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500 shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Image Display */}
          <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl min-h-[400px] lg:min-h-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

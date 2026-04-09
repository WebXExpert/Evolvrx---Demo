import { Search, Moon, Grid3X3, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const servicesData = [
  {
    id: "growth",
    title: "Growth Marketing",
    description: "Data-driven acquisition strategies to scale your user base predictably and sustainably.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    links: ["Search Engine Optimization (SEO)", "Content Marketing", "Social Media Management", "Lifecycle Marketing (Email & WhatsApp)", "Online Reputation Management (ORM)"]
  },
  {
    id: "design",
    title: "Design & Development",
    description: "High-performance digital experiences and interfaces engineered for maximum conversion.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400",
    links: ["Website Design & Development", "UI/UX Design", "Landing Page Design", "Product Design & Development", "Graphic & Brand Design"]
  },
  {
    id: "paid",
    title: "Paid Media & Advertising",
    description: "ROI-focused ad campaigns across search and social channels to drive immediate results.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=400",
    links: ["Search Engine Marketing (SEM)", "Google Ads", "Social Media Advertising"]
  },
  {
    id: "video",
    title: "Video Editing",
    description: "Engaging visual content optimized for modern social platforms and short-form consumption.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=400",
    links: ["Shorts & Reels Editing", "YouTube Video Editing", "UGC Videos", "Color Grading", "Subtitles & Captions"]
  },
  {
    id: "performance",
    title: "Performance & Strategy",
    description: "Deep analytics and conversion rate optimization to maximize your revenue potential.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    links: ["Lead Generation Services", "Conversion Rate Optimization (CRO)", "Data Analytics & Reporting", "Marketing Consultancy"]
  },
  {
    id: "ai",
    title: "AI & Custom Solutions",
    description: "Next-generation automation and artificial intelligence tools built for your enterprise.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    links: ["AI Chatbots & Assistants", "Workflow Automations", "Custom App Development", "Enterprise Software", "Predictive AI Models"]
  }
];

export function Navbar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 w-full"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
          <span className="text-white font-bold text-xl tracking-tighter">Ev</span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-900 font-bold tracking-[0.2em] text-sm leading-none">EVOLVRX</span>
          <span className="text-slate-500 text-[9px] font-medium tracking-[0.3em] leading-none mt-1.5">DIGITAL</span>
        </div>
      </div>

      {/* Center Nav */}
      <div className="hidden md:flex items-center bg-white/60 border border-slate-200/60 rounded-full px-1.5 py-1.5 backdrop-blur-xl shadow-sm">
        {['Home', 'About', 'Services', 'Growth Lab', 'Blog'].map((item) => (
          item === 'Services' ? (
            <div 
              key={item} 
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a 
                href="#" 
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  isServicesHovered 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                {item}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
              </a>
              
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[900px] cursor-default"
                  >
                    <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-6 flex gap-6 relative overflow-hidden min-h-[420px]">
                      {/* Decorative background element */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                      
                      {/* Left Column: L2 Categories */}
                      <div className="w-1/3 border-r border-slate-100 pr-4 flex flex-col gap-1 relative z-10">
                        <h4 className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-3 px-4">
                          Capabilities
                        </h4>
                        {servicesData.map((category, idx) => (
                          <button 
                            key={category.id}
                            onMouseEnter={() => setActiveCategory(idx)}
                            className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between group ${
                              activeCategory === idx 
                                ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100/50' 
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                            }`}
                          >
                            {category.title}
                            <ChevronDown size={14} className={`-rotate-90 transition-transform duration-300 ${activeCategory === idx ? 'text-blue-500 translate-x-1' : 'text-transparent group-hover:text-slate-400'}`} />
                          </button>
                        ))}
                      </div>

                      {/* Center Column: L3 Links */}
                      <div className="w-1/3 px-2 relative z-10">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="h-full flex flex-col"
                          >
                            <h4 className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-4 px-3">
                              {servicesData[activeCategory].title} Services
                            </h4>
                            <ul className="space-y-1">
                              {servicesData[activeCategory].links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a href="#" className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 block group flex items-center justify-between">
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Right Column: Image & Description */}
                      <div className="w-1/3 pl-4 relative z-10 flex flex-col">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="h-full flex flex-col"
                          >
                            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-inner group">
                              <img 
                                src={servicesData[activeCategory].image} 
                                alt={servicesData[activeCategory].title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white text-xs font-medium flex items-center gap-1">
                                  Explore <ArrowRight size={12} />
                                </span>
                              </div>
                            </div>
                            <h5 className="font-bold text-slate-900 mb-2 text-base">{servicesData[activeCategory].title}</h5>
                            <p className="text-sm text-slate-500 leading-relaxed flex-1">
                              {servicesData[activeCategory].description}
                            </p>
                            <button className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all w-fit">
                              View Case Studies <ArrowRight size={14} />
                            </button>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <a 
              key={item} 
              href="#" 
              className="relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
            >
              {item}
            </a>
          )
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
          <Search size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
          <Moon size={18} />
        </button>
        <div className="w-px h-4 bg-slate-200 mx-2" />
        <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
          <Grid3X3 size={16} />
          <span>Menu</span>
        </button>
      </div>
    </motion.nav>
  );
}

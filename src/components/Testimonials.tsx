import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "EVOLVRX didn't just run our ads; they completely rebuilt our tracking and attribution. We scaled our ARR by 320% in 8 months while actually lowering our CAC.",
    author: "Sarah Jenkins",
    role: "CMO, Aura Commerce",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    quote: "The programmatic SEO engine they built for us generates more qualified enterprise leads in a week than our previous agency did in a quarter.",
    author: "Marcus Chen",
    role: "VP Growth, Nexus SaaS",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    quote: "Their approach to conversion architecture is unmatched. The A/B testing framework they implemented increased our landing page conversion rate by 4.8% absolutely.",
    author: "Elena Rodriguez",
    role: "Founder, FinFlow App",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    quote: "Finally, an agency that understands data engineering. They connected our fragmented CRM and ad platforms into a single, predictable revenue engine.",
    author: "David Thompson",
    role: "Director of Marketing, Lumina Health",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="w-full px-8 md:px-16 lg:px-24 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6"
        >
          <Star size={14} className="fill-blue-700" />
          Client Success
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Don't just take our word for it.
        </motion.h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks for smooth fading on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] py-4">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[400px] md:w-[500px] shrink-0 mx-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-100 mb-6" />
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

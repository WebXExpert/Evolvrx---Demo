import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Death of Traditional Attribution: Why LTV is the Only Metric that Matters",
    category: "Data & Analytics",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "How We Scaled a B2B SaaS from $1M to $5M ARR using Programmatic SEO",
    category: "Case Study",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Algorithmic Media Buying: Beating the Meta Algorithm in 2027",
    category: "Performance Ads",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  }
];

export function Blog() {
  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="w-full px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <BookOpen size={14} />
              Insights
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Growth <span className="text-blue-600">Engineering.</span>
            </h2>
            <p className="text-slate-500 max-w-md text-lg">
              Tactics, engineering breakdowns, and case studies from the frontier of digital growth.
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group">
            View All Articles
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer bg-white rounded-3xl p-4 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3 font-medium">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-4">
                  {post.title}
                </h3>

                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Read Article
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

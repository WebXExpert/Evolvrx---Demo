import { motion } from "framer-motion";
import { ArrowRight, Share2, Users, Heart, MessageCircle } from "lucide-react";

export function SocialAdsHero() {
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
            <Share2 className="w-4 h-4" /> Social Media Ads
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Scroll-stopping <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              creatives.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} 
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            We design and deploy high-converting ad creatives across Meta, TikTok, and LinkedIn. Hyper-targeted campaigns that turn passive scrollers into active buyers.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.24)]"
          >
            Launch Social Ads
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Showstopper Visual: 3D Rotating Ad Carousel */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
            
            {/* Central Targeting Node */}
            <motion.div 
              animate={{ rotateY: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full transform-style-3d flex items-center justify-center"
            >
              {/* Ad Card 1 (Front) */}
              <div className="absolute w-64 h-80 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/80 p-4 transform translate-z-[150px] flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full" />
                  <div>
                    <div className="w-16 h-2 bg-slate-200 rounded mb-1" />
                    <div className="text-[8px] text-slate-400">Sponsored</div>
                  </div>
                </div>
                <div className="w-full flex-1 bg-slate-100 rounded-xl overflow-hidden relative mb-3">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Ad" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm py-1.5 px-3 rounded-lg flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-900">Shop Now</span>
                    <ArrowRight className="w-3 h-3 text-slate-900" />
                  </div>
                </div>
                <div className="flex justify-between px-2">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  <MessageCircle className="w-5 h-5 text-slate-300" />
                  <Share2 className="w-5 h-5 text-slate-300" />
                </div>
              </div>

              {/* Ad Card 2 (Back Left) */}
              <div className="absolute w-64 h-80 bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-white/40 p-4 transform rotate-y-[-120deg] translate-z-[150px] flex flex-col opacity-60">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full" />
                  <div className="w-16 h-2 bg-slate-200 rounded" />
                </div>
                <div className="w-full flex-1 bg-slate-200 rounded-xl mb-3" />
              </div>

              {/* Ad Card 3 (Back Right) */}
              <div className="absolute w-64 h-80 bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-white/40 p-4 transform rotate-y-[120deg] translate-z-[150px] flex flex-col opacity-60">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full" />
                  <div className="w-16 h-2 bg-slate-200 rounded" />
                </div>
                <div className="w-full flex-1 bg-slate-200 rounded-xl mb-3" />
              </div>
            </motion.div>

            {/* Floating Targeting UI */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] border border-white/60 flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Lookalike Audience</div>
                <div className="text-xs text-emerald-500 font-bold">High Match</div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

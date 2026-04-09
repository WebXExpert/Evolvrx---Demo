import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowRight, CheckCircle2 } from "lucide-react";

export function BookingCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-50/80 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 overflow-hidden relative">
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50 pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            
            {/* Left: Copy & Value Prop */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6"
              >
                <Calendar size={14} />
                Free Strategy Session
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
              >
                Ready to engineer your <span className="text-blue-600">growth system?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-lg mb-8"
              >
                Book a free 45-minute growth mapping call. We'll audit your current acquisition funnel and show you exactly where you're leaving money on the table.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                {[
                  "Complete audit of your current ad accounts",
                  "Technical SEO & site speed analysis",
                  "Custom 90-day growth roadmap",
                  "No commitment, pure value"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Mock Booking UI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Growth Mapping Call</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-1 font-medium">
                      <span className="flex items-center gap-1"><Clock size={14} /> 45 min</span>
                      <span className="flex items-center gap-1"><Video size={14} /> Google Meet</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20">
                    Schedule Your Call
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium">
                    Spots are limited to 5 new audits per week.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

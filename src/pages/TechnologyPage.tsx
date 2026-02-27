import { motion } from 'framer-motion';
import { Terminal, Database, Target, Zap, ArrowRight, Play, BarChart3, CheckCircle2 } from 'lucide-react';

export function TechnologyPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section 1: Introduction & DSP/CDP */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-8"
        >
          <div>
            <span className="text-secondary-light font-bold tracking-wider uppercase text-sm mb-4 block">Our Technology</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              World-class advertising technology to drive <span className="text-jc-teal">e-commerce sales</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              JointCommerce is the leading cannabis consumer data and digital ad tech platform helping cannabis companies drive online sales with measurable results.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-jc-teal/40 transition-colors">
               <div className="absolute top-0 right-0 w-32 h-32 bg-jc-teal/10 blur-[40px] rounded-full group-hover:bg-jc-teal/20 transition-colors" />
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                     <Database className="w-5 h-5 text-jc-teal" /> DSP & CDP Integration
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                     Combining our advanced <strong>Demand Side Platform (DSP)</strong> with a proprietary <strong>Consumer Data Platform (CDP)</strong>, we maximize advertising effectiveness, delivering measurable results and a strong return on investment (ROI).
                  </p>
               </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-jc-teal/40 transition-colors">
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                     <Target className="w-5 h-5 text-jc-teal" /> Programmatic Targeting
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                     Our programmatic approach ensures precise audience targeting across multiple channels, including display advertising, video, OTT, connected TV, and more, amplifying your online marketing presence.
                  </p>
               </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-jc-teal/40 transition-colors">
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                     <BarChart3 className="w-5 h-5 text-jc-teal" /> Predictive Bidding
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                     Predictive bidding accurately forecasts cannabis shopper engagement, conversion, and average order value, allowing us to bid the right price for each ad inventory to reach your audience.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full max-w-xl"
        >
          {/* Abstract Dashboard Mockup */}
          <div className="relative rounded-3xl bg-black/60 border border-jc-teal/30 p-4 shadow-[0_0_50px_rgba(0,163,143,0.15)] backdrop-blur-xl aspect-square md:aspect-[4/3] flex flex-col hidden sm:flex">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>
               <div className="w-full h-6 bg-white/5 rounded-md flex px-2 items-center mx-4">
                  <div className="w-32 h-2 rounded-full bg-white/20" />
               </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
               <div className="col-span-2 space-y-4">
                  <div className="h-32 bg-gradient-to-br from-jc-teal/20 to-[#0efbba]/5 rounded-xl border border-jc-teal/20 p-4 flex flex-col justify-end">
                     <div className="w-full h-1/2 flex items-end gap-2">
                        {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                           <motion.div 
                             key={i} 
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             transition={{ duration: 1, delay: i * 0.1 }}
                             className="flex-1 bg-jc-teal/80 rounded-sm"
                           />
                        ))}
                     </div>
                  </div>
                  <div className="h-44 bg-white/5 rounded-xl border border-white/10 p-4 relative overflow-hidden">
                     <div className="absolute top-4 left-4 w-1/3 h-4 bg-white/20 rounded-full mb-4" />
                     <div className="absolute top-12 left-4 w-1/2 h-3 bg-white/10 rounded-full" />
                     <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: '-100%' }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                     />
                  </div>
               </div>
               <div className="col-span-1 space-y-4">
                  <div className="h-24 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-4">
                     <div className="w-16 h-16 rounded-full border-4 border-jc-teal/30 border-t-jc-teal animate-spin" />
                  </div>
                  <div className="h-48 bg-white/5 rounded-xl border border-white/10 flex flex-col space-y-3 p-4">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-full h-8 bg-white/5 rounded flex items-center px-2">
                           <div className="w-4 h-4 rounded-sm bg-jc-teal/50 mr-2" />
                           <div className="w-16 h-2 rounded-full border bg-white/20" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 2: dCPM & CTA */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="lg:w-1/2 w-full relative"
        >
          {/* Abstract Image container matching the provided style */}
          <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 shadow-2xl group bg-white/5 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-jc-teal/10 to-transparent" />
             <div className="absolute inset-0 backdrop-blur-[2px]" />
             <Target className="w-32 h-32 text-jc-teal/20 absolute" />
             
             {/* Overlay mini-card representing the dashboard stats overlay */}
             <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-[#0a0f0f]/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
             >
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                   <span className="text-white font-bold text-sm">Click-through Rate</span>
                   <span className="text-jc-teal font-black">+24.8%</span>
                </div>
                <div className="flex items-end gap-2 h-16">
                  {[20, 45, 30, 75, 50, 95, 60, 100].map((h, i) => (
                     <div key={i} className="flex-1 bg-white/10 rounded-t-sm relative group-hover:bg-white/20 transition-colors">
                        <motion.div 
                           initial={{ height: 0 }}
                           animate={{ height: `${h}%` }}
                           transition={{ duration: 1, delay: i * 0.1 }}
                           className="absolute bottom-0 w-full bg-jc-teal rounded-t-sm"
                        />
                     </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-[#0efbba] text-[#0a0f0f] flex items-center justify-center font-bold">Buy</div>
                      <span className="text-white/80 text-sm font-medium">Direct Placement</span>
                   </div>
                   <CheckCircle2 className="w-5 h-5 text-jc-teal" />
                </div>
             </motion.div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="lg:w-1/2 space-y-10"
        >
           <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                 Utilizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-jc-teal to-[#0efbba]">dynamic CPM (dCPM)</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                 Our bid strategy wins every time, serving ads high on the publisher page and increasing in-view rate and click-through opportunities for cannabis advertisers.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                 We specialize in running programmatic digital advertising campaigns, helping you find new customers, and boosting overall sales growth from your existing customer base.
              </p>
           </div>

           <div className="space-y-4 pt-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold rounded-xl transition-all border border-white/10 shadow-lg text-lg flex justify-center items-center gap-2">
                 Book a Meeting
              </button>
              
              <div className="text-center sm:text-left py-4">
                 <span className="text-white/60 font-medium text-sm tracking-wider uppercase">Get Started with</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <button className="px-6 py-4 bg-transparent border-2 border-white/20 hover:border-jc-teal text-white font-semibold rounded-xl transition-all group flex justify-center items-center gap-2">
                    Managed-Service <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-jc-teal" />
                 </button>
                 <button className="px-6 py-4 bg-transparent border-2 border-white/20 hover:border-jc-teal text-white font-semibold rounded-xl transition-all group flex justify-center items-center gap-2">
                    Self-Service <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-jc-teal" />
                 </button>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ijijijli from '../static/marketing/videos/ijijijli.mp4';
import investing from '../static/marketing/videos/investing.mp4';

// Dummy list of publishers for the marquee
const publishers = [
  "ESPN", "CBS", "ABC", "Vevo", "HGTV", "Rolling Stone", "Complex", "Vice", "Bleacher Report", "Hulu"
];

export function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
         <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none select-none -z-10"
         >
            {/* Massive Abstract Asterisk/Leaf Graphic Background */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
               <path d="M45 0h10v40l34.6-20 5 8.6-34.6 20 34.6 20-5 8.6-34.6-20v40H45v-40l-34.6 20-5-8.6 34.6-20-34.6-20 5-8.6 34.6 20V0z"/>
            </svg>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
               Real Results / Case <br className="hidden md:block" /> Studies
            </h1>
            <p className="text-lg text-white/70 font-medium">
               Private inventory marketplace of cannabis-compliant website and app publishers
            </p>
         </motion.div>
      </div>

      {/* Publisher Marquee */}
      <div className="w-full bg-black/40 border-y border-white/5 py-8 mb-24 relative overflow-hidden flex">
         <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex items-center gap-16 whitespace-nowrap px-8"
         >
            {[...publishers, ...publishers].map((pub, i) => (
               <span key={i} className="text-xl md:text-3xl font-black text-white/40 uppercase tracking-widest font-mono">
                  {pub}
               </span>
            ))}
         </motion.div>
         {/* Gradients to fade edges */}
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-jc-dark to-transparent" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-jc-dark to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Real Results</h2>
            <div className="w-24 h-1 bg-jc-teal mx-auto rounded-full" />
         </div>

         {/* Stats Container 1 */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 group"
            >
               <div className="aspect-[4/3] bg-black relative overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-jc-teal/10 group-hover:bg-jc-teal/0 transition-colors z-10" />
                  <video 
                     src={ijijijli} 
                     autoPlay 
                     muted 
                     loop 
                     playsInline 
                     className="w-full h-full object-cover rounded-2xl border border-white/20 shadow-2xl scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
               </div>
               <div className="p-8 md:p-12 bg-white flex flex-col sm:flex-row justify-between gap-8 h-full">
                  <div className="space-y-2 relative">
                     <div className="absolute -top-12 left-0 w-8 h-1 bg-jc-teal" />
                     <h3 className="text-4xl lg:text-5xl font-light text-[#20222a] tracking-tight">25<span className="font-bold">x+</span></h3>
                     <p className="text-[#20222a]/70 font-medium text-sm lg:text-base leading-tight">Return on ad<br/>spend</p>
                  </div>
                  <div className="space-y-2 relative">
                     <div className="absolute -top-12 left-0 w-8 h-1 bg-jc-teal" />
                     <h3 className="text-4xl lg:text-5xl font-light text-[#20222a] tracking-tight">&lt;$<span className="font-bold">5</span></h3>
                     <p className="text-[#20222a]/70 font-medium text-sm lg:text-base leading-tight">Cost Per<br/>Acquisition</p>
                  </div>
                  <div className="space-y-2 relative">
                     <div className="absolute -top-12 left-0 w-8 h-1 bg-jc-teal" />
                     <h3 className="text-4xl lg:text-5xl font-light text-[#20222a] tracking-tight">1,500<span className="font-bold">+</span></h3>
                     <p className="text-[#20222a]/70 font-medium text-sm lg:text-base leading-tight max-w-[140px]">Online Sales<br/>Conversions in first<br/>3-months</p>
                  </div>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 group"
            >
               <div className="aspect-[4/3] bg-black relative overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-jc-teal/10 group-hover:bg-jc-teal/0 transition-colors z-10" />
                  <video 
                     src={investing} 
                     autoPlay 
                     muted 
                     loop 
                     playsInline 
                     className="w-full h-full object-cover rounded-2xl border border-white/20 shadow-2xl scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
               </div>
               <div className="p-8 md:p-12 bg-white flex flex-col sm:flex-row justify-between gap-8 h-full">
                  <div className="space-y-2 relative">
                     <div className="absolute -top-12 left-0 w-8 h-1 bg-[#0efbba]" />
                     <h3 className="text-4xl lg:text-5xl font-light text-[#20222a] tracking-tight">10<span className="font-bold">x+</span></h3>
                     <p className="text-[#20222a]/70 font-medium text-sm lg:text-base leading-tight">Return on ad<br/>spend</p>
                  </div>
                  <div className="space-y-2 relative">
                     <div className="absolute -top-12 left-0 w-8 h-1 bg-[#0efbba]" />
                     <h3 className="text-4xl lg:text-5xl font-light text-[#20222a] tracking-tight">&lt;$<span className="font-bold">5</span></h3>
                     <p className="text-[#20222a]/70 font-medium text-sm lg:text-base leading-tight">Cost Per<br/>Acquisition</p>
                  </div>
                  <div className="space-y-2 relative">
                     <div className="absolute -top-12 left-0 w-8 h-1 bg-[#0efbba]" />
                     <h3 className="text-4xl lg:text-5xl font-light text-[#20222a] tracking-tight">28<span className="font-bold">%</span></h3>
                     <p className="text-[#20222a]/70 font-medium text-sm lg:text-base leading-tight max-w-[140px]">Increase in new<br/>customers</p>
                  </div>
               </div>
            </motion.div>
         </div>

         {/* CTA Section */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
         >
            <button className="px-10 py-5 bg-jc-teal hover:bg-white text-jc-dark font-black tracking-wide uppercase text-sm lg:text-base rounded-full transition-colors flex items-center gap-3 group shadow-[0_0_30px_rgba(0,163,143,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
               Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
         </motion.div>
      </div>

    </div>
  );
}

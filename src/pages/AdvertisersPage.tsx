import { motion } from 'framer-motion';
import { Target, Eye, Globe2, ScanFace, CheckCircle2 } from 'lucide-react';

export function AdvertisersPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-secondary-light font-bold tracking-wider uppercase text-sm mb-4 block">For Advertisers</span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
          Extended Audience <span className="text-jc-teal">Activation</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
          Reach verified A21+ discovery-driven audiences across premium publisher environments with compliant deployment and performance visibility.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-xl border border-jc-teal/20 p-10 lg:p-14 rounded-3xl"
        >
           <h2 className="text-2xl font-bold text-white mb-6">Activation Attributes:</h2>
           <ul className="space-y-6">
              {[
                 { icon: Eye, text: "100% viewable impression standards" },
                 { icon: Globe2, text: "URL & app-level transparency" },
                 { icon: Target, text: "Geo-targeted deployment" },
                 { icon: ScanFace, text: "Cross-device visibility" }
              ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-white/90 font-medium text-lg">
                    <div className="w-10 h-10 rounded-full bg-jc-teal/15 flex items-center justify-center border border-jc-teal/30">
                       <item.icon className="w-5 h-5 text-jc-teal" />
                    </div>
                    {item.text}
                 </li>
              ))}
           </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
           <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-jc-teal flex-shrink-0 mt-1" />
              <div>
                 <h3 className="text-2xl font-bold text-white mb-2">Ancillary Advertisers</h3>
                 <p className="text-white/70 leading-relaxed text-lg">
                    Deploy audience activation for non-endemic brands seeking to reach a highly engaged, verified adult demographic.
                 </p>
              </div>
           </div>
           
           <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-jc-teal flex-shrink-0 mt-1" />
              <div>
                 <h3 className="text-2xl font-bold text-white mb-2">Performance-Driven</h3>
                 <p className="text-white/70 leading-relaxed text-lg">
                    Focus on measurable ROI with transparent reporting capabilities in regulated environments.
                 </p>
              </div>
           </div>
           
           <button className="mt-8 px-8 py-4 bg-jc-teal text-jc-dark font-bold text-lg rounded-full hover:bg-white transition-colors duration-300 shadow-lg shadow-jc-teal/20">
              Access The Network
           </button>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Database, Network, BarChart4 } from 'lucide-react';

export function EnterprisePage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <span className="text-jc-teal font-bold tracking-wider uppercase text-sm mb-4 block">For Enterprise</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
               Built for Scaled Operators <br />
               & <span className="text-jc-teal">National Brands.</span>
            </h1>
         </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[
            { icon: Globe, title: "Multi-market Governance", desc: "Manage compliance and activation rules across distinct state and local regulatory markets from a single vantage point." },
            { icon: Network, title: "Cross-device Dashboards", desc: "Unified analytics ensuring visibility whether customers discover you on mobile, desktop, or connected TV." },
            { icon: Database, title: "Integration Support", desc: "Dedicated engineering resources to align JointCommerce routing with your massive-scale POS and ERP systems." },
            { icon: ShieldCheck, title: "Co-op Coordination", desc: "Streamlined financial clearing and attribution tracking for multi-party brand/retailer funding agreements." },
            { icon: BarChart4, title: "Advanced Visibility", desc: "Deep-dive reporting, raw data exports, and custom KPI tracking built for enterprise intelligence teams." },
         ].map((feature, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="bg-[#0a0f0f] border border-white/10 p-8 rounded-[2rem] hover:border-jc-teal/40 transition-colors group"
            >
               <div className="w-14 h-14 bg-jc-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-jc-teal" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
               <p className="text-white/70 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
         ))}
         
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-jc-teal border border-jc-teal p-8 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(0,163,143,0.2)]"
         >
            <h3 className="text-2xl font-bold text-jc-dark mb-4 drop-shadow-sm">Ready to scale?</h3>
            <p className="text-jc-dark/80 font-semibold mb-8">Discuss custom enterprise architecture requirements with our solutions team.</p>
            <button className="w-full py-4 bg-jc-dark text-white rounded-xl font-bold hover:bg-black transition-colors shadow-lg shadow-black/20">
               Contact Solutions
            </button>
         </motion.div>
      </div>
    </div>
  );
}

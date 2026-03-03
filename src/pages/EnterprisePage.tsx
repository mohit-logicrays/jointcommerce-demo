import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Database, Network, BarChart4 } from 'lucide-react';

export function EnterprisePage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <span className="text-jc-teal font-bold tracking-wider uppercase text-sm mb-4 block">For Enterprise</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6">
               Built for Scaled Operators <br />
               & National Brands.
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
               className="bg-white border border-gray-200 p-8 rounded-[2rem] hover:border-jc-teal/40 hover:shadow-md transition-all group shadow-sm"
            >
               <div className="w-14 h-14 bg-jc-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-jc-teal" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
               <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
         ))}
         
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-jc-teal border border-jc-teal p-8 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-md"
         >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to scale?</h3>
            <p className="text-white/80 font-semibold mb-8">Discuss custom enterprise architecture requirements with our solutions team.</p>
            <button className="w-full py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-sm">
               Contact Solutions
            </button>
         </motion.div>
      </div>
    </div>
    </div>
  );
}

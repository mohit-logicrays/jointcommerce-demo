import { motion } from 'framer-motion';
import { ArrowRight, Server, Activity, ShieldCheck, Link, Target } from 'lucide-react';

export function PlatformPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Discovery <span className="text-jc-teal">Infrastructure</span></h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Built for performance-driven advertisers operating in regulated environments. JointCommerce is the platform powering discovery-to-commerce activation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Server, title: 'Premium Publisher Activation', desc: 'Activate across curated, high-quality publisher environments.' },
          { icon: Link, title: 'Flexible Routing', desc: 'Route customers exactly where they need to go.' },
          { icon: Link, title: 'Marketplace-Compatible', desc: 'Integrate seamlessly with marketplace logic.' },
          { icon: ShieldCheck, title: 'Direct Purchase Enablement', desc: 'Frictionless checkout on JointCommerce.' },
          { icon: Activity, title: 'Real-Time Reporting', desc: 'Actionable insights, instantly visible.' },
          { icon: Target, title: 'Co-Op Framework', desc: 'Brand-funded activation capabilities.' },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-jc-teal/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-jc-teal/20 flex items-center justify-center mb-6">
              <feature.icon className="w-6 h-6 text-jc-teal" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-white/70 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 bg-jc-teal p-12 rounded-3xl flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,163,143,0.3)]"
      >
        <h2 className="text-3xl font-extrabold text-jc-dark mb-4">Activation Programs Available</h2>
        <p className="text-jc-dark/80 max-w-2xl font-medium mb-8">
          Explore our suite of specialized activation tools designed to capture high-intent audiences and drive measurable online sales.
        </p>
        <button className="h-[56px] px-8 rounded-full bg-jc-dark text-white font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg group">
          Explore Advertiser Access <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
}

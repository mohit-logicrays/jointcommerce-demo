import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Store, Globe, Target } from 'lucide-react';

export function BrandsPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-jc-teal font-bold tracking-wider uppercase text-sm mb-4 block">For Brands</span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Drive Retail Sell-Through With<br />
          <span className="text-jc-teal">Measurable Revenue Performance.</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0a0f0f] p-8 md:p-12 rounded-3xl border border-jc-teal/20 shadow-[0_0_30px_rgba(0,163,143,0.1)]"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Route activation traffic to:</h2>
          <div className="space-y-4">
            {[
              { title: 'Retailer menus', icon: Store },
              { title: 'Direct purchase-enabled JointCommerce menus', icon: ShoppingBag },
              { title: 'Brand product pages', icon: Globe },
              { title: 'Marketplace listing pages (where available)', icon: Target },
            ].map((route, i) => (
              <div key={i} className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <route.icon className="w-6 h-6 text-jc-teal" />
                </div>
                <span className="text-lg font-medium text-white/90">{route.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 lg:pl-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Brand Programs</h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-jc-teal pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Retail Sell-Through Starter</h3>
              <p className="text-white/70">Establish your presence and drive initial momentum at key retail partnerships.</p>
            </div>
            
            <div className="border-l-2 border-jc-teal pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Statewide Performance Activation</h3>
              <p className="text-white/70">Scale your brand visibility across an entire state's legal marketplace.</p>
            </div>
            
            <div className="border-l-2 border-jc-teal pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">National Co-Op Deployment</h3>
              <p className="text-white/70">Execute massive, coordinated campaigns in tandem with MSO partners.</p>
            </div>
          </div>

          <button className="mt-8 h-[56px] px-8 rounded-full bg-jc-teal text-jc-dark font-bold hover:bg-white transition-colors flex items-center gap-2 group shadow-lg">
            Discuss Brand Programs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

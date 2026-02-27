import { motion } from 'framer-motion';
import { ArrowLeftRight, DatabaseZap, Network } from 'lucide-react';

export function PartnersPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <span className="text-secondary-light font-bold tracking-wider uppercase text-sm mb-4 block">For Partners</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Ecommerce & POS <span className="text-jc-teal">Integration</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-lg mb-8">
            JointCommerce routes high-intent discovery demand directly into participating ecommerce menus and POS systems.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-xl">
            <DatabaseZap className="w-6 h-6 text-jc-teal" />
            <span className="text-white font-bold text-lg">Demand layer. Not a POS replacement.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="aspect-video bg-gradient-to-br from-jc-dark border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-jc-teal/5 blur-3xl rounded-full"></div>
             
             {/* Animated Flow Graphic */}
             <div className="flex items-center justify-between w-full max-w-md relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-black/80 flex items-center justify-center border border-jc-teal/30 shadow-[0_0_20px_rgba(0,163,143,0.3)]">
                    <Network className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white font-semibold">Demand Network</span>
                </div>
                
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="px-4"
                >
                  <ArrowLeftRight className="w-8 h-8 text-jc-teal" />
                </motion.div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-black/80 flex items-center justify-center border border-white/20">
                    <DatabaseZap className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white font-semibold">POS Systems</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

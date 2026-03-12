'use client';

import { motion } from 'framer-motion';
import { Network, Zap, GitPullRequest } from 'lucide-react';

export function DemandInfrastructurePage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <span className="text-jc-teal font-bold tracking-wider uppercase text-sm mb-4 block">Demand Infrastructure</span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
          Upstream Demand That Strengthens Retail Media & Marketplace Ecosystems.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
          JointCommerce captures discovery demand and routes qualified traffic directly into retailer-owned menus and participating marketplace listing pages.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white border border-gray-200 p-12 lg:p-16 rounded-[2.5rem] shadow-sm max-w-5xl mx-auto relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-jc-teal/5 rounded-full blur-[100px]" />
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10 text-left">
           <div className="space-y-4">
              <div className="w-14 h-14 bg-jc-teal rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                 <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Capture</h3>
              <p className="text-gray-600">Intercept consumer intent at the very top of the discovery funnel.</p>
           </div>
           
           <div className="space-y-4">
              <div className="w-14 h-14 bg-jc-teal rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                 <GitPullRequest className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Route</h3>
              <p className="text-gray-600">Seamlessly direct high-value traffic precisely to relevant end-points.</p>
           </div>
           
           <div className="space-y-4">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                 <Network className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Empower</h3>
              <p className="font-semibold text-jc-teal">Infrastructure, not competition.</p>
              <p className="text-gray-600">We fuel your existing marketplace properties, rather than compete against them.</p>
           </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
}

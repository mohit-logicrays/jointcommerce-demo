"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, GitPullRequest } from 'lucide-react';

export default function DemandInfrastructure() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <span className="text-[#a0aeae] font-bold tracking-wider uppercase text-sm mb-4 block">Demand Infrastructure</span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
          Upstream Demand That Strengthens Retail Media & Marketplace Ecosystems.
        </h1>
        <h2 className="sr-only">Demand Infrastructure Breakdown</h2>
        <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-medium">
          JointCommerce captures discovery demand and routes qualified traffic directly into retailer-owned menus and participating marketplace listing pages.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black/50 backdrop-blur-xl border border-jc-teal/30 p-12 lg:p-16 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,163,143,0.15)] max-w-5xl mx-auto relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-jc-teal/10 rounded-full blur-[100px]" />
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10 text-left">
           <div className="space-y-4">
              <div className="w-14 h-14 bg-jc-teal rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-jc-teal/20">
                 <Zap className="w-7 h-7 text-jc-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white">Capture</h3>
              <p className="text-white/70">Intercept consumer intent at the very top of the discovery funnel.</p>
           </div>
           
           <div className="space-y-4">
              <div className="w-14 h-14 bg-jc-teal rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-jc-teal/20">
                 <GitPullRequest className="w-7 h-7 text-jc-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white">Route</h3>
              <p className="text-white/70">Seamlessly direct high-value traffic precisely to relevant end-points.</p>
           </div>
           
           <div className="space-y-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-white/20">
                 <Network className="w-7 h-7 text-jc-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white">Empower</h3>
              <p className="text-white/70 font-semibold text-jc-teal">Infrastructure, not competition.</p>
              <p className="text-white/70">We fuel your existing marketplace properties, rather than compete against them.</p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}

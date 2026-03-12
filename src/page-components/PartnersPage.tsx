'use client';

import { motion } from 'framer-motion';
import { ArrowLeftRight, DatabaseZap, Network } from 'lucide-react';

export function PartnersPage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <span className="text-jc-teal font-bold tracking-wider uppercase text-sm mb-4 block">For Partners</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Ecommerce & POS Integration
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-8">
            JointCommerce routes high-intent discovery demand directly into participating ecommerce menus and POS systems.
          </p>
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl">
            <DatabaseZap className="w-6 h-6 text-jc-teal" />
            <span className="text-gray-800 font-bold text-lg">Demand layer. Not a POS replacement.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="aspect-video bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-jc-teal/3 blur-3xl rounded-full"></div>
             
             {/* Animated Flow Graphic */}
             <div className="flex items-center justify-between w-full max-w-md relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                    <Network className="w-10 h-10 text-jc-teal" />
                  </div>
                  <span className="text-gray-700 font-semibold">Demand Network</span>
                </div>
                
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="px-4"
                >
                  <ArrowLeftRight className="w-8 h-8 text-jc-teal" />
                </motion.div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                    <DatabaseZap className="w-10 h-10 text-gray-600" />
                  </div>
                  <span className="text-gray-700 font-semibold">POS Systems</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}

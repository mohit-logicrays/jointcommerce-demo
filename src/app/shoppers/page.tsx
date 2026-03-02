"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Shield, Search, Store } from 'lucide-react';

export default function Shoppers() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 bg-jc-teal/20 text-jc-teal font-bold px-4 py-2 rounded-full mb-6">
           <ShoppingBag className="w-4 h-4" /> FOR SHOPPERS
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          <span className="opacity-50">Discover. Compare.</span> <span className="text-jc-teal border-b-4 border-jc-teal pb-1">Purchase.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
          JointCommerce helps A21+ shoppers discover exactly where products are available locally and purchase directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group"
         >
            <Search className="w-10 h-10 text-jc-teal mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Search-Driven</h3>
            <ul className="text-white/70 space-y-3 font-medium">
               <li>• Location availability</li>
               <li>• Product & brand tracking</li>
               <li>• Specific store inventory</li>
            </ul>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group"
         >
            <ShoppingBag className="w-10 h-10 text-jc-teal mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Direct Purchase</h3>
            <ul className="text-white/70 space-y-3 font-medium">
               <li>• Browse live inventory</li>
               <li>• Add directly to cart</li>
               <li>• Seamless checkout options</li>
            </ul>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group"
         >
            <Shield className="w-10 h-10 text-jc-teal mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Verified A21+</h3>
            <ul className="text-white/70 space-y-3 font-medium">
               <li>• Age verification controls</li>
               <li>• Privacy-forward framework</li>
               <li>• Safe & regulated environments</li>
            </ul>
         </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-jc-teal to-[#008f7d] p-12 lg:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between text-jc-dark shadow-[0_0_40px_rgba(0,163,143,0.3)] gap-8"
      >
        <div>
           <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Start Your Search</h2>
           <p className="text-jc-dark/80 max-w-lg font-bold text-lg">
             Find local retailers and discover where products are available near you instantly.
           </p>
        </div>
        <button className="flex-shrink-0 h-[64px] px-10 rounded-full bg-jc-dark text-white font-bold hover:bg-black transition-colors flex items-center gap-3 text-lg shadow-xl hover:-translate-y-1 transform">
          Browse Directory <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}

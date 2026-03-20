'use client';

import { motion } from 'framer-motion';
import { Search, ShoppingCart, Lock, Info } from 'lucide-react';

export function DirectPurchase() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-jc-teal" />,
      title: "Real-Time Inventory Access"
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-jc-teal" />,
      title: "Direct-to-Cart Routing"
    },
    {
      icon: <Lock className="w-5 h-5 text-jc-teal" />,
      title: "Secure Transaction Processing"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-jc-dark leading-[1.1] tracking-tight mb-6 uppercase">
              <span className="text-jc-teal hover:text-jc-mint transition-colors cursor-default">FRICTIONLESS</span><br />
              <span className="text-jc-teal hover:text-jc-mint transition-colors cursor-default">CHECKOUT</span>
            </h2>
            <p className="text-xl text-jc-dark/80 mb-12 font-light">
              Turn <strong className="font-bold text-jc-dark">high-intent discovery</strong> into immediate sales.
            </p>

            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-jc-teal text-jc-teal flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{feature.title}</h3>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-[6px] border-[#14B8A6] shadow-md max-w-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-[#14B8A6] uppercase tracking-widest mb-1.5">SYSTEM COMPLIANCE NOTE</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Retailers retain 100% control of pricing and fulfillment logic.<br />
                    <strong className="text-gray-900 font-semibold">JointCommerce</strong> acts as the facilitator and is not the merchant of record.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center w-full"
          >
            {/* Frictionless Checkout Image */}
            <img 
              src="/brands/Frictionless_checkout.png" 
              alt="Frictionless Checkout Interface" 
              className="w-[120%] max-w-none h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

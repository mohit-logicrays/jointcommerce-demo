'use client';

import { motion } from 'framer-motion';
import { Monitor, Tv, Package, Video, Layers, RefreshCw, CheckCircle2, Zap, TrendingUp, Users } from 'lucide-react';
;

export function LaunchFaster() {
  const features = [
    {
      icon: <Monitor className="w-5 h-5 text-[#1B675E]" />,
      title: "Display",
      description: "High-impact responsive ads"
    },
    {
      icon: <Video className="w-5 h-5 text-[#1B675E]" />,
      title: "Video",
      description: "Optimized shoppable video units"
    },
    {
      icon: <Tv className="w-5 h-5 text-[#1B675E]" />,
      title: "Connected TV",
      description: "Premium streaming placements"
    },
    {
      icon: <Layers className="w-5 h-5 text-[#1B675E]" />,
      title: "Retailer-specific overlays",
      description: "Specific-retailer creative layers"
    },
    {
      icon: <Package className="w-5 h-5 text-[#1B675E]" />,
      title: "Product-level Units",
      description: "Granular SKU-based creative"
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#1B675E]" />,
      title: "Performance refresh cycles",
      description: "Continuous creative optimization"
    }
  ];

  return (
    <section className="py-24 bg-[#6EDDD2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-jc-dark leading-[1.1] tracking-tight mb-6 uppercase">
              ACCELERATE CREATIVE<br />
              DEPLOYMENT
            </h2>
            <p className="text-lg text-jc-dark/70 mb-12">
              Every JointCommerce activation includes access to our Integrated Creative Studio — built specifically to translate your assets into high-performing, commerce-ready units.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-jc-dark text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-jc-dark/60 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-jc-dark bg-white/50 p-4 rounded-xl border border-white/20">
              <CheckCircle2 className="w-5 h-5 text-jc-teal" />
              Creative standardized for verified A21+ commerce activation.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center w-full"
          >
            <img 
              src="/CreativeStudio.png" 
              alt="Creative Studio Dashboard" 
              className="w-[120%] max-w-none h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-24 bg-jc-teal/10 rounded-full py-6 px-8 flex flex-wrap justify-between items-center max-w-5xl mx-auto border border-jc-teal/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm">
            <Zap className="w-5 h-5 text-jc-teal" />
            <span>Zero production delays</span>
          </div>
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm">
            <RefreshCw className="w-5 h-5 text-jc-teal" />
            <span>Rapid campaign deployment</span>
          </div>
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm">
            <TrendingUp className="w-5 h-5 text-jc-teal" />
            <span>Maximized conversion rates</span>
          </div>
          <button className="px-6 py-2 rounded-full bg-jc-teal text-jc-dark font-bold text-sm hover:bg-jc-mint/90 transition-colors uppercase tracking-wider">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}

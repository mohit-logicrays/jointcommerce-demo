'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="w-full py-24" style={{ background: 'linear-gradient(135deg, #0E3B2E 0%, #0E3B2E 50%, #2EB67D 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            The Future of Cannabis Commerce
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            JointCommerce connects shoppers, brands, and licensed retailers in a live marketplace where cannabis discovery becomes instantly shoppable.
          </p>
          <button className="px-10 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mx-auto shadow-lg group">
            Start Discovering
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

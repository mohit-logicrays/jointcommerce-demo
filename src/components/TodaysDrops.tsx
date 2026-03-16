'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const NEW_PRODUCTS = [
  {
    id: 1,
    name: 'Gelato Reserve',
    category: 'New Flower Drop',
    image: '/marketing/product-placeholder.jpg',
  },
  {
    id: 2,
    name: 'Live Resin Cart',
    category: 'New Vape',
    image: '/marketing/product-placeholder.jpg',
  },
  {
    id: 3,
    name: 'THC + CBN Sleep Gummies',
    category: 'New Edible',
    image: '/marketing/product-placeholder.jpg',
  }
];

export function TodaysDrops() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">New Today</h2>
          <p className="text-lg text-gray-900/70">Fresh products just added</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEW_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative aspect-square bg-gradient-to-br from-bright-emerald/5 to-fresh-green/5 flex items-center justify-center">
                <div className="absolute top-3 left-3 bg-emerald-900 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  NEW
                </div>
                <div className="text-6xl">✨</div>
              </div>
              <div className="p-4">
                <div className="text-xs text-emerald-900 font-semibold mb-1">{product.category}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                <button className="w-full py-2.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Heart, Store } from 'lucide-react';
import Image from 'next/image';

const FAVORITES = [
  {
    id: 1,
    name: 'Gelato Flower',
    category: 'Flower',
    badge: 'Recently viewed',
    icon: Heart,
    image: '/brands/Gelato_Flower.jpg',
  },
  {
    id: 2,
    name: 'Blue Dream Pre-Roll',
    category: 'Pre-Roll',
    badge: 'Favorite strain',
    icon: Heart,
    image: '/brands/Live_Resin_Blue_Dream_Cart.jpg',
  },
  {
    id: 3,
    name: 'Greenleaf Dispensary',
    category: 'Retailer',
    badge: 'Preferred retailer',
    icon: Store,
    image: '/brands/Greenleft-store.jpg',
  },
  {
    id: 4,
    name: 'Live Resin Vape Cart',
    category: 'Vape',
    badge: 'Saved product',
    icon: Store,
    image: '/brands/Live_Resin_Blue_Dream_Cart.jpg',
  },
];

export function YourFavorites() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Your Favorites</h2>
          <p className="text-lg text-gray-900/70">Quickly return to products and retailers you love</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FAVORITES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative aspect-square bg-gradient-to-br from-deep-evergreen/5 to-fresh-green/5 flex items-center justify-center overflow-hidden">
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                  <item.icon className="w-3 h-3" />
                  {item.badge}
                </div>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-emerald-500 font-semibold mb-1">{item.category}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h3>
                <button className="w-full py-2.5 bg-[#1DB954] text-white font-bold rounded-lg hover:bg-[#2EB67D] transition-colors">
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

'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Tag } from 'lucide-react';
import Image from 'next/image';

const LOCAL_TRENDING = [
  {
    id: 1,
    name: 'Blue Dream',
    category: 'Flower',
    badge: 'Popular strain nearby',
    icon: TrendingUp,
    image: '/brands/Live_Resin_Blue_Dream_Cart.jpg',
  },
  {
    id: 2,
    name: 'Live Resin Vape Cart',
    category: 'Vape',
    badge: 'Trending tonight',
    icon: TrendingUp,
    image: '/brands/Live_Resin_Blue_Dream_Cart.jpg',
  },
  {
    id: 3,
    name: '25% Off Vape Carts',
    category: 'Deal',
    badge: 'Nearby retailer deal',
    icon: Tag,
    image: '/brands/Late_Night_Munchies.jpg',
  },
];

export function TrendingNearYou() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Trending Near You</h2>
          <p className="text-lg text-gray-900/70">See what shoppers are buying locally</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCAL_TRENDING.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative aspect-square bg-gradient-to-br from-bright-emerald/5 to-fresh-green/5 flex items-center justify-center overflow-hidden">
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                  <item.icon className="w-3 h-3" />
                  LOCAL
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

'use client';

import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Tag } from 'lucide-react';

const LOCAL_TRENDING = [
  {
    id: 1,
    name: 'Blue Dream',
    type: 'Popular strain nearby',
    icon: TrendingUp,
  },
  {
    id: 2,
    name: 'Live Resin Vape Cart',
    type: 'Trending tonight',
    icon: TrendingUp,
  },
  {
    id: 3,
    name: '25% Off Vape Carts',
    type: 'Nearby retailer deal',
    icon: Tag,
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
          className="mb-10 flex items-center gap-3"
        >
          <MapPin className="w-8 h-8 text-emerald-600" />
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Trending Near You</h2>
            <p className="text-lg text-gray-900/70">See what shoppers are buying locally</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOCAL_TRENDING.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-900/60">{item.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

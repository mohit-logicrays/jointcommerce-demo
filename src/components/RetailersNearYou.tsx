'use client';

import { motion } from 'framer-motion';
import { MapPin, Tag } from 'lucide-react';

const RETAILERS = [
  {
    id: 1,
    name: 'Greenleaf Dispensary',
    distance: '0.7 miles away',
    deal: '20% off vape carts',
  },
  {
    id: 2,
    name: 'High Garden Collective',
    distance: '1.2 miles away',
    deal: 'Pre-roll deals available',
  },
  {
    id: 3,
    name: 'Emerald City Cannabis',
    distance: '1.8 miles away',
    deal: 'New customer discount',
  },
];

export function RetailersNearYou() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Retailers Near You</h2>
          <p className="text-lg text-gray-900/70">Licensed dispensaries in your area</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {RETAILERS.map((retailer, index) => (
            <motion.div
              key={retailer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="w-full h-32 bg-gradient-to-br from-deep-evergreen/10 to-fresh-green/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-5xl">🏪</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                {retailer.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-900/60 mb-3">
                <MapPin className="w-4 h-4" />
                {retailer.distance}
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-500 font-semibold">
                <Tag className="w-4 h-4" />
                {retailer.deal}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-emerald-900 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors">
            Browse Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}

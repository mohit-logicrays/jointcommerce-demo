'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CATEGORIES = [
  { id: 1, name: 'Flower', icon: '/marketing/logos/Flower.svg' },
  { id: 2, name: 'Edibles', icon: '/marketing/logos/Edibles.svg' },
  { id: 3, name: 'Vapes', icon: '/marketing/logos/Vapes.svg' },
  { id: 4, name: 'Pre-Rolls', icon: '/marketing/logos/Pre-Rolls.svg' },
  { id: 5, name: 'Concentrates', icon: '/marketing/logos/Concentrates.svg' },
  { id: 6, name: 'Topicals', icon: '/marketing/logos/Topicals.svg' },
];

export function ExploreCannabis() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Explore Cannabis</h2>
          <p className="text-lg text-gray-900/70">Shop by category</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-100 rounded-xl p-6 text-center cursor-pointer hover:bg-emerald-600/10 hover:scale-105 transition-all group"
            >
              <div className="flex items-center justify-center mb-3 h-16">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {category.name}
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
            Browse Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}

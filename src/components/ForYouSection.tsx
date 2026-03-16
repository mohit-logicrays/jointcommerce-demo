'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Tv, UtensilsCrossed, MapPin } from 'lucide-react';

const FOR_YOU_CARDS = [
  {
    id: 1,
    title: 'Game Night',
    description: 'Hybrid strains trending tonight',
    icon: Gamepad2,
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 2,
    title: 'Streaming Night',
    description: 'Edibles trending with binge watchers',
    icon: Tv,
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 3,
    title: 'Late Night Munchies',
    description: 'Perfect pairing with wings and tacos',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500/10 to-red-500/10',
  },
  {
    id: 4,
    title: 'Where to Buy Locally',
    description: 'See what shoppers are buying near you',
    icon: MapPin,
    gradient: 'from-emerald-500/10 to-green-500/10',
  },
];

export function ForYouSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">For You</h2>
          <p className="text-lg text-gray-900/70">Personalized recommendations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOR_YOU_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${card.gradient} rounded-xl p-8 cursor-pointer hover:scale-105 transition-transform border border-gray-100`}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <card.icon className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-900/70">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

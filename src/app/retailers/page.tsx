"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, HandCoins, Rocket, LineChart, BadgeCheck } from 'lucide-react';

export default function Retailers() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jc-teal/10 border border-jc-teal/30 text-jc-teal font-semibold text-sm mb-6">
            <BadgeCheck className="w-4 h-4" /> For Retailers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Enable Direct Purchase.<br />
            Launch <span className="text-jc-teal">Always-On Growth.</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            JointCommerce empowers your retail business with a data-driven, strategic approach to overcome advertising restrictions, find new customers, and boost sales growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-[48px] px-8 rounded-full bg-jc-teal text-jc-dark font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
              Enable Direct Purchase
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square rounded-[2rem] bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-8 shadow-2xl flex items-center justify-center overflow-hidden"
        >
          {/* Abstract Graphic */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-jc-teal/20 via-transparent to-transparent opacity-50 blur-2xl"></div>
          <div className="relative z-10 w-full max-w-sm space-y-4">
            {[
              { icon: MapPin, text: 'Geo-targeted activation' },
              { text: 'Brand-funded co-op participation', icon: HandCoins },
              { text: 'Routing priority', icon: ArrowRight },
              { text: 'Direct purchase eligibility', icon: BadgeCheck },
              { text: 'Real-time revenue visibility', icon: LineChart },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-jc-teal/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-jc-teal" />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Retailer Activation Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: '🚀', title: 'Growth Launch', desc: 'Kickstart your digital presence and capture eager customers.' },
            { tag: '🔁', title: 'Always-On Trade Area', desc: 'Secure consistent search discovery within your geo-fenced region.' },
            { tag: '🌎', title: 'Market Expansion', desc: 'Grow your footprint and tap into new audience segments.' }
          ].map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center hover:border-jc-teal/50 transition-colors"
            >
              <div className="text-4xl mb-4">{program.tag}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
              <p className="text-white/70">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

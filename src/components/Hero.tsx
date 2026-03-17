'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #0E3B2E 0%, #0E3B2E 50%, #2EB67D 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Your Local<br />
            <span style={{ color: '#1DB954' }}>Dispensary And Brand</span>
          </motion.h1>

          {/* Homepage Tagline */}
          <motion.div
            className="text-2xl sm:text-3xl font-bold text-white/95 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Discover What's Trending. Buy It Nearby.
          </motion.div>

          {/* Subtext */}
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JointCommerce connects A21+ verified cannabis shoppers with licensed retailers so you can discover trending products and buy instantly nearby.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="w-full sm:w-auto px-8 py-4 text-white font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg group"
              style={{ backgroundColor: '#1DB954' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2EB67D'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1DB954'}
            >
              <Search className="w-5 h-5" />
              Browse What's Trending
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0E3B2E'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <MapPin className="w-5 h-5" />
              Find Retailers Near You
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1DB954' }}>200K+</div>
              <div className="text-white/90 font-medium">Verified Cannabis Shoppers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1DB954' }}>Licensed</div>
              <div className="text-white/90 font-medium">Retailer Network</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1DB954' }}>Cart-enabled</div>
              <div className="text-white/90 font-medium">Checkout Launching Soon</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #F7F6F2, transparent)' }}></div>
    </div>
  );
}

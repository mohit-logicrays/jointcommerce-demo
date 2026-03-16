'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Target, Zap } from 'lucide-react';

export function ForBrands() {
  return (
    <section className="w-full py-24" style={{ backgroundColor: '#F7F6F2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-2xl p-8 shadow-xl text-white">
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-2">Brand Campaign Dashboard</h4>
                <p className="text-white/70 text-sm">Real-time performance metrics</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">2.4M</div>
                  <div className="text-sm text-white/70">Impressions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">184K</div>
                  <div className="text-sm text-white/70">Product Views</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">12.4K</div>
                  <div className="text-sm text-white/70">Add to Cart</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">$847K</div>
                  <div className="text-sm text-white/70">Retail Sales</div>
                </div>
              </div>
              
              <div className="bg-emerald-600 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Campaign ROI</span>
                  <span className="text-2xl font-bold">8.4x</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Turn Cannabis Discovery Into Retail Sales
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              JointCommerce helps brands influence verified cannabis shoppers and convert discovery into measurable retail sell-through through shoppable moments and checkout.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Shoppable Moments</h3>
                  <p className="text-gray-600">Create branded discovery experiences that drive immediate purchase intent</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Instant Conversion</h3>
                  <p className="text-gray-600">Turn product discovery into retail orders at nearby dispensaries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Measurable Results</h3>
                  <p className="text-gray-600">Track impressions, engagement, and retail sell-through in real-time</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 group">
              Activate Brand Campaigns
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

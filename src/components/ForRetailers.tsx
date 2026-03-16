'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, TrendingUp, Users } from 'lucide-react';

export function ForRetailers() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Turn Discovery Into Real Orders
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              JointCommerce captures A21+ verified cannabis shoppers at the moment of discovery and converts that demand into real orders through your menu, cart, and checkout.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Verified Shoppers</h3>
                  <p className="text-gray-600">Connect with 200K+ A21+ verified cannabis consumers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Real-Time Discovery</h3>
                  <p className="text-gray-600">Capture demand at the moment shoppers are browsing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Seamless Checkout</h3>
                  <p className="text-gray-600">Convert discovery into orders with integrated cart and checkout</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 group">
              Integrate Your Menu
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-3xl">
                    🏪
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Your Dispensary</h4>
                    <p className="text-sm text-gray-600">0.7 miles away</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Menu Views Today</span>
                    <span className="font-bold text-emerald-600">417</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Products Added to Cart</span>
                    <span className="font-bold text-emerald-600">86</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Orders Today</span>
                    <span className="font-bold text-emerald-600">24</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-600 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-1">+127%</div>
                <div className="text-sm opacity-90">Discovery-driven orders this month</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

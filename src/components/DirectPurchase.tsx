import { motion } from 'framer-motion';
import { Search, ShoppingCart, Lock, Info, CheckCircle2 } from 'lucide-react';

export function DirectPurchase() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-jc-teal" />,
      title: "Browse live inventory"
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-jc-teal" />,
      title: "Seamlessly add to cart"
    },
    {
      icon: <Lock className="w-5 h-5 text-jc-teal" />,
      title: "Securely complete checkout"
    }
  ];

  return (
    <section className="py-24 bg-jc-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-jc-dark leading-[1.1] tracking-tight mb-6 uppercase">
              DIRECT<br />
              PURCHASE
            </h2>
            <p className="text-xl text-jc-dark/80 mb-12 font-light">
              Consumers can buy directly on <strong className="font-bold">JointCommerce</strong>.
            </p>

            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-jc-dark text-lg">{feature.title}</h3>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-jc-teal shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-jc-teal flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-jc-dark uppercase tracking-wider mb-1">SYSTEM COMPLIANCE NOTE</h4>
                  <p className="text-sm text-jc-dark/70 leading-relaxed">
                    Retailers retain 100% control of pricing and fulfillment logic.<br />
                    <strong className="text-jc-dark">JointCommerce</strong> acts as the facilitator and is not the merchant of record.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Laptop Mockup */}
            <div className="relative z-10 bg-gray-800 rounded-t-3xl p-4 shadow-2xl border-4 border-gray-900 aspect-[16/10] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-white m-2 rounded-xl overflow-hidden flex flex-col">
                {/* Browser Header */}
                <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-4 flex-1 h-6 bg-white rounded-md border border-gray-200 flex items-center px-3">
                    <span className="text-xs text-gray-400">jointcommerce.com/shop</span>
                  </div>
                </div>
                {/* Page Content */}
                <div className="flex-1 p-6 flex gap-6 overflow-hidden">
                  <div className="w-1/2 space-y-4">
                    <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 overflow-hidden relative">
                      <img src="https://picsum.photos/seed/product2/400/400" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        Indica
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-16 h-16 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                          <img src={`https://picsum.photos/seed/thumb${i}/100/100`} alt="Thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-1/2 space-y-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">Premium Flower 3.5g</h1>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400 text-sm">★★★★★</div>
                        <span className="text-xs text-gray-500">(128 reviews)</span>
                      </div>
                      <p className="text-3xl font-bold text-gray-900">$50.00</p>
                    </div>
                    <div className="space-y-3">
                      <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
                      <div className="h-12 bg-jc-dark rounded-lg w-full flex items-center justify-center text-white font-bold text-sm">
                        ADD TO CART
                      </div>
                    </div>
                    <div className="pt-6 border-t border-gray-200">
                      <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="relative z-20 h-4 bg-gray-300 rounded-b-xl shadow-xl w-[110%] -ml-[5%] flex justify-center">
              <div className="w-32 h-2 bg-gray-400 rounded-b-md"></div>
            </div>

            {/* Floating Checkout Modal */}
            <motion.div 
              className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-80 z-30"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900">Secure Checkout</h3>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                      <img src="https://picsum.photos/seed/product2/100/100" alt="Thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Premium Flower</p>
                      <p className="text-xs text-gray-500">Qty: 1</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-900">$50.00</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-gray-900">$50.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Taxes</span>
                  <span className="font-medium text-gray-900">$4.50</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-xl text-gray-900">$54.50</span>
                </div>
              </div>
              <button className="w-full py-3 bg-jc-teal text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-jc-teal/90 transition-colors">
                <Lock className="w-4 h-4" />
                COMPLETE PURCHASE
              </button>
              <div className="mt-4 flex justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> SECURE</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> COMPLIANT</span>
              </div>
            </motion.div>

            {/* 100% Badge */}
            <motion.div 
              className="absolute -top-6 right-12 bg-white w-20 h-20 rounded-full shadow-xl border border-gray-100 flex flex-col items-center justify-center z-30"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span className="text-jc-teal font-bold text-xl leading-none">100%</span>
              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-1 text-center leading-tight">RETAILER<br/>CONTROL</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

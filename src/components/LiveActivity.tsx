'use client';

import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { TrendingUp, ShoppingCart, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    duration: duration * 1000,
    bounce: 0
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      motionValue.set(value);
      setHasAnimated(true);
    }
  }, [motionValue, isInView, value, hasAnimated]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return <div ref={ref} className="text-3xl font-bold text-gray-900">0</div>;
}

export function LiveActivity() {
  return (
    <section className="w-full py-12" style={{ backgroundColor: '#F7F6F2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-2" style={{ color: '#1C1C1C' }}>Live on JointCommerce</h3>
          <p className="text-sm" style={{ color: 'rgba(28, 28, 28, 0.7)' }}>Real-time marketplace activity</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Eye className="w-5 h-5 text-emerald-600" />
              </motion.div>
              <AnimatedCounter value={2184} duration={2.5} />
            </div>
            <p className="text-sm text-gray-600">shoppers exploring today</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </motion.div>
              <AnimatedCounter value={417} duration={2} />
            </div>
            <p className="text-sm text-gray-600">menus browsed in the last hour</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              >
                <ShoppingCart className="w-5 h-5 text-emerald-600" />
              </motion.div>
              <AnimatedCounter value={86} duration={1.5} />
            </div>
            <p className="text-sm text-gray-600">products added to cart today</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

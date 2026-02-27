import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-jc-light-teal">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              THE DISCOVERY-TO-<br />
              COMMERCE ACTIVATION<br />
              INFRASTRUCTURE
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-jc-dark text-white font-medium hover:bg-black transition-colors flex items-center gap-2">
                Launch Activation
              </button>
              <button className="px-8 py-4 rounded-full bg-jc-dark text-white font-medium hover:bg-black transition-colors flex items-center gap-2 group">
                Enable Direct Purchase
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-md">
              <div className="flex items-center gap-4 mb-4 lg:justify-end">
                <p className="text-white font-medium text-lg">
                  Drive Measurable Online Sales From<br />
                  <span className="font-bold">Verified A21+</span> Zero Party High-Intent Shoppers.
                </p>
                <div className="w-16 h-16 rounded-full border-2 border-jc-teal flex items-center justify-center flex-shrink-0 bg-jc-dark/50">
                  <span className="text-jc-teal font-bold text-xl">A21+</span>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-white">JointCommerce</strong> captures shoppers actively searching <strong className="text-white">"where to buy,"</strong> activates them across <strong className="text-white">premium publisher environments</strong>, and routes them directly to purchase - with real-time revenue reporting down to the order level.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

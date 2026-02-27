import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import systemVideo from '../static/marketing/videos/6802bef7f0d9c9a024a7972d_1efbdc56490687326b08fdc33cc93706fd96a97b (2) (1)-transcode (1).mp4';
import { Search, Radio, MousePointerClick, ShoppingBag, Settings2 } from 'lucide-react';

export function ConnectedSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const features = [
    {
      icon: Search,
      title: "Discovery",
      description: "Search-driven “where to buy” demand captured through our SEO-powered A21+ directory ecosystem."
    },
    {
      icon: Radio,
      title: "Awareness",
      description: "Premium publisher activation within policy-aligned environments."
    },
    {
      icon: MousePointerClick,
      title: "Engagement",
      description: "Shoppable creative, geo targeting, retargeting."
    },
    {
      icon: ShoppingBag,
      title: "Purchase",
      description: "Consumers buy directly on JointCommerce (when enabled) or are routed to retailer menus, brand product pages, or participating marketplace listing pages."
    },
    {
      icon: Settings2,
      title: "Optimization",
      description: "Always-on refinement with cross-device performance visibility."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-jc-dark overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24 flex justify-center">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight w-full max-w-none break-words"
          >
            From Search to Sale — <span className="text-jc-teal">One Connected System</span>
          </motion.h2>
        </div>

        {/* 12 Column Grid approach for uneven distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Wider): Visual Video Parallax */}
          <div className="lg:col-span-7 xl:col-span-8 relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black hidden lg:block border border-gray-800">
            <motion.div 
              style={{ y: videoY }}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover scale-[1.02]"
              >
                <source src={systemVideo} type="video/mp4" />
              </video>
            </motion.div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          </div>

          <div className="lg:col-span-7 xl:col-span-8 relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black lg:hidden mb-8 border border-gray-800">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover scale-[1.02]"
              >
                <source src={systemVideo} type="video/mp4" />
              </video>
          </div>

          {/* Right Column (Narrower): Accordion Features List */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4 pt-2 w-full max-w-xl mx-auto lg:mx-0">
            {features.map((feature, idx) => {
              const isActive = activeIndex === idx;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setActiveIndex(isActive ? -1 : idx)}
                  className={`flex gap-5 cursor-pointer rounded-2xl p-4 transition-all duration-300 group ${
                    isActive ? "bg-gray-800/50 shadow-sm border border-gray-700/50" : "bg-transparent border border-transparent hover:bg-gray-800/30"
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-[#0c2419] border border-jc-teal/40" : "bg-transparent border border-gray-700 group-hover:border-jc-teal/50"
                    }`}>
                      <feature.icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-jc-teal" : "text-gray-500 group-hover:text-jc-teal"}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                      {feature.title}
                    </h3>
                    
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[15px] sm:text-base text-gray-400 leading-relaxed font-medium pb-2 pt-1 pr-4">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

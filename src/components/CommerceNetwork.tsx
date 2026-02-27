import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import networkVideo from '../static/marketing/videos/6802bef7f0d9c9a024a7960e_683890a46e00ce1107736896_Brand Carousel-transcode.mp4';

export function CommerceNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect on the video background
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-32">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
        style={{ y }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        >
          <source src={networkVideo} type="video/mp4" />
        </video>
        {/* Gradients to blend the edges into the rest of the dark site */}
        <div className="absolute inset-0 bg-gradient-to-b from-jc-dark via-transparent to-jc-dark z-10" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            A Growing National<br className="hidden sm:block" /> Commerce Network
          </h2>
          
          <div className="space-y-6 text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
            <p>
              JointCommerce connects over <strong className="text-white font-semibold">12,000 retail menus</strong> nationwide through our discovery and activation infrastructure.
            </p>
            <p>
              Retailers who enable measurement and direct purchase receive priority inclusion within activation programs and funded campaigns across the expanding network.
            </p>
            <p className="text-2xl font-medium text-white pt-6">
              Participation increases reach. <span className="text-jc-teal">Activation drives revenue.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

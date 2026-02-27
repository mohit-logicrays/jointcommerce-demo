import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const LeafSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
  </svg>
);

export function DirectoryPromo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transforms for different layers to create parallax
  const x1 = useTransform(springX, [-0.5, 0.5], ["-10%", "10%"]);
  const y1 = useTransform(springY, [-0.5, 0.5], ["-10%", "10%"]);
  
  const x2 = useTransform(springX, [-0.5, 0.5], ["5%", "-5%"]);
  const y2 = useTransform(springY, [-0.5, 0.5], ["5%", "-5%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="w-full flex flex-col lg:flex-row relative cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Column: White */}
      <div className="w-full lg:w-1/2 bg-white relative overflow-hidden group py-24 px-8 lg:px-24 min-h-screen flex flex-col items-center justify-center text-center">
        
        {/* Animated Background SVGs */}
        <motion.div style={{ x: x1, y: y1 }} className="absolute text-gray-100 opacity-60 -top-10 -left-10 transition-transform duration-700 group-hover:scale-110">
          <LeafSvg className="w-72 h-72 rotate-12" />
        </motion.div>
        
        <motion.div style={{ x: x2, y: y2 }} className="absolute text-gray-50 opacity-60 bottom-10 -right-10 transition-transform duration-700 group-hover:scale-110">
          <LeafSvg className="w-64 h-64 -rotate-45" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-black text-[#a1a1a1] mb-6 tracking-tight leading-tight transition-transform duration-500 group-hover:-translate-y-1">
            Looking for a trusted<br/>cannabis provider?
          </h2>
          <p className="text-[#c1c1c1] text-lg lg:text-xl font-medium mb-10 transition-transform duration-500 delay-75 group-hover:-translate-y-1">
            Enter your location and customize your search to find the best local dispensaries and brands near you.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md border border-gray-300 text-gray-400 font-medium hover:text-gray-600 hover:border-gray-400 transition-colors shadow-sm bg-white"
          >
            Search Our Directory
          </motion.button>
        </div>
      </div>

      {/* Right Column: Mint */}
      <div className="w-full lg:w-1/2 bg-[#9ef0d4] relative overflow-hidden group py-24 px-8 lg:px-24 min-h-screen flex flex-col items-center justify-center text-center">
        
        {/* Animated Background SVGs */}
        <motion.div style={{ x: x1, y: y1 }} className="absolute text-[#87debf] opacity-60 top-10 right-10 transition-transform duration-700 group-hover:scale-110">
          <LeafSvg className="w-56 h-56 rotate-45" />
        </motion.div>
        
        <motion.div style={{ x: x2, y: y2 }} className="absolute text-[#8ee6c7] opacity-50 -bottom-20 left-0 transition-transform duration-700 group-hover:scale-110">
          <LeafSvg className="w-80 h-80 -rotate-12" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-black text-[#2e3b36] mb-6 tracking-tight leading-tight transition-transform duration-500 group-hover:-translate-y-1">
            Are you a dispensary<br/>or a brand owner?
          </h2>
          <p className="text-[#3c4a44] text-lg lg:text-xl font-medium mb-10 transition-transform duration-500 delay-75 group-hover:-translate-y-1">
            Run co-branded campaigns that increase product visibility, measure online sales across your partner retailers, and get complete control over your customer data.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md bg-[#181818] text-white font-medium hover:bg-black transition-colors shadow-xl"
          >
            Claim Your Profile
          </motion.button>
        </div>
      </div>

    </section>
  );
}

import { AnimatedBeam } from './ui/animated-beam';
import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Handshake, Eye, ShieldCheck, Network, Archive, Smartphone } from 'lucide-react';

const LeafSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
  </svg>
);

export function PremiumActivation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Refs for the AnimatedBeam to track nodes
  const centerNodeRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);
  const node5Ref = useRef<HTMLDivElement>(null);
  const node6Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  const nodes = [
    { ref: node1Ref, icon: <Handshake className="w-5 h-5 text-jc-teal" />, text: "DIRECT PUBLISHER\nRELATIONSHIPS", position: "top-left", top: "15%", left: "20%" },
    { ref: node2Ref, icon: <Eye className="w-5 h-5 text-jc-teal" />, text: "100% VIEWABLE\nIMPRESSION STANDARDS", position: "top-right", top: "15%", left: "80%" },
    { ref: node3Ref, icon: <ShieldCheck className="w-5 h-5 text-jc-teal" />, text: "VERIFIED A21+ AUDIENCE\nDEPLOYMENT", position: "left", top: "50%", left: "12%" },
    { ref: node4Ref, icon: <Network className="w-5 h-5 text-jc-teal" />, text: "URL & APP-LEVEL\nTRANSPARENCY", position: "right", top: "50%", left: "88%" },
    { ref: node5Ref, icon: <Archive className="w-5 h-5 text-jc-teal" />, text: "POLICY-ALIGNED\nPRIVATE INVENTORY", position: "bottom-left", top: "85%", left: "20%" },
    { ref: node6Ref, icon: <Smartphone className="w-5 h-5 text-jc-teal" />, text: "CROSS-DEVICE\nREPORTING", position: "bottom-right", top: "85%", left: "80%" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-jc-dark overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-jc-teal tracking-widest uppercase mb-4">PREMIUM ACTIVATION</h2>
          <p className="text-xl lg:text-2xl font-bold tracking-widest uppercase text-gray-500">PREMIUM INVENTORY. FULL TRANSPARENCY.</p>
        </motion.div>

        {/* Desktop Layout - Node Graph */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-6xl mx-auto hidden lg:block aspect-[21/9] bg-white rounded-3xl"
          onMouseMove={handleMouseMove}
        >
          {/* Glowing Interactive Cursor Overlay */}
          <motion.div 
            className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
            style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
          >
            <div className="absolute inset-0 bg-jc-teal/5"></div>
          </motion.div>

          {/* Animated Beams connecting nodes - Added z-0 to push behind nodes, and changed path color to a very light teal/mint offset */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <AnimatedBeam containerRef={containerRef} fromRef={node1Ref} toRef={centerNodeRef} reverse curvature={-50} endYOffset={-10} pathColor="#f0fdfa" gradientStartColor="#9ef0d4" gradientStopColor="#0e7490" />
            <AnimatedBeam containerRef={containerRef} fromRef={node2Ref} toRef={centerNodeRef} curvature={50} endYOffset={10} pathColor="#f0fdfa" gradientStartColor="#9ef0d4" gradientStopColor="#0e7490" />
            <AnimatedBeam containerRef={containerRef} fromRef={node3Ref} toRef={centerNodeRef} reverse pathColor="#f0fdfa" gradientStartColor="#9ef0d4" gradientStopColor="#0e7490" />
            <AnimatedBeam containerRef={containerRef} fromRef={node4Ref} toRef={centerNodeRef} pathColor="#f0fdfa" gradientStartColor="#9ef0d4" gradientStopColor="#0e7490" />
            <AnimatedBeam containerRef={containerRef} fromRef={node5Ref} toRef={centerNodeRef} reverse curvature={50} endYOffset={10} pathColor="#f0fdfa" gradientStartColor="#9ef0d4" gradientStopColor="#0e7490" />
            <AnimatedBeam containerRef={containerRef} fromRef={node6Ref} toRef={centerNodeRef} curvature={-50} endYOffset={-10} pathColor="#f0fdfa" gradientStartColor="#9ef0d4" gradientStopColor="#0e7490" />
          </div>

          {/* Center Logo */}
          {/* Center Logo */}
          <motion.div 
            ref={centerNodeRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-40 h-40 rounded-full bg-jc-dark flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.15)] border-[6px] border-[#f0fdfa] cursor-pointer group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Added subtle star instead of leaf icon to match screenshot exactly */}
            <svg className="w-14 h-14 text-jc-teal mb-2 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-[11px] font-black tracking-widest text-white mt-1">JOINTCOMMERCE</span>
          </motion.div>

          {/* Outer Nodes */}
          {nodes.map((node, index) => {
            const isLeft = node.position.includes('left');
            return (
              <motion.div
                key={index}
                ref={node.ref}
                className={`absolute flex items-center gap-4 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.05)] px-6 py-4 rounded-3xl whitespace-pre-line text-[12px] font-black tracking-widest z-20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-default ${isLeft ? 'text-right' : 'text-left'}`}
                style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {isLeft ? (
                  <>
                    <span className="text-jc-dark leading-[1.3] relative z-20">{node.text}</span>
                    <div className="w-14 h-14 rounded-2xl bg-jc-dark flex items-center justify-center flex-shrink-0 shadow-inner group-hover:bg-black transition-colors relative z-20">
                      {node.icon}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-2xl bg-jc-dark flex items-center justify-center flex-shrink-0 shadow-inner group-hover:bg-black transition-colors relative z-20">
                      {node.icon}
                    </div>
                    <span className="text-jc-dark leading-[1.3] relative z-20">{node.text}</span>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-4 mt-8 relative z-10 w-full max-w-md mx-auto items-center">
          {/* Mobile Center Logo */}
          <motion.div 
            className="w-32 h-32 rounded-full bg-jc-dark flex flex-col items-center justify-center shadow-xl border-4 border-white mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <LeafSvg className="w-12 h-12 text-jc-teal mb-2" />
            <span className="text-[10px] font-black tracking-widest text-white mt-1">JOINTCOMMERCE</span>
          </motion.div>

          {nodes.map((node, index) => (
             <motion.div
                key={`mobile-${index}`}
                className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm px-5 py-4 rounded-2xl text-[13px] font-bold tracking-wider w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-jc-dark flex items-center justify-center flex-shrink-0">
                  {node.icon}
                </div>
                <span className="text-gray-800 leading-snug">{node.text}</span>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Search, Shield, Megaphone, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

const nodes = [
  { id: 'discovery', label: 'Discovery', icon: Search },
  { id: 'identity', label: 'Identity', icon: Shield },
  { id: 'media', label: 'Media', icon: Megaphone },
  { id: 'commerce', label: 'Commerce', icon: ShoppingCart },
];

const connections = [
  { from: 'discovery', to: 'identity' },
  { from: 'identity', to: 'media' },
  { from: 'media', to: 'commerce' },
  { from: 'discovery', to: 'commerce' },
];

export function CommerceNetworkDiagram() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive positioning
  const getNodePosition = (nodeId: string) => {
    if (isMobile) {
      // Mobile: 2x2 grid layout
      switch (nodeId) {
        case 'discovery': return { x: 25, y: 30 };
        case 'identity': return { x: 75, y: 30 };
        case 'media': return { x: 25, y: 70 };
        case 'commerce': return { x: 75, y: 70 };
        default: return { x: 50, y: 50 };
      }
    } else {
      // Desktop: diamond layout
      switch (nodeId) {
        case 'discovery': return { x: 15, y: 70 };
        case 'identity': return { x: 35, y: 30 };
        case 'media': return { x: 65, y: 30 };
        case 'commerce': return { x: 85, y: 70 };
        default: return { x: 50, y: 50 };
      }
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#0E3B2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 px-4">
            The Cannabis Discovery-to-Checkout Network
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
            A unified platform connecting discovery, identity verification, media, and commerce
          </p>
        </motion.div>

        {/* Network Diagram */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {connections.map((conn, index) => {
              const fromPos = getNodePosition(conn.from);
              const toPos = getNodePosition(conn.to);

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  {/* Static connection line */}
                  <motion.line
                    x1={`${fromPos.x}%`}
                    y1={`${fromPos.y}%`}
                    x2={`${toPos.x}%`}
                    y2={`${toPos.y}%`}
                    stroke="rgba(29, 185, 84, 0.3)"
                    strokeWidth={isMobile ? "2" : "2"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                  {/* Animated flowing line */}
                  <motion.line
                    x1={`${fromPos.x}%`}
                    y1={`${fromPos.y}%`}
                    x2={`${toPos.x}%`}
                    y2={`${toPos.y}%`}
                    stroke="rgba(29, 185, 84, 0.8)"
                    strokeWidth={isMobile ? "2" : "3"}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{ filter: isMobile ? 'blur(1px)' : 'blur(2px)' }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => {
            const position = getNodePosition(node.id);
            
            return (
              <motion.div
                key={node.id}
                className="absolute"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Outer glow ring - hidden on small screens */}
                <motion.div
                  className="absolute inset-0 rounded-full hidden sm:block"
                  style={{
                    width: '120px',
                    height: '120px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(29, 185, 84, 0.3) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Node circle */}
                <motion.div
                  className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex flex-col items-center justify-center cursor-pointer"
                  style={{
                    width: isMobile ? '80px' : '100px',
                    height: isMobile ? '80px' : '100px',
                    boxShadow: '0 0 20px rgba(29, 185, 84, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(29, 185, 84, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.2)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(29, 185, 84, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.1)',
                      '0 0 30px rgba(29, 185, 84, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.15)',
                      '0 0 20px rgba(29, 185, 84, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  <node.icon className={`text-white mb-1 ${isMobile ? 'w-7 h-7' : 'w-8 h-8'}`} />
                  <span className={`text-white font-bold ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    {node.label}
                  </span>
                </motion.div>

                {/* Particle effects - hidden on mobile */}
                {!isMobile && (
                  <div>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: [0, (Math.random() - 0.5) * 50],
                          y: [0, (Math.random() - 0.5) * 50],
                          opacity: [1, 0],
                          scale: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.7 + index * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center px-4"
        >
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Our integrated platform seamlessly connects product discovery with verified identity, 
            targeted media campaigns, and instant commerce—creating a complete ecosystem for 
            cannabis retail success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

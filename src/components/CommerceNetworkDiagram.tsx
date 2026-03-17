'use client';

import { motion } from 'framer-motion';
import { Search, Shield, Megaphone, ShoppingCart } from 'lucide-react';

const nodes = [
  { id: 'discovery', label: 'Discovery', icon: Search, x: 20, y: 50 },
  { id: 'identity', label: 'Identity', icon: Shield, x: 40, y: 20 },
  { id: 'media', label: 'Media', icon: Megaphone, x: 60, y: 20 },
  { id: 'commerce', label: 'Commerce', icon: ShoppingCart, x: 80, y: 50 },
];

const connections = [
  { from: 'discovery', to: 'identity' },
  { from: 'identity', to: 'media' },
  { from: 'media', to: 'commerce' },
  { from: 'discovery', to: 'commerce' },
];

export function CommerceNetworkDiagram() {
  return (
    <section className="w-full py-24" style={{ backgroundColor: '#0E3B2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            The Cannabis Discovery-to-Checkout Network
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A unified platform connecting discovery, identity verification, media, and commerce
          </p>
        </motion.div>

        {/* Network Diagram */}
        <div className="relative w-full h-96 md:h-[500px]">
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {/* Animated Connection Lines */}
            {connections.map((conn, index) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  {/* Base line */}
                  <motion.line
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke="rgba(29, 185, 84, 0.3)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                  
                  {/* Animated glow line */}
                  <motion.line
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke="rgba(29, 185, 84, 0.8)"
                    strokeWidth="3"
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
                    style={{ filter: 'blur(2px)' }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  width: '140px',
                  height: '140px',
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
                  width: '100px',
                  height: '100px',
                  boxShadow: '0 0 30px rgba(29, 185, 84, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 40px rgba(29, 185, 84, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.2)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(29, 185, 84, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                    '0 0 40px rgba(29, 185, 84, 0.8), inset 0 0 25px rgba(255, 255, 255, 0.15)',
                    '0 0 30px rgba(29, 185, 84, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              >
                <node.icon className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-bold text-sm">{node.label}</span>
              </motion.div>

              {/* Particle effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 60],
                    y: [0, (Math.random() - 0.5) * 60],
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
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 text-lg max-w-4xl mx-auto">
            Our integrated platform seamlessly connects product discovery with verified identity, 
            targeted media campaigns, and instant commerce—creating a complete ecosystem for 
            cannabis retail success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

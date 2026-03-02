"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Network, BarChart3, Database, Target, LayoutDashboard, Zap, ArrowRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

// --- Reusable SVG Assets --- 
const FlowSvg = () => (
  <svg viewBox="0 0 800 400" className="w-full h-full opacity-30 mix-blend-screen absolute inset-0 pointer-events-none" preserveAspectRatio="none">
    <motion.path 
      d="M 100 200 C 200 100, 300 300, 400 200 C 500 100, 600 300, 700 200"
      fill="none" 
      stroke="url(#gradient-flow)" 
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.path 
      d="M 100 200 C 200 300, 300 100, 400 200 C 500 300, 600 100, 700 200"
      fill="none" 
      stroke="url(#gradient-flow)" 
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
    />
    <defs>
      <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
        <stop offset="50%" stopColor="#14B8A6" stopOpacity="1" />
        <stop offset="100%" stopColor="#6EDDD2" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const AbstractNodes = () => (
  <svg viewBox="0 0 400 400" className="w-[150%] h-[150%] absolute -top-[25%] -right-[25%] opacity-20 pointer-events-none rotate-12">
    <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "200px 200px" }}>
      <circle cx="200" cy="200" r="150" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="10 20" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5 15" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const rad = (i * 60 * Math.PI) / 180;
        return (
          <g key={i}>
            <circle cx={200 + Math.cos(rad) * 150} cy={200 + Math.sin(rad) * 150} r="4" fill="#14B8A6" />
            <motion.line 
              x1="200" y1="200" 
              x2={200 + Math.cos(rad) * 150} y2={200 + Math.sin(rad) * 150} 
              stroke="#14B8A6" strokeWidth="1" opacity="0.5"
              animate={{ opacity: [0.1, 0.7, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        )
      })}
    </motion.g>
  </svg>
);


export default function WhyJointCommerce() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative position for the glow effect
      const x = (e.clientX / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5) * 40;
      const y = (e.clientY / (typeof window !== 'undefined' ? window.innerHeight : 1) - 0.5) * 40;
      setMousePos({ x, y });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const mustBuys = [
    {
      icon: <Database />,
      title: "Owned A21+ high-intent audience infrastructure",
      delay: 0.1
    },
    {
      icon: <ShieldCheck />,
      title: "Direct premium publisher approvals for compliant advertising",
      delay: 0.2
    },
    {
      icon: <Target />,
      title: "Cross-retailer Buy-Now store locator",
      delay: 0.3
    },
    {
      icon: <BarChart3 />,
      title: "Blended view-through and click-through revenue model",
      delay: 0.4
    },
    {
      icon: <LayoutDashboard />,
      title: "Order-level revenue reporting updated every 30 minutes",
      delay: 0.5
    },
    {
      icon: <CheckCircle2 />,
      title: "Guaranteed 100% viewable impressions every 30-day cycle",
      delay: 0.6
    },
    {
      icon: <Network />,
      title: "Activation across CTV, display, and video",
      delay: 0.7
    }
  ];

  return (
    <div className="bg-[#0a0f0f] min-h-screen pt-20 overflow-hidden font-sans" ref={containerRef}>
      
      {/* ─── Hero Section ────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center border-b border-white/5 py-24">
        {/* Dynamic Abstract Background */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ y: yBg }}
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,178,0.15),transparent_60%)] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,212,178,0.05),transparent_50%)] mix-blend-screen" />
          <AbstractNodes />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-jc-teal/30 bg-jc-teal/5 text-jc-teal text-sm font-bold tracking-widest uppercase">
                <Zap className="w-4 h-4" /> The Infrastructure Layer
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
                Why <span className="text-[#14B8A6] hover:text-[#6EDDD2] transition-colors cursor-default">Joint</span><br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-white hover:from-[#6EDDD2] transition-all cursor-default">Commerce</span>
              </h1>
              
              <div className="space-y-3 relative">
                 <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-jc-teal via-jc-teal/50 to-transparent rounded-full hidden md:block" />
                 <motion.p 
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
                   className="text-2xl text-white/50 font-bold uppercase tracking-widest"
                 >
                   Others sell impressions.
                 </motion.p>
                 <motion.p 
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
                   className="text-2xl text-white/70 font-bold uppercase tracking-widest"
                 >
                   Others sell listings.
                 </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-2xl text-jc-teal hover:text-jc-mint font-extrabold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(20,184,166,0.5)] transition-colors cursor-default"
                  >
                    Others sit inside one ecosystem.
                  </motion.p>
              </div>
            </motion.div>

            {/* Right: Interactive Kinetic Data Visualization */}
            <motion.div 
               className="relative h-[400px] w-full hidden lg:flex items-center justify-center perspective-[1000px]"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
            >
               <motion.div 
                 className="relative w-full h-full preserve-3d"
                 animate={{ rotateX: mousePos.y, rotateY: mousePos.x }}
                 transition={{ type: "spring", stiffness: 50, damping: 20 }}
               >
                 {/* Central Core */}
                 <div className="absolute inset-0 flex items-center justify-center transform-style-preserve-3d translate-z-[50px]">
                    <div className="w-32 h-32 rounded-full border-2 border-jc-teal flex items-center justify-center relative shadow-[0_0_50px_rgba(0,212,178,0.3)] bg-black/50 backdrop-blur-md">
                        <motion.div className="w-24 h-24 rounded-full bg-jc-teal/20 border border-jc-teal/50 flex flex-col items-center justify-center" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                          <span className="text-[10px] font-black tracking-widest text-[#6EDDD2]">CORE</span>
                        </motion.div>
                       
                       {/* Radiating Rings */}
                       <motion.div className="absolute inset-[-50px] border border-jc-teal/20 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                       <motion.div className="absolute inset-[-100px] border border-jc-teal/10 rounded-full border-dashed" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                    </div>
                 </div>

                 {/* Orbital Satellites */}
                 {[0, 120, 240].map((angle, i) => (
                    <motion.div 
                      key={i} 
                      className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff] translate-z-[100px]"
                      animate={{ 
                        x: [
                          Math.cos(angle * Math.PI / 180) * 150, 
                          Math.cos((angle + 360) * Math.PI / 180) * 150
                        ],
                        y: [
                          Math.sin(angle * Math.PI / 180) * 150,
                          Math.sin((angle + 360) * Math.PI / 180) * 150
                        ]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                 ))}
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Must Buy Grid ────────────────────────────────────── */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase"
            >
              Why We Are A <span className="text-transparent bg-clip-text bg-gradient-to-r from-jc-teal to-[#6EDDD2] hover:from-[#6EDDD2] hover:to-[#14B8A6] transition-all cursor-default">Must-Buy</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            {mustBuys.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: feature.delay, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col h-full overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-jc-teal/0 to-jc-teal/0 group-hover:from-jc-teal/10 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 border border-jc-teal/0 group-hover:border-jc-teal/50 rounded-3xl transition-colors duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:border-jc-teal/30 group-hover:shadow-[0_0_15px_rgba(0,212,178,0.2)] transition-all duration-300">
                    <motion.div 
                      className="text-white/70 group-hover:text-jc-teal transition-colors"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {React.cloneElement(feature.icon as any, { className: "w-6 h-6" })}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-extrabold text-white/90 leading-snug tracking-tight group-hover:text-white mt-auto">
                    {feature.title}
                  </h3>

                  {/* Micro-interaction line */}
                  <motion.div 
                    className="h-1 w-0 bg-jc-teal mt-6 rounded-full"
                    whileInView={{ width: "2rem" }}
                    transition={{ delay: feature.delay + 0.3, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Differentiator Full-Width Banner ────────────────────────────────────── */}
      <section className="py-24 relative border-t border-white/5 overflow-hidden">
        <FlowSvg />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0f] via-transparent to-[#0a0f0f] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#111]/80 backdrop-blur-xl border border-jc-teal/20 rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_0_50px_rgba(0,212,178,0.05)] relative overflow-hidden group"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,178,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-jc-teal/10 border border-jc-teal/30 mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Network className="w-8 h-8 text-jc-teal" />
            </motion.div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-8">
              What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-jc-teal to-[#6EDDD2] hover:from-[#6EDDD2] hover:to-[#14B8A6] transition-all cursor-default">Different</span>
            </h3>
            
            <p className="text-xl md:text-3xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto">
              JointCommerce controls discovery, activation, commerce routing, and revenue reporting in <strong className="text-jc-teal hover:text-jc-mint bg-jc-teal/20 px-2 rounded-md border border-jc-teal/30 transition-colors cursor-default">one infrastructure layer.</strong>
            </p>

            <motion.button 
              className="mt-12 inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-jc-mint transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Technology <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import brandCarouselVideo from '../static/marketing/videos/6802bef7f0d9c9a024a7960e_683890a46e00ce1107736896_Brand Carousel-transcode.mp4';

const solutions = [
  {
    title: "Private Inventory Marketplace of Compliant Website and App Publishers",
    content: "Run your ad placements across premium policy-compliant publishers such as ESPN, HGTV, Food Network, Hollywood Reporter, and more."
  },
  {
    title: "Proven Customer Acquisition and Retention Strategies",
    content: "Our meticulous approach to acquiring and retaining customers is rooted in our expert ability to drive target audiences down the purchase funnel to buy with lookalike modeling and retargeting."
  },
  {
    title: "Optimization Recommendation Engine",
    content: "Analyzes campaign trends and provides recommendations on improving campaign performance with data and analytics in real-time with self-service and managed service."
  },
  {
    title: "Proprietary Reporting and Analytics",
    content: "Measure online sales with closed-loop attribution for insightful campaign optimization and strategic decision-making."
  },
  {
    title: "Real-time Consumer Intelligence",
    content: "Provides valuable information about your customers, including their demographics, preferences, and purchase behaviors, engaging a deeper understanding of your target audience."
  }
];

const Svg1 = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,212,178,0.4)]">
     {/* Central Hub */}
     <motion.circle cx="200" cy="200" r="30" fill="#14B8A6" initial={{scale:0}} animate={{scale:1}} transition={{duration:0.6, type:"spring"}} />
     <motion.circle cx="200" cy="200" r="50" fill="none" stroke="#14B8A6" strokeWidth="2" animate={{scale:[1, 1.4, 1], opacity:[0.5, 0, 0.5]}} transition={{repeat: Infinity, duration: 2}} />
     
     {/* Orbiting nodes */}
     <motion.g animate={{rotate: 360}} transition={{repeat: Infinity, duration: 20, ease: "linear"}} style={{transformOrigin: "200px 200px"}}>
         <circle cx="200" cy="200" r="120" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="5 15" opacity="0.3"/>
         {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = angle * Math.PI / 180;
            const x = 200 + Math.cos(rad) * 120;
            const y = 200 + Math.sin(rad) * 120;
            return (
              <g key={i}>
                <line x1="200" y1="200" x2={x} y2={y} stroke="#14B8A6" strokeWidth="1" opacity="0.4" />
                <circle cx={x} cy={y} r="15" fill="#14B8A6" />
                {i > 0 && (
                   <line 
                      x1={200 + Math.cos((angle - 60) * Math.PI / 180) * 120} 
                      y1={200 + Math.sin((angle - 60) * Math.PI / 180) * 120} 
                      x2={x} 
                      y2={y} 
                      stroke="#14B8A6" strokeWidth="1" opacity="0.5" 
                   />
                )}
              </g>
            )
         })}
         <line 
            x1={200 + Math.cos(300 * Math.PI / 180) * 120} 
            y1={200 + Math.sin(300 * Math.PI / 180) * 120} 
            x2={200 + Math.cos(0) * 120} 
            y2={200 + Math.sin(0) * 120} 
            stroke="#14B8A6" strokeWidth="1" opacity="0.5" 
         />
     </motion.g>
  </svg>
);

const Svg2 = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,212,178,0.4)]">
    <motion.ellipse cx="200" cy="80" rx="140" ry="40" fill="none" stroke="#14B8A6" strokeWidth="4" initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} />
    <motion.ellipse cx="200" cy="160" rx="100" ry="30" fill="none" stroke="#14B8A6" strokeWidth="3" initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5, delay:0.2}} />
    <motion.ellipse cx="200" cy="240" rx="60" ry="20" fill="none" stroke="#6EDDD2" strokeWidth="2" initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5, delay:0.4}} />
    
    <motion.path d="M 60 80 L 140 240 M 340 80 L 260 240" stroke="#14B8A6" strokeWidth="2" opacity="0.5" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1}} />

    <motion.circle cx="200" cy="330" r="30" fill="#14B8A6" initial={{scale:0}} animate={{scale:1}} transition={{delay: 0.8, type:"spring"}} />
    <motion.line x1="200" y1="260" x2="200" y2="300" stroke="#14B8A6" strokeWidth="6" strokeDasharray="10 5" animate={{strokeDashoffset: [0, -30]}} transition={{repeat: Infinity, duration: 1, ease:"linear"}} />
    
    {[1,2,3,4,5].map((i) => (
       <motion.circle 
          key={i} 
          cx={100 + i*40} 
          cy={20} 
          r="6" 
          fill="#fff" 
          animate={{y: [0, 310], x: [0, 200-(100+i*40)], opacity: [0, 1, 0]}} 
          transition={{repeat: Infinity, duration: 2 + i*0.2, delay: i*0.4}} 
       />
    ))}
  </svg>
);

const Svg3 = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,212,178,0.4)]">
    <motion.g animate={{rotate: 360}} transition={{repeat: Infinity, duration: 15, ease: "linear"}} style={{transformOrigin: "150px 250px"}}>
       <circle cx="150" cy="250" r="70" fill="none" stroke="#14B8A6" strokeWidth="15" strokeDasharray="25 10"/>
       <circle cx="150" cy="250" r="50" fill="none" stroke="#14B8A6" strokeWidth="5" />
       <circle cx="150" cy="250" r="20" fill="#14B8A6" />
    </motion.g>
    
    <motion.g animate={{rotate: -360}} transition={{repeat: Infinity, duration: 10, ease: "linear"}} style={{transformOrigin: "270px 180px"}}>
       <circle cx="270" cy="180" r="45" fill="none" stroke="#14B8A6" strokeWidth="12" strokeDasharray="15 8"/>
       <circle cx="270" cy="180" r="25" fill="#14B8A6" />
    </motion.g>

    <motion.path 
       d="M 50 350 C 50 350, 80 150, 180 100 C 280 50, 350 80, 350 80" 
       fill="none" 
       stroke="#fff" 
       strokeWidth="6" 
       strokeLinecap="round"
       initial={{pathLength: 0}} 
       animate={{pathLength: 1}} 
       transition={{duration: 1.5, ease: "easeOut"}} 
    />
    <motion.polygon 
       points="330,60 365,75 340,100" 
       fill="#fff" 
       initial={{scale: 0}} 
       animate={{scale: 1}} 
       transition={{delay: 1.5}} 
    />
  </svg>
);

const Svg4 = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,212,178,0.4)]">
    <motion.rect x="40" y="60" width="320" height="260" rx="10" fill="none" stroke="#14B8A6" strokeWidth="4" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1}} />
    <motion.line x1="40" y1="100" x2="360" y2="100" stroke="#14B8A6" strokeWidth="4" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.5, delay:0.2}} />
    
    <circle cx="60" cy="80" r="4" fill="#ef4444" />
    <circle cx="75" cy="80" r="4" fill="#eab308" />
    <circle cx="90" cy="80" r="4" fill="#22c55e" />

    {[
      {x: 70, h: 80, delay: 0.5},
      {x: 110, h: 120, delay: 0.6},
      {x: 150, h: 60, delay: 0.7},
      {x: 190, h: 160, delay: 0.8},
      {x: 230, h: 100, delay: 0.9}
    ].map((bar, i) => (
      <motion.rect 
         key={i} 
         x={bar.x} 
         y={300 - bar.h} 
         width="20" 
         height={bar.h} 
         fill="#14B8A6" 
         initial={{scaleY:0, transformOrigin:"bottom"}} 
         animate={{scaleY:1}} 
         transition={{duration:0.8, delay: bar.delay}} 
      />
    ))}

    <motion.g initial={{scale:0}} animate={{scale:1}} transition={{delay: 1.2, type:"spring"}}>
       <circle cx="300" cy="170" r="40" fill="none" stroke="#ffffff" strokeWidth="12" strokeDasharray="200" strokeDashoffset="50"  />
       <circle cx="300" cy="170" r="40" fill="none" stroke="#14B8A6" strokeWidth="12" strokeDasharray="200" strokeDashoffset="180"  />
       <circle cx="300" cy="170" r="20" fill="#14B8A6" opacity="0.3" />
    </motion.g>

    <motion.path 
       d="M 80 200 L 120 160 L 160 220 L 200 120 L 240 180" 
       fill="none" 
       stroke="#fff" 
       strokeWidth="4" 
       initial={{pathLength:0}} 
       animate={{pathLength:1}} 
       transition={{duration:1.5, delay: 1}} 
    />
  </svg>
);

const Svg5 = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,212,178,0.4)]">
     <motion.path 
        d="M 220 50 C 150 50, 100 100, 100 170 C 100 220, 120 250, 140 280 L 140 330 L 280 330 L 280 250 C 310 220, 320 180, 320 140 C 320 80, 270 50, 220 50 Z" 
        fill="none" 
        stroke="#14B8A6" 
        strokeWidth="6" 
        initial={{pathLength:0}} 
        animate={{pathLength:1}} 
        transition={{duration:1.5}} 
     />
     <motion.circle cx="210" cy="170" r="80" fill="#14B8A6" opacity="0.1" animate={{scale:[1, 1.1, 1]}} transition={{repeat:Infinity, duration:4}} />
     <motion.circle cx="210" cy="170" r="30" fill="#14B8A6" animate={{scale:[1, 1.2, 1]}} transition={{repeat:Infinity, duration:2}} />
     
     {[
       {x: 160, y: 120}, {x: 260, y: 110},
       {x: 140, y: 180}, {x: 280, y: 170},
       {x: 170, y: 240}, {x: 250, y: 230},
     ].map((node, i) => (
       <g key={i}>
          <motion.circle cx={node.x} cy={node.y} r="8" fill="#fff" initial={{scale:0}} animate={{scale:1}} transition={{delay: 1 + i*0.1}} />
          <motion.line x1="210" y1="170" x2={node.x} y2={node.y} stroke="#fff" strokeWidth="2" opacity="0.4" initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay: 1.5 + i*0.1, duration: 0.5}} />
          <motion.circle cx={node.x} cy={node.y} r="15" fill="none" stroke="#fff" animate={{scale:[1, 1.5, 1], opacity:[0.5, 0, 0.5]}} transition={{repeat:Infinity, duration:2, delay: i*0.2}} />
       </g>
     ))}
  </svg>
);

const SVGs = [Svg1, Svg2, Svg3, Svg4, Svg5];

export function AdTechSolutions() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-[#0a0f0f] text-white overflow-hidden relative border-y border-white/5">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,178,0.05)_0%,transparent_70%)] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 lg:mb-20 text-left">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.2]"
             >
                Consistent and Reliable Ad Tech Solutions To Help You Grow Your Business
             </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
             {/* Accordion Left */}
             <div className="flex-1 w-full space-y-4">
                 {solutions.map((sol, idx) => {
                     const isOpen = openIndex === idx;
                     return (
                         <div key={idx} className={`border-b border-white/10 transition-all ${isOpen ? 'pb-6' : 'pb-4'}`}>
                             <button
                                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
                                onClick={() => setOpenIndex(idx)}
                             >
                                 <h3 className={`text-lg sm:text-xl md:text-2xl font-extrabold pr-8 transition-colors duration-300 tracking-tight ${isOpen ? 'text-[#14B8A6]' : 'text-white/70 hover:text-white'}`}>
                                     {sol.title}
                                 </h3>
                                 <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="flex-shrink-0">
                                     <ChevronDown className={`w-6 h-6 transition-colors ${isOpen ? 'text-[#14B8A6]' : 'text-white/30'}`} />
                                 </motion.div>
                             </button>
                             <AnimatePresence>
                                 {isOpen && (
                                     <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                     >
                                         <p className="text-white/70 leading-relaxed mb-6 font-medium text-sm md:text-base">
                                             {sol.content}
                                         </p>
                                         <Link 
                                            to="/solutions" 
                                            className="inline-block px-8 py-3 bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/30 transition-all font-semibold tracking-wide text-sm"
                                         >
                                            Learn More
                                         </Link>
                                     </motion.div>
                                 )}
                             </AnimatePresence>
                         </div>
                     );
                 })}
             </div>

             {/* Visuals Right */}
             <div className="flex-1 w-full relative min-h-[300px] lg:min-h-[500px] flex items-center justify-center lg:mt-0">
                 <AnimatePresence mode="wait">
                     <motion.div
                        key={openIndex}
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full max-w-sm md:max-w-md aspect-square relative flex items-center justify-center"
                     >
                         <div className="absolute inset-0 bg-[#14B8A6] blur-[100px] opacity-10 rounded-full pointer-events-none" />
                         {openIndex === 0 ? (
                             <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-full object-contain relative z-10 mix-blend-screen"
                             >
                                <source src={brandCarouselVideo} type="video/mp4" />
                             </video>
                         ) : (
                             (() => {
                                 const ActiveSvg = SVGs[openIndex];
                                 return ActiveSvg ? <ActiveSvg /> : null;
                             })()
                         )}
                     </motion.div>
                 </AnimatePresence>
             </div>
          </div>
       </div>
    </section>
  );
}

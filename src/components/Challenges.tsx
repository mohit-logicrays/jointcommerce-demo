import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const tabs = [
  {
    title: "Limited Advertising Options",
    content: "Strict restrictions on major platforms (e.g., Social media, Google) and traditional channels (Cable/Network TV) limit digital marketing opportunities.",
  },
  {
    title: "Sales\nAttribution",
    content: "Inconsistent and unreliable online sales data makes it difficult to determine campaign success.",
  },
  {
    title: "Black\nMarket & Increased\nCompetition",
    content: "Despite legalization, the black market persists, making it harder for legal businesses to attract customers. More legal licenses are being awarded everyday.",
  },
  {
    title: "Unfair\nTaxation",
    content: "High tax rates prevent your business from writing down operating expenses, increasing the need for a substantial ROI.",
  }
];

const Background0 = () => (
  <svg className="w-full h-full opacity-60" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
     <motion.path d="M 0 250 L 300 250 C 400 250, 400 100, 500 100 L 900 100" stroke="#00D4B2" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
     <motion.circle cx="900" cy="100" r="6" fill="#ef4444" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} />
     <motion.circle cx="900" cy="100" r="12" fill="none" stroke="#ef4444" strokeWidth="2" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} />

     <motion.path d="M 0 250 L 300 250 C 400 250, 400 350, 500 350 L 800 350" stroke="#00D4B2" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }} />
     <motion.circle cx="800" cy="350" r="6" fill="#ef4444" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
     <motion.circle cx="800" cy="350" r="12" fill="none" stroke="#ef4444" strokeWidth="2" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />

     <motion.path d="M 0 250 L 950 250" stroke="#00D4B2" strokeWidth="5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }} />
     
     <motion.path d="M 0 250 L 300 250 C 400 250, 400 180, 500 180 L 850 180" stroke="#00D4B2" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }} />
     <motion.circle cx="850" cy="180" r="6" fill="#ef4444" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
     <motion.circle cx="850" cy="180" r="12" fill="none" stroke="#ef4444" strokeWidth="2" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} />
  </svg>
);

const Background1 = () => (
  <svg className="w-full h-full opacity-60" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
     <motion.path d="M 0 250 C 150 450, 250 100, 450 150 S 650 450, 850 350 S 950 400, 1000 400" stroke="#00D4B2" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
     <g transform="translate(450, 150)">
       <motion.circle cx="0" cy="0" r="6" fill="#00D4B2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
       <motion.circle cx="0" cy="0" r="16" fill="none" stroke="#00D4B2" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} />
     </g>
     <g transform="translate(250, 270)">
       <motion.circle cx="0" cy="0" r="6" fill="#ef4444" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
       <motion.circle cx="0" cy="0" r="16" fill="none" stroke="#ef4444" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
     </g>
     <g transform="translate(620, 310)">
       <motion.circle cx="0" cy="0" r="6" fill="#ef4444" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
       <motion.circle cx="0" cy="0" r="16" fill="none" stroke="#ef4444" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
     </g>
     <g transform="translate(850, 350)">
       <motion.circle cx="0" cy="0" r="6" fill="#00D4B2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
       <motion.circle cx="0" cy="0" r="16" fill="none" stroke="#00D4B2" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 1.5 }} />
     </g>
  </svg>
);

const Background2 = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-tr from-[#3a0000]/30 to-transparent">
     <div className="absolute inset-0 bg-[#0a0f0f] mix-blend-multiply" />
     <motion.div 
       className="text-red-500/20 font-mono text-[18px] md:text-[24px] tracking-widest break-all px-10 select-none text-center leading-loose font-bold"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1 }}
     >
        {Array.from({ length: 10 }).map((_, i) => (
           <motion.div key={i} className="whitespace-nowrap" animate={{ x: i % 2 === 0 ? [-20, 20] : [20, -20] }} transition={{ duration: 10 + i, repeat: Infinity, repeatType: 'reverse' }}>
              01011101001100001011101000110100101101111000100
           </motion.div>
        ))}
     </motion.div>
     {/* Red glow pulse */}
     <motion.div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
  </div>
);

const Background3 = () => (
  <svg className="w-full h-full opacity-60" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
     <motion.path d="M 0 450 L 200 150 L 350 350 L 500 100 L 700 400 L 900 150 L 1000 250" stroke="#991b1b" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
     
     <motion.g animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
        <rect x="150" y="200" width="100" height="60" rx="4" fill="#1f2937" stroke="#4b5563" strokeWidth="2" transform="rotate(-15 150 200)" />
        <circle cx="200" cy="230" r="16" fill="#374151" />
     </motion.g>

     <motion.g animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1 }}>
        <rect x="550" y="250" width="80" height="40" fill="#064e3b" stroke="#059669" strokeWidth="2" transform="rotate(25 550 250)" />
        <circle cx="590" cy="270" r="8" fill="#10b981" />
     </motion.g>

     <motion.g animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }}>
         <rect x="700" y="80" width="160" height="200" rx="6" fill="#374151" stroke="#6b7280" strokeWidth="3" transform="rotate(-5 700 80)" />
         <rect x="715" y="100" width="130" height="40" fill="#9ca3af" />
         <text x="735" y="130" fill="#111827" fontSize="28" fontWeight="bold">$$$$$</text>
         {/* keys */}
         <rect x="720" y="160" width="30" height="30" fill="#1f2937" />
         <rect x="760" y="160" width="30" height="30" fill="#1f2937" />
         <rect x="800" y="160" width="30" height="30" fill="#1f2937" />
         
         <rect x="720" y="200" width="30" height="30" fill="#1f2937" />
         <rect x="760" y="200" width="30" height="30" fill="#1f2937" />
         <rect x="800" y="200" width="30" height="30" fill="#1f2937" />
         
         <rect x="720" y="240" width="30" height="30" fill="#1f2937" />
         <rect x="760" y="240" width="30" height="30" fill="#1f2937" />
         <rect x="800" y="240" width="30" height="30" fill="#1f2937" />
     </motion.g>
  </svg>
);

export function Challenges() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pt-24 pb-8 md:pb-16 bg-[#0a0f0f] overflow-hidden relative border-y border-white/5 font-sans min-h-[700px] flex flex-col">
      
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <AnimatePresence mode="crossfade">
            {activeTab === 0 && <motion.div key="0" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Background0 /></motion.div>}
            {activeTab === 1 && <motion.div key="1" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Background1 /></motion.div>}
            {activeTab === 2 && <motion.div key="2" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Background2 /></motion.div>}
            {activeTab === 3 && <motion.div key="3" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Background3 /></motion.div>}
         </AnimatePresence>
         {/* Fade gradient over SVG backgrounds so bottom row pops */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f0f]/40 to-[#0a0f0f] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between w-full h-full">
        
        {/* Header Block exactly matching screenshot layout (inline purple block) */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight">
             <span className="text-white px-3 py-1 leading-snug box-decoration-clone inline-block">
                Navigate the Challenges of Digital Advertising
             </span>
          </h2>
        </div>

        {/* Tab Row mapped horizontally based on the image */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-auto">
           {tabs.map((tab, i) => (
              <div 
                 key={i} 
                 className="relative group cursor-pointer lg:mt-64"
                 onMouseEnter={() => setActiveTab(i)}
              >
                  {/* The Popup Card that floats right above this box when active */}
                  <AnimatePresence>
                     {activeTab === i && (
                        <motion.div 
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: 5 }}
                           transition={{ duration: 0.2 }}
                           className="absolute bottom-[calc(100%+12px)] left-0 w-full min-w-[280px] bg-[#111] border border-white/20 p-6 z-50 pointer-events-auto"
                        >
                           <h3 className="text-lg font-bold text-[#bcf4e9] mb-4 whitespace-pre-line tracking-wide">
                              {tab.title}
                           </h3>
                           <p className="text-[#cccccc] text-sm mb-6 leading-relaxed font-medium">
                              {tab.content}
                           </p>
                           <Link 
                              to="/solutions" 
                              className="inline-block w-full text-center px-4 py-3 border border-white/30 rounded-lg hover:border-jc-teal hover:text-white transition-colors text-white font-medium text-sm bg-transparent"
                           >
                              Discover More
                           </Link>
                        </motion.div>
                     )}
                  </AnimatePresence>

                  {/* The Bottom Box Outline */}
                  <div className={`w-full p-4 lg:p-6 border transition-all h-[100px] flex items-center ${
                     activeTab === i ? 'border-white/40 bg-white/5' : 'border-white/10 hover:border-white/30 bg-black/40 backdrop-blur-sm'
                  }`}>
                     <h3 className={`font-bold whitespace-pre-line text-sm lg:text-base transition-colors ${
                        activeTab === i ? 'text-[#bcf4e9]' : 'text-gray-400'
                     }`}>
                        {tab.title}
                     </h3>
                  </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}

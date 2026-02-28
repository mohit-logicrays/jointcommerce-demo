import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STATE_PATHS } from './statePaths';

// Positions of dispensary dots on the AlbersUSA 960x600 projection, scaled to our 960x600 viewBox
// These represent major cannabis market locations across the US
const DISPENSARY_DOTS: Array<{ id: string; x: number; y: number; r?: number; pulse?: boolean }> = [
  // Pacific Northwest
  { id: 'wa1', x: 112, y: 65, r: 4, pulse: true },
  { id: 'wa2', x: 130, y: 72, r: 3 },
  { id: 'or1', x: 100, y: 140, r: 4 },
  { id: 'or2', x: 116, y: 155, r: 3 },

  // California
  { id: 'ca1', x: 73, y: 205, r: 5, pulse: true },  // SF
  { id: 'ca2', x: 68, y: 240, r: 4 },
  { id: 'ca3', x: 78, y: 265, r: 4 },               // LA
  { id: 'ca4', x: 86, y: 280, r: 3 },
  { id: 'ca5', x: 60, y: 220, r: 3 },

  // Mountain West
  { id: 'nv1', x: 128, y: 218, r: 4 },
  { id: 'co1', x: 253, y: 225, r: 5, pulse: true },
  { id: 'co2', x: 270, y: 235, r: 3 },
  { id: 'mt1', x: 222, y: 88, r: 4 },
  { id: 'id1', x: 165, y: 130, r: 3 },
  { id: 'az1', x: 175, y: 295, r: 4 },

  // Plains / Midwest
  { id: 'ok1', x: 365, y: 290, r: 3 },
  { id: 'ks1', x: 348, y: 248, r: 3 },
  { id: 'mo1', x: 435, y: 248, r: 4 },
  { id: 'mn1', x: 398, y: 130, r: 4, pulse: true },
  { id: 'ia1', x: 420, y: 190, r: 3 },
  { id: 'ne1', x: 330, y: 195, r: 3 },
  { id: 'sd1', x: 300, y: 155, r: 3 },
  { id: 'nd1', x: 295, y: 110, r: 3 },

  // Great Lakes
  { id: 'il1', x: 458, y: 220, r: 4 },
  { id: 'il2', x: 462, y: 235, r: 3 },
  { id: 'mi1', x: 500, y: 175, r: 4, pulse: true },
  { id: 'mi2', x: 515, y: 165, r: 3 },
  { id: 'wi1', x: 461, y: 160, r: 3 },
  { id: 'oh1', x: 540, y: 215, r: 4 },
  { id: 'oh2', x: 555, y: 225, r: 3 },
  { id: 'in1', x: 498, y: 230, r: 3 },
  { id: 'ky1', x: 513, y: 263, r: 3 },

  // Southeast
  { id: 'tx1', x: 340, y: 355, r: 5, pulse: true }, // Dallas
  { id: 'tx2', x: 365, y: 380, r: 4 },              // Houston
  { id: 'tx3', x: 305, y: 390, r: 3 },
  { id: 'fl1', x: 578, y: 370, r: 5, pulse: true }, // Miami
  { id: 'fl2', x: 555, y: 345, r: 4 },
  { id: 'fl3', x: 570, y: 325, r: 3 },
  { id: 'ga1', x: 555, y: 305, r: 4 },
  { id: 'nc1', x: 590, y: 270, r: 4 },
  { id: 'sc1', x: 580, y: 295, r: 3 },
  { id: 'va1', x: 592, y: 245, r: 4 },
  { id: 'tn1', x: 520, y: 280, r: 4 },
  { id: 'al1', x: 508, y: 310, r: 3 },
  { id: 'ms1', x: 480, y: 320, r: 3 },
  { id: 'la1', x: 450, y: 360, r: 4 },
  { id: 'ar1', x: 445, y: 305, r: 3 },

  // Northeast
  { id: 'ny1', x: 665, y: 175, r: 5, pulse: true },  // NYC
  { id: 'ny2', x: 650, y: 165, r: 3 },
  { id: 'pa1', x: 640, y: 210, r: 4 },
  { id: 'nj1', x: 670, y: 210, r: 4, pulse: true },
  { id: 'ct1', x: 677, y: 190, r: 3 },
  { id: 'ma1', x: 703, y: 170, r: 4, pulse: true },
  { id: 'ma2', x: 715, y: 173, r: 3 },
  { id: 'md1', x: 654, y: 228, r: 3 },
  { id: 'dc1', x: 652, y: 234, r: 3, pulse: true },
  { id: 'de1', x: 662, y: 220, r: 3 },
  { id: 'ri1', x: 709, y: 178, r: 3 },
  { id: 'vt1', x: 686, y: 150, r: 3 },
  { id: 'nh1', x: 697, y: 148, r: 3 },
  { id: 'me1', x: 726, y: 128, r: 4 },
  { id: 've1', x: 683, y: 155, r: 3 },

  // Large circle overlays (like in the reference image)
  { id: 'circ_ca', x: 73, y: 205, r: 45, pulse: false },
  { id: 'circ_wa', x: 110, y: 63, r: 25, pulse: false },
  { id: 'circ_co', x: 252, y: 225, r: 35, pulse: false },
  { id: 'circ_tx', x: 338, y: 355, r: 40, pulse: false },
  { id: 'circ_fl', x: 575, y: 370, r: 35, pulse: false },
  { id: 'circ_ne', x: 495, y: 165, r: 30, pulse: false },
  { id: 'circ_ny', x: 665, y: 175, r: 28, pulse: false },
  { id: 'circ_nc', x: 640, y: 285, r: 25, pulse: false },
];

// Separate out the circle overlays vs dot markers
const CIRCLE_OVERLAYS = DISPENSARY_DOTS.filter(d => d.r && d.r > 10);
const DOT_MARKERS = DISPENSARY_DOTS.filter(d => !d.r || d.r <= 8);
const PULSING_DOTS = DOT_MARKERS.filter(d => d.pulse);

// Viewbox dimensions matching d3 AlbersUSA translate([480, 300]) scale(1300)
const VB_W = 960;
const VB_H = 600;

function BlinkingDot({ x, y, r = 4, delay = 0, key }: { x: number; y: number; r?: number; delay?: number; key?: React.Key }) {
  return (
    <g>
      {/* Pulsing outer ring */}
      <motion.circle
        cx={x} cy={y} r={r + 6}
        fill="none" stroke="#14B8A6" strokeWidth="1"
        animate={{ r: [r + 4, r + 14, r + 4], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeOut' }}
      />
      {/* Solid core dot */}
      <motion.circle
        cx={x} cy={y} r={r}
        fill="#14B8A6"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, delay, ease: 'easeInOut' }}
      />
    </g>
  );
}

function StaticDot({ x, y, r = 4, delay = 0, key }: { x: number; y: number; r?: number; delay?: number; key?: React.Key }) {
  return (
    <motion.circle
      cx={x} cy={y} r={r}
      fill="#14B8A6"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.9, scale: 1 }}
      transition={{ duration: 0.4, delay }}
    />
  );
}

interface StateProps {
  name: string;
  d: string;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  key?: React.Key;
}

function StateShape({ name, d, isHovered, onEnter, onLeave }: StateProps) {
  return (
    <motion.path
      d={d}
      fill={isHovered ? 'rgba(110,221,210,0.15)' : 'rgba(255,255,255,0.03)'}
      stroke={isHovered ? '#14B8A6' : '#4b5563'}
      strokeWidth={isHovered ? 1.5 : 1}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      animate={{
        fill: isHovered ? 'rgba(110,221,210,0.15)' : 'rgba(255,255,255,0.03)',
        stroke: isHovered ? '#14B8A6' : '#4b5563',
      }}
      transition={{ duration: 0.2 }}
      style={{ cursor: 'pointer' }}
    >
      <title>{name}</title>
    </motion.path>
  );
}

function USAMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(20,184,166,0.08))' }}
      >
        {/* State fills */}
        <g>
          {Object.entries(STATE_PATHS).map(([name, d]) => (
            <StateShape
              key={name}
              name={name}
              d={d}
              isHovered={hoveredState === name}
              onEnter={() => setHoveredState(name)}
              onLeave={() => setHoveredState(null)}
            />
          ))}
        </g>

        {/* Large circle overlays (like in reference image) */}
        <g>
          {CIRCLE_OVERLAYS.map((dot, i) => (
            <motion.circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill="none"
              stroke="#14B8A6"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            />
          ))}
        </g>

        {/* Static dots */}
        <g>
          {DOT_MARKERS.filter(d => !d.pulse).map((dot, i) => (
            <StaticDot
              key={dot.id}
              x={dot.x}
              y={dot.y}
              r={dot.r}
              delay={0.8 + i * 0.04}
            />
          ))}
        </g>

        {/* Blinking / pulsing dots */}
        <g>
          {PULSING_DOTS.map((dot, i) => (
            <BlinkingDot
              key={dot.id}
              x={dot.x}
              y={dot.y}
              r={dot.r}
              delay={i * 0.4}
            />
          ))}
        </g>

        {/* Tooltip for hovered state */}
        {hoveredState && (() => {
          // Simple centroid approximation: we'll just show a text label
          return null; // handled by <title> for native tooltip
        })()}
      </svg>

      {/* Hovered state label badge
      {hoveredState && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-[#14B8A6]/40 text-[#14B8A6] px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm pointer-events-none"
        >
          {hoveredState}
        </motion.div>
      )} */}
    </div>
  );
}

export function AdvertisingPlatform() {
  return (
    <section className="w-full bg-[#050505] text-white py-16 md:py-24 border-b border-white/5 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">

          {/* Left Text Content */}
          <div className="w-full lg:w-[38%] text-left z-10 lg:pr-6 shrink-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[2.6rem] font-bold leading-[1.15] mb-5 tracking-tight"
            >
              The <span className="text-jc-teal hover:text-jc-mint transition-colors cursor-default">#1</span> Cannabis Advertising Platform — Powering <span className="text-jc-teal hover:text-jc-mint transition-colors cursor-default">12,000+</span> Dispensary Menus
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#a1a1a1] text-base md:text-lg font-medium mb-10 leading-relaxed"
            >
              A premium publisher marketplace connected directly to SEO-powered dispensary menus — turning <span className="text-jc-teal font-semibold hover:text-jc-mint transition-colors cursor-default">A21+ cannabis demand</span> into <span className="text-jc-teal font-semibold hover:text-jc-mint transition-colors cursor-default">measurable online sales</span> for cannabis and non-cannabis brands
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button className="px-7 py-3 bg-jc-teal hover:bg-jc-mint text-black font-semibold rounded-[4px] transition-colors text-sm whitespace-nowrap">
                Request Demo
              </button>
              <button className="px-7 py-3 bg-transparent border border-jc-teal text-jc-teal hover:bg-jc-teal/10 font-semibold rounded-[4px] transition-colors text-sm whitespace-nowrap">
                View Marketplace
              </button>
            </motion.div>

            {/* Flow legend */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] text-gray-400 font-medium"
            >
              {['Publisher Ad', 'Product Page', 'Dispensary Menu', 'Checkout'].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-1.5">
                  <span className="text-gray-300">{step}</span>
                  {i < arr.length - 1 && (
                    <span className="flex items-center gap-0.5 text-[#14B8A6]">
                      <span className="w-1.5 h-1.5 rounded-full border border-[#14B8A6]" />
                      <span className="tracking-widest text-[9px]">- - -</span>
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-[#14B8A6]">
                        <path d="M3 2l6 4-6 4V2z"/>
                      </svg>
                    </span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Map */}
          <div className="w-full lg:w-[62%] relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Subtle green ambient glow behind the map */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(20,184,166,0.06),transparent)] pointer-events-none" />
              <USAMap />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

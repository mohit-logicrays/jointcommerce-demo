"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// Contextual SVG Icons — each tells the story of its step
// ─────────────────────────────────────────────────────────────────────────────

/** Step 1: A21+ cannabis shopper reaching across premium publishers (TV/phone/display) */
function IconReach({ on }: { on: boolean }) {
  const s = on ? '#6EDDD2' : '#14B8A6';
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Broadcast / signal source */}
      <circle cx="60" cy="52" r="10" stroke={s} strokeWidth="2" fill={on ? `${s}18` : 'none'} />
      {/* Signal rings */}
      {[22, 34, 46].map((r, i) => (
        <motion.circle key={r} cx="60" cy="52" r={r} stroke={s} strokeWidth="1.3" strokeDasharray="5 4"
          animate={{ opacity: on ? [0.2, 0.7, 0.2] : 0.35 }}
          transition={{ duration: 1.8, delay: i * 0.35, repeat: Infinity }} />
      ))}
      {/* TV screen */}
      <rect x="10" y="76" width="28" height="20" rx="3" stroke={s} strokeWidth="1.8" fill={on ? `${s}15` : 'none'} />
      <motion.polygon points="19,82 19,90 27,86" fill={s}
        animate={{ opacity: on ? [0.5, 1, 0.5] : 0.6 }} transition={{ duration: 1.6, repeat: Infinity }} />
      {/* Phone */}
      <rect x="48" y="78" width="14" height="22" rx="3" stroke={s} strokeWidth="1.8" fill={on ? `${s}15` : 'none'} />
      <line x1="52" y1="97" x2="58" y2="97" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
      {/* Display billboard */}
      <rect x="82" y="76" width="28" height="20" rx="3" stroke={s} strokeWidth="1.8" fill={on ? `${s}15` : 'none'} />
      <line x1="88" y1="82" x2="104" y2="82" stroke={s} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="88" y1="87" x2="98" y2="87" stroke={s} strokeWidth="1.2" strokeLinecap="round" />
      {/* A21+ label pill */}
      <rect x="46" y="14" width="28" height="14" rx="7" stroke={s} strokeWidth="1.5" fill={on ? `${s}20` : 'none'} />
      <text x="60" y="25" fontSize="7.5" fill={s} textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A21+</text>
      {/* Leaf icon at center */}
      <motion.path d="M60 43 C60 43 56 47 56 51 C56 54 58 56 60 57 C62 56 64 54 64 51 C64 47 60 43 60 43Z"
        stroke={s} strokeWidth="1.3" fill={on ? `${s}30` : 'none'}
        animate={{ scale: on ? [1, 1.15, 1] : 1, originX: '60px', originY: '52px' }}
        transition={{ duration: 1.4, repeat: Infinity }} />
    </svg>
  );
}

/** Step 2: Brand placement on a dispensary ecommerce menu (cart + store + tag) */
function IconActivate({ on }: { on: boolean }) {
  const s = on ? '#6EDDD2' : '#14B8A6';
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Dispensary storefront */}
      <rect x="25" y="54" width="70" height="46" rx="3" stroke={s} strokeWidth="2" fill={on ? `${s}08` : 'none'} />
      <path d="M20 54 L40 30 L80 30 L100 54" stroke={s} strokeWidth="2" strokeLinejoin="round" fill={on ? `${s}10` : 'none'} />
      {/* Door */}
      <rect x="50" y="75" width="20" height="25" rx="2" stroke={s} strokeWidth="1.6" fill={on ? `${s}15` : 'none'} />
      <circle cx="67" cy="88" r="2" fill={s} />
      {/* Product shelf lines on wall */}
      <line x1="32" y1="68" x2="48" y2="68" stroke={s} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="32" y1="73" x2="48" y2="73" stroke={s} strokeWidth="1" strokeLinecap="round" />
      <line x1="72" y1="68" x2="88" y2="68" stroke={s} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="72" y1="73" x2="88" y2="73" stroke={s} strokeWidth="1" strokeLinecap="round" />
      {/* Brand placement tag floating above */}
      <motion.g animate={{ y: on ? [0, -4, 0] : 0 }} transition={{ duration: 1.8, repeat: Infinity }}>
        <rect x="42" y="14" width="36" height="18" rx="4" stroke={s} strokeWidth="1.6" fill={on ? `${s}20` : '#111'} />
        <text x="60" y="27" fontSize="7" fill={s} textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">CO-BRAND</text>
      </motion.g>
      {/* Arrow from tag to store */}
      <motion.path d="M60 32 L60 49" stroke={s} strokeWidth="1.3" strokeDasharray="3 3" strokeLinecap="round"
        animate={{ strokeDashoffset: on ? [0, -12] : 0 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
      <path d="M56 48 L60 54 L64 48" stroke={s} strokeWidth="1.3" strokeLinejoin="round" fill="none" />
      {/* 12,000 label */}
      <text x="60" y="110" fontSize="7" fill={s} textAnchor="middle" fontFamily="sans-serif" opacity="0.7">12,000+ menus</text>
    </svg>
  );
}

/** Step 3: Shopper engaging with product page / store / brand natively */
function IconEngage({ on }: { on: boolean }) {
  const s = on ? '#6EDDD2' : '#14B8A6';
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Product card */}
      <rect x="30" y="20" width="60" height="70" rx="6" stroke={s} strokeWidth="2" fill={on ? `${s}08` : 'none'} />
      {/* Product image area */}
      <rect x="38" y="28" width="44" height="30" rx="3" stroke={s} strokeWidth="1.5" fill={on ? `${s}12` : 'none'} />
      {/* Leaf on product */}
      <motion.path d="M60 34 C60 34 55 40 55 44 C55 48 57 50 60 51 C63 50 65 48 65 44 C65 40 60 34 60 34Z"
        stroke={s} strokeWidth="1.4" fill={on ? `${s}30` : 'none'}
        animate={{ scale: on ? [1, 1.1, 1] : 1 }} style={{ originX: '60px', originY: '44px' }}
        transition={{ duration: 1.5, repeat: Infinity }} />
      {/* Product name lines */}
      <line x1="39" y1="64" x2="81" y2="64" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="39" y1="70" x2="70" y2="70" stroke={s} strokeWidth="1" strokeLinecap="round" />
      {/* Rating stars */}
      {[0,1,2,3,4].map(j => (
        <motion.polygon key={j}
          points={`${42+j*8},78 ${43+j*8},81 ${46+j*8},81 ${44+j*8},83 ${45+j*8},86 ${42+j*8},84 ${39+j*8},86 ${40+j*8},83 ${38+j*8},81 ${41+j*8},81`}
          fill={j < 4 ? s : 'none'} stroke={s} strokeWidth="0.8"
          animate={{ scale: on && j < 4 ? [1, 1.15, 1] : 1 }}
          transition={{ duration: 1.5, delay: j * 0.1, repeat: Infinity }} />
      ))}
      {/* Cursor / tap interaction */}
      <motion.g animate={{ x: on ? [0, 6, 2, 6, 0] : 0, y: on ? [0, -3, 0] : 0 }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
        <path d="M90 85 L94 100 L97 93 L104 98 L100 85 Z" stroke={s} strokeWidth="1.5" fill={on ? `${s}25` : 'none'} strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

/** Step 4: Real order / attribution — checkout + rising bar chart + checkmark */
function IconConvert({ on }: { on: boolean }) {
  const s = on ? '#6EDDD2' : '#14B8A6';
  const bars = [28, 42, 35, 55, 68];
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Bar chart */}
      {bars.map((h, i) => (
        <motion.rect key={i} x={14 + i * 14} y={90 - h} width="10" height={h} rx="2"
          fill={on ? `${s}25` : 'none'} stroke={s} strokeWidth="1.5"
          animate={on ? { height: [h - 5, h + 8, h - 5], y: [90 - h + 5, 90 - h - 8, 90 - h + 5] } : {}}
          transition={{ duration: 1.8, delay: i * 0.12, repeat: Infinity, repeatType: 'mirror' }} />
      ))}
      <line x1="10" y1="90" x2="85" y2="90" stroke={s} strokeWidth="1.3" />
      {/* Trend line over bars */}
      <motion.path d="M19 82 L33 68 L47 74 L61 50 L75 38"
        stroke={s} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3, repeat: on ? Infinity : 0, repeatDelay: 2 }} />
      {/* Attribution checkmark circle */}
      <motion.circle cx="98" cy="36" r="17" stroke={s} strokeWidth="2" fill={on ? `${s}12` : 'none'}
        animate={{ scale: on ? [1, 1.07, 1] : 1 }} transition={{ duration: 1.8, repeat: Infinity }} />
      <motion.path d="M89 36 L95 42 L107 28" stroke={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }} />
      {/* LIVE order chip */}
      <motion.rect x="12" y="10" width="40" height="16" rx="8" stroke={s} strokeWidth="1.4"
        fill={on ? `${s}15` : 'none'}
        animate={{ opacity: on ? [0.6, 1, 0.6] : 0.7 }} transition={{ duration: 1.2, repeat: Infinity }} />
      <circle cx="21" cy="18" r="3" fill={s} />
      <text x="32" y="22" fontSize="7" fill={s} textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">ORDER</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Connector arrow — fixed in middle row, never touches text
// ─────────────────────────────────────────────────────────────────────────────
function ConnectorArrow({ glow }: { glow: boolean }) {
  const c = glow ? '#6EDDD2' : 'rgba(20,184,166,0.45)';
  return (
    <div className="hidden lg:flex items-center justify-center w-14 xl:w-20 flex-shrink-0 self-center" style={{ marginTop: '-20px' }}>
      <svg viewBox="0 0 64 18" className="w-full" fill="none">
        <motion.line x1="0" y1="9" x2="54" y2="9"
          stroke={c} strokeWidth="1.5" strokeDasharray="5 4"
          animate={{ strokeDashoffset: [0, -18] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }} />
        <motion.circle cx="6" cy="9" r="3.5" fill="none" stroke={c} strokeWidth="1.5"
          animate={{ scale: glow ? [1, 1.35, 1] : 1 }} transition={{ duration: 1, repeat: Infinity }} />
        <path d="M52 5 L60 9 L52 13" stroke={c} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: 1,
    label: 'Reach A21+',
    body: 'cannabis shoppers across premium publishers and omnichannel media',
    Icon: IconReach,
  },
  {
    num: 2,
    label: 'Activate',
    body: 'co-brand placements across 12,000+ dispensary ecommerce menus',
    Icon: IconActivate,
  },
  {
    num: 3,
    label: 'Engage',
    body: 'shoppers natively at product, brand, and store level',
    Icon: IconEngage,
  },
  {
    num: 4,
    label: 'Convert & Measure',
    body: 'real online orders with full attribution',
    Icon: IconConvert,
  },
];

export function HowItWorks() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black py-20 md:py-28 overflow-hidden border-b border-white/5">
      {/* Very subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,184,166,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(20,184,166,0.07),transparent)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-tight tracking-tight">
            How <span className="text-[#14B8A6] hover:text-[#6EDDD2] transition-colors cursor-default">JointCommerce</span> <span className="text-[#14B8A6] hover:text-[#6EDDD2] transition-colors cursor-default">Works</span>{' '}
            <span className="font-light text-white/45">(Why Others Can't)</span>
          </h2>
        </motion.div>

        {/* ── Main row: [Icon] → [Icon] → [Icon] → [Icon] ── */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
          {STEPS.map((step, i) => {
            const isOn = hovered === i;
            return (
              <div key={i} className="flex flex-col lg:flex-row items-center lg:items-stretch flex-1">

                {/* Step card */}
                <motion.div
                  className="flex flex-col items-center text-center cursor-pointer w-full lg:max-w-[230px] xl:max-w-[260px] mx-auto"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.13, duration: 0.45 }}
                >
                  {/* Step number badge */}
                  <div className={`mb-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 ${isOn ? 'text-[#6EDDD2]' : 'text-[#14B8A6]/60'}`}>
                    Step {step.num}
                  </div>

                  {/* SVG Icon box */}
                  <motion.div
                    className="relative w-36 h-36 md:w-40 md:h-40 mb-6"
                    animate={{ scale: isOn ? 1.06 : 1 }}
                    transition={{ duration: 0.22 }}
                  >
                    {isOn && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ boxShadow: '0 0 50px 12px rgba(110,221,210,0.12)' }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
                      />
                    )}
                    <step.Icon on={isOn} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    {step.label}
                  </h3>

                  {/* Description */}
                  <p className={`text-base md:text-[1.05rem] leading-relaxed transition-colors duration-200 max-w-[220px] ${isOn ? 'text-white/80' : 'text-white/45'}`}>
                    {step.body}
                  </p>
                </motion.div>

                {/* Arrow connector — only between steps, never near text */}
                {i < STEPS.length - 1 && (
                  <ConnectorArrow glow={hovered === i || hovered === i + 1} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

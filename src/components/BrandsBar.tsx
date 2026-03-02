"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Individual brand components rendered as inline SVGs / styled text matching the screenshot
const CuraleafLogo = () => (
  <span className="font-semibold tracking-widest text-white text-[13px] uppercase">curaleaf</span>
);

const WanaLogo = () => (
  <span className="flex items-center gap-1.5 text-white">
    {/* Stylized "W" leaf icon */}
    <svg viewBox="0 0 28 28" className="w-7 h-7 fill-white">
      <path d="M14 2 C14 2 8 10 8 16 C8 20 10 23 14 25 C18 23 20 20 20 16 C20 10 14 2 14 2Z M10 14 C10 14 6 16 5 20 C8 21 11 20 13 18Z M18 14 C18 14 22 16 23 20 C20 21 17 20 15 18Z" />
    </svg>
    <span className="font-bold tracking-wide text-[14px]">wana</span>
  </span>
);

const UnrivaledLogo = () => (
  <span className="font-black tracking-[0.2em] text-white text-[11px] uppercase">UNRIVALED.</span>
);

const AristocraftLogo = () => (
  <span className="flex items-center gap-1.5 text-white">
    <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
      <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 20 L16 10 L22 20 Z M12 17 H20" />
    </svg>
    <span className="text-[10px] leading-none font-semibold uppercase tracking-wider">
      <span className="block">THE</span>
      <span className="block">ARTIST</span>
      <span className="block">TREE</span>
    </span>
  </span>
);

const BuddiesLogo = () => (
  <span className="flex items-center gap-1.5 text-white">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
      <circle cx="12" cy="8" r="5" />
      <path d="M5 22 C5 16 19 16 19 22" />
    </svg>
    <span className="font-bold tracking-wider text-[13px]">Buddies</span>
  </span>
);

const EmeraldLogo = () => (
  <span className="flex items-center justify-center w-8 h-8 border-2 border-white rounded text-white font-black text-lg leading-none">
    E
  </span>
);

const JettyLogo = () => (
  <span className="flex flex-col items-start text-white leading-none">
    <span className="font-black text-[16px] tracking-widest uppercase">JETTY</span>
    <span className="text-[7px] tracking-[0.15em] text-white/70 uppercase">EXTRACTS</span>
  </span>
);

const CatalystLogo = () => (
  <span className="flex flex-col items-center leading-none text-white">
    <span className="font-black text-[14px] tracking-[0.25em] uppercase">CATALYST</span>
    <span className="text-[7px] tracking-[0.12em] text-white/60 uppercase">CANNABIS DISPENSARY</span>
  </span>
);

const SparcLogo = () => (
  <span className="font-light tracking-[0.35em] text-white text-[14px] uppercase">sparc</span>
);

const DeepRootsLogo = () => (
  <span className="flex items-center gap-1.5 text-white">
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
      <path d="M12 2 C12 2 6 7 6 12 C6 17 9 20 12 22 C15 20 18 17 18 12 C18 7 12 2 12 2 Z" />
      <path d="M12 12 L12 22" stroke="white" strokeWidth="1.5" />
      <path d="M12 17 L8 14" stroke="white" strokeWidth="1" />
      <path d="M12 15 L16 12" stroke="white" strokeWidth="1" />
    </svg>
    <span className="text-[10px] font-bold uppercase leading-none tracking-wide">
      <span className="block">deep</span>
      <span className="block">roots</span>
      <span className="block">harvest</span>
    </span>
  </span>
);

const VibeLogo = () => (
  <span className="text-white italic font-black text-[18px] tracking-wide">Vibe</span>
);

const SmoaklandLogo = () => (
  <span className="flex items-center gap-1.5 text-white">
    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white opacity-80">
      <path d="M10 2 C10 2 7 6 7 9 C7 12 8 14 10 15 C12 14 13 12 13 9 C13 6 10 2 10 2Z" />
    </svg>
    <span className="font-bold tracking-[0.15em] text-[12px] uppercase">SmoakLanD</span>
  </span>
);

const BRANDS = [
  { id: 'curaleaf', element: <CuraleafLogo /> },
  { id: 'wana', element: <WanaLogo /> },
  { id: 'unrivaled', element: <UnrivaledLogo /> },
  { id: 'artisttree', element: <AristocraftLogo /> },
  { id: 'buddies', element: <BuddiesLogo /> },
  { id: 'emerald', element: <EmeraldLogo /> },
  { id: 'jetty', element: <JettyLogo /> },
  { id: 'catalyst', element: <CatalystLogo /> },
  { id: 'sparc', element: <SparcLogo /> },
  { id: 'deeproots', element: <DeepRootsLogo /> },
  { id: 'vibe', element: <VibeLogo /> },
  { id: 'smoakland', element: <SmoaklandLogo /> },
];

// Duplicate for seamless infinite scroll
const ALL_BRANDS = [...BRANDS, ...BRANDS];

export function BrandsBar() {
  return (
    <section className="w-full bg-[#0a0a0a] border-y border-white/5 py-5 overflow-hidden">
      <div className="relative flex overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <motion.div
          className="flex items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: 'max-content' }}
        >
          {ALL_BRANDS.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex items-center justify-center px-8 md:px-12 opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0"
            >
              {brand.element}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

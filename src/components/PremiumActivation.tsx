import { AnimatedBeam } from './ui/animated-beam';
import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Handshake, Eye, ShieldCheck, Network, Archive, Smartphone } from 'lucide-react';
import logoImage from '../static/marketing/logos/logo-without-text.png';

/* ─── Stagger parent variant ────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

/* ─── Individual node card ──────────────────────────────────────── */
const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

/* ─── Mobile list item ──────────────────────────────────────────── */
const mobileItemVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 110, damping: 16 },
  },
};

/* ─── Center logo ───────────────────────────────────────────────── */
const centerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.1 },
  },
};

/* ─── Heading line ──────────────────────────────────────────────── */
const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const subVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

/* ─────────────────────────────────────────────────────────────────── */

export function PremiumActivation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  const beamProps = {
    pathColor: '#00D4B2', // Teal line
    pathOpacity: 0.3,     // Increased opacity for visibility
    gradientStartColor: '#0efbba', // Bright mint
    gradientStopColor: '#00D4B2', // jc-teal
  };

  const particles = React.useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      xStart: (Math.random() - 0.5) * 800,
      yStart: (Math.random() - 0.5) * 500,
      xEnd: (Math.random() - 0.5) * 100,
      yEnd: Math.random() * -150 - 50,
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 5,
      size: Math.random() * 2 + 2,
    }));
  }, []);

  /**
   * Layout fixes:
   * By using left: 0px and right: 0px with translateY(-50%) ONLY,
   * we ensure the cards are pinned to the absolute edges of the max-width container,
   * making it impossible for them to overlap the centered logo.
   */
  const leftNodes = [
    { ref: node1Ref, icon: <Handshake className="w-5 h-5 text-jc-teal" />, text: 'DIRECT PUBLISHER\nRELATIONSHIPS', top: '15%' },
    { ref: node3Ref, icon: <ShieldCheck className="w-5 h-5 text-jc-teal" />, text: 'VERIFIED A21+ AUDIENCE\nDEPLOYMENT', top: '50%' },
    { ref: node5Ref, icon: <Archive className="w-5 h-5 text-jc-teal" />, text: 'POLICY-ALIGNED\nPRIVATE INVENTORY', top: '85%' },
  ];

  const rightNodes = [
    { ref: node2Ref, icon: <Eye className="w-5 h-5 text-jc-teal" />, text: '100% VIEWABLE\nIMPRESSION STANDARDS', top: '15%' },
    { ref: node4Ref, icon: <Network className="w-5 h-5 text-jc-teal" />, text: 'URL & APP-LEVEL\nTRANSPARENCY', top: '50%' },
    { ref: node6Ref, icon: <Smartphone className="w-5 h-5 text-jc-teal" />, text: 'CROSS-DEVICE\nREPORTING', top: '85%' },
  ];

  const allNodes = [
    ...leftNodes.map(n => ({ ...n, side: 'left' as const, style: { top: n.top, left: '0px', transform: 'translateY(-50%)' } })),
    ...rightNodes.map(n => ({ ...n, side: 'right' as const, style: { top: n.top, right: '0px', transform: 'translateY(-50%)' } })),
  ];

  const beamNodes = [
    { from: node1Ref, reverse: true,  curvature: 0 },
    { from: node3Ref, reverse: true,  curvature: 0 },
    { from: node5Ref, reverse: true,  curvature: 0 },
    { from: node2Ref, reverse: false, curvature: 0 },
    { from: node4Ref, reverse: false, curvature: 0 },
    { from: node6Ref, reverse: false, curvature: 0 },
  ];

  const iconBox = (icon: React.ReactNode, index: number) => (
    <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0
                    shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] transition-all duration-500
                    relative z-10 group-hover:shadow-[0_0_15px_rgba(0,212,178,0.3)]
                    group-hover:bg-[#111]">
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
      >
        {icon}
      </motion.div>
    </div>
  );

  return (
    <section className="py-24 md:py-32 bg-white text-jc-dark overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-jc-light-teal/10 via-white to-white" />

      <div className="max-w-[80rem] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-16 lg:mb-4">
          <motion.h2
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight uppercase mb-4"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-gradient-to-r from-jc-teal via-[#5ce6d0] to-jc-teal bg-[length:200%_auto] text-transparent bg-clip-text inline-block"
              animate={{ backgroundPosition: ['0% center', '200% center'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              PREMIUM ACTIVATION
            </motion.span>
          </motion.h2>

          <motion.div
            className="mx-auto h-[3px] bg-gradient-to-r from-transparent via-jc-teal to-transparent rounded-full mb-5"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ width: '200px' }}
          />

          <motion.p
            className="text-lg lg:text-xl xl:text-2xl font-bold tracking-tight uppercase text-gray-500"
            variants={subVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            PREMIUM INVENTORY. FULL TRANSPARENCY.
          </motion.p>
        </div>

        {/* ── Desktop Node Graph ─────────────────────────────────── */}
        <div
          ref={containerRef}
          className="relative w-full mx-auto hidden lg:block h-[550px] xl:h-[650px] max-w-6xl"
          onMouseMove={handleMouseMove}
        >
          {/* Cursor glow overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-[5] rounded-3xl overflow-hidden"
            style={{ WebkitMaskImage: maskImage, maskImage }}
          >
            <div className="absolute inset-0 bg-jc-teal/5 rounded-3xl mix-blend-multiply" />
          </motion.div>

          {/* ── Floating Particles ─────────────────────────────── */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-jc-teal/60 blur-[1px]"
                style={{
                  width: p.size,
                  height: p.size,
                  left: '50%',
                  top: '50%',
                  boxShadow: '0 0 10px 2px rgba(0,212,178,0.4)',
                }}
                initial={{ x: p.xStart, y: p.yStart, opacity: 0, scale: 0 }}
                animate={{
                  x: p.xStart + p.xEnd,
                  y: p.yStart + p.yEnd,
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                }}
              />
            ))}
          </div>

          {/* ── Animated Beams ─────────────────────────────────── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {beamNodes.map((b, i) => (
              <AnimatedBeam
                key={i}
                containerRef={containerRef}
                fromRef={b.from}
                toRef={centerNodeRef}
                reverse={b.reverse}
                curvature={b.curvature}
                {...beamProps}
              />
            ))}
          </div>

          {/* ── Center Logo ────────────────────────────────────── */}
          <motion.div
            ref={centerNodeRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                       w-36 h-36 xl:w-44 xl:h-44 rounded-full bg-[#0a0a0a]
                       flex flex-col items-center justify-center
                       shadow-[0_0_60px_rgba(0,212,178,0.25)]
                       border-4 border-[#e0fcf6]
                       cursor-pointer group hover:border-[#bcf4e9] transition-colors"
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 rounded-full bg-jc-teal/5 group-hover:bg-jc-teal/10 transition-colors pointer-events-none" />
            
            {/* Pulsing rings */}
            <motion.span
              className="absolute inset-0 rounded-full border border-jc-teal/50"
              animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-jc-teal/30"
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.33 }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-jc-teal/10"
              animate={{ scale: [1, 1.85, 1], opacity: [0.15, 0, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.66 }}
            />
            <img 
              src={logoImage} 
              alt="JointCommerce" 
              className="w-14 h-14 xl:w-16 xl:h-16 mb-2 object-contain filter brightness-0 invert drop-shadow-[0_0_12px_rgba(0,212,178,0.4)] transition-transform duration-500 group-hover:scale-110" 
            />
            <span className="text-[10px] xl:text-[12px] font-black tracking-widest text-white relative z-10">
              JOINTCOMMERCE
            </span>
          </motion.div>

          {/* ── Outer Node Cards ───────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full h-full"
          >
            {allNodes.map((node, index) => {
              const isLeft = node.side === 'left';
              return (
                <motion.div
                  key={index}
                  ref={node.ref}
                  className={`absolute flex items-center gap-4
                              bg-white
                              border border-gray-100/60
                              shadow-sm
                              px-5 py-4 rounded-3xl
                              max-w-[320px] w-max
                              whitespace-pre-line text-[12px] xl:text-[13px]
                              font-[800] tracking-wide leading-[1.5]
                              z-20 cursor-default
                              transition-all duration-300 ease-out
                              group
                              ${isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                  style={node.style}
                  variants={nodeVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon badge */}
                  {iconBox(node.icon, index)}
                  {/* Label */}
                  <span className="text-gray-900 group-hover:text-black transition-colors relative z-10">
                    {node.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Mobile Layout ──────────────────────────────────────── */}
        <div className="lg:hidden flex flex-col gap-4 mt-8 relative z-10 w-full max-w-[320px] mx-auto">

          {/* Mobile Center Badge */}
          <motion.div
            className="self-center w-32 h-32 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center
                       shadow-[0_8px_30px_rgba(0,212,178,0.25)] border-4 border-[#e0fcf6] mb-6 relative"
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Pulsing rings */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-jc-teal/50"
              animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-jc-teal/30"
              animate={{ scale: [1, 1.55, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.33 }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-jc-teal/10"
              animate={{ scale: [1, 1.75, 1], opacity: [0.15, 0, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.66 }}
            />
            <img 
              src={logoImage} 
              alt="JointCommerce" 
              className="w-12 h-12 mb-1 object-contain filter brightness-0 invert drop-shadow-[0_0_10px_rgba(0,212,178,0.4)]" 
            />
            <span className="text-[10px] font-black tracking-widest text-white">JOINTCOMMERCE</span>
          </motion.div>

          {/* Mobile Node Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {allNodes.map((node, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="flex items-center gap-4 bg-white border border-gray-100
                           shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                           px-5 py-4 rounded-3xl
                           hover:border-jc-teal/20
                           transition-all duration-300 group"
                variants={mobileItemVariants}
              >
                {iconBox(node.icon, index)}
                <span className="text-[12px] font-[900] tracking-widest text-gray-900 leading-[1.5] whitespace-pre-line group-hover:text-black">
                  {node.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import brandCarouselVideo from '../static/marketing/videos/6802bef7f0d9c9a024a7960e_683890a46e00ce1107736896_Brand Carousel-transcode.mp4';

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 60;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(Math.round((target / steps) * i));
      if (i >= steps) { clearInterval(interval); setDisplayed(target); }
    }, 18);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{displayed.toLocaleString()}{suffix}</span>;
}

// ── SVG helpers ───────────────────────────────────────────────────────────────
function PremiumBadge() {
  return (
    <svg viewBox="0 0 28 28" className="w-5 h-5 shrink-0" fill="none">
      <motion.circle cx="14" cy="14" r="11" stroke="#00c98b" strokeWidth="1.5"
        animate={{ rotate: 360 }} style={{ originX: '14px', originY: '14px' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />
      <path d="M14 8l1.6 3.4 3.8.6-2.8 2.6.7 3.7L14 16.6l-3.3 1.7.7-3.7L9 12l3.8-.6Z" fill="#00c98b" />
    </svg>
  );
}

function CheckIcon({ delay = 0 }: { delay?: number }) {
  return (
    <svg viewBox="0 0 18 18" className="w-4.5 h-4.5 w-[18px] h-[18px] shrink-0" fill="none">
      <motion.path d="M3.5 9 L7.5 13 L14.5 5.5"
        stroke="#00c98b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.45, delay }} />
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function CommerceNetwork() {
  const checks = [
    'Direct Publisher Access',
    'Brand-Safe & Protected',
    'National Scale, Local Precision',
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden py-14 md:py-20">

      {/* Soft green radial glows that match the dark green theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] bg-[radial-gradient(ellipse_at_80%_50%,rgba(0,180,80,0.10),transparent_70%)]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] h-[70%] bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,120,50,0.07),transparent_65%)]" />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">

          {/* ══ LEFT: Stats + Video ════════════════════════════════════════════ */}
          <div className="w-full lg:w-[52%] flex flex-col gap-5">

            {/* Stat pillars */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-8"
            >
              {/* Monthly reach */}
              <div>
                <div className="flex items-center gap-1.5 text-[#00c98b] text-[11px] font-semibold uppercase tracking-widest mb-1.5">
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="#00c98b" strokeWidth="1.4">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M8 2 C8 2 5 5 5 8 C5 11 8 14 8 14 C8 14 11 11 11 8 C11 5 8 2 8 2Z" />
                    <line x1="1.5" y1="8" x2="14.5" y2="8" />
                  </svg>
                  Monthly reach
                </div>
                <div className="flex items-center gap-2 text-white font-black text-[2.4rem] leading-none">
                  <AnimatedNumber target={12} /><span>.0M</span>
                  {/* Trend arrow */}
                  <svg viewBox="0 0 34 18" className="w-8 h-5" fill="none">
                    <path d="M2 16 L9 8 L17 12 L32 2" stroke="#00c98b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26 2 H32 V8" stroke="#00c98b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="w-px h-10 bg-white/10" />

              {/* Avg viewability */}
              <div>
                <div className="flex items-center gap-1.5 text-[#00c98b] text-[11px] font-semibold uppercase tracking-widest mb-1.5">
                  <svg viewBox="0 0 20 14" className="w-4 h-3.5" fill="none" stroke="#00c98b" strokeWidth="1.4">
                    <path d="M1 7 C4 1.5 16 1.5 19 7 C16 12.5 4 12.5 1 7Z" strokeLinecap="round" />
                    <circle cx="10" cy="7" r="2.5" fill="#00c98b" />
                  </svg>
                  Avg viewability
                </div>
                <div className="text-white font-black text-[2.4rem] leading-none">
                  <AnimatedNumber target={85} suffix="%" />
                </div>
              </div>
            </motion.div>

            {/* Video panel — blended into the dark green theme */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative flex-1 rounded-2xl overflow-hidden border border-[#00c98b]/15 bg-black"
              style={{ minHeight: 280 }}
            >
              {/* Video — luminosity blend so its colours mix with the green bg */}
              <video
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
                style={{ minHeight: 280 }}
              >
                <source src={brandCarouselVideo} type="video/mp4" />
              </video>

              {/* Dark colour wash to blend video */}
              <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />

              {/* Edge fades into black section bg */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-black to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* ══ RIGHT: Copy ═════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[48%] flex flex-col justify-center gap-0 relative">

            {/* Decorative network SVG — very subtle */}
            <svg viewBox="0 0 180 120" className="absolute -right-4 -top-4 w-40 opacity-[0.06] pointer-events-none" fill="none">
              {[[30,20],[90,50],[140,30],[110,90],[50,80]].map(([x,y],i,arr) => (
                <line key={i} x1={x} y1={y} x2={arr[(i+1)%arr.length][0]} y2={arr[(i+1)%arr.length][1]} stroke="#00c98b" strokeWidth="1.2" />
              ))}
              {[[30,20],[90,50],[140,30],[110,90],[50,80]].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="3.5" fill="#00c98b" />
              ))}
            </svg>

            {/* Premium & Direct */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-2 mb-5"
            >
              <PremiumBadge />
              <span className="text-[#00c98b] text-xs font-semibold tracking-[0.18em] uppercase">Premium &amp; Direct</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[2.8rem] md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-4"
            >
              Premium Publisher<br />Marketplace
            </motion.h2>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="text-white/50 text-base md:text-[1.05rem] font-medium mb-7"
            >
              A True Premium Publisher Marketplace
            </motion.p>

            {/* Divider */}
            <motion.div className="h-px bg-white/[0.08] mb-7 origin-left"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.22 }} />

            {/* Checklist */}
            <ul className="space-y-4 mb-9">
              {checks.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00c98b]/12 shrink-0 group-hover:bg-[#00c98b]/22 transition-colors">
                    <CheckIcon delay={0.38 + i * 0.1} />
                  </span>
                  <span className="text-white/80 text-[0.97rem] md:text-base font-medium group-hover:text-white transition-colors leading-snug">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Animated Ring Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.52 }}
              className="flex items-center gap-5 bg-white/[0.05] border border-white/[0.09] rounded-xl p-4 hover:border-[#00c98b]/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Ring */}
              <div className="relative w-14 h-14 shrink-0">
                <svg viewBox="0 0 56 56" className="w-14 h-14 -rotate-90">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                  <motion.circle
                    cx="28" cy="28" r="22" fill="none" stroke="#00c98b" strokeWidth="6" strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 22}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
                    whileInView={{ strokeDashoffset: (2 * Math.PI * 22) * 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold">85%</span>
              </div>
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-[0.16em] font-semibold mb-0.5">Average Viewability</p>
                <p className="text-white font-bold text-base leading-tight">Above Industry Standard</p>
                <p className="text-[#00c98b] text-xs font-semibold mt-0.5">Industry avg: ~52%</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import shoppableVideo from '../static/marketing/videos/Comp dsds1.mp4';
import ctvVideo from '../static/marketing/videos/Frosted NUG CTV.mp4';

// ── Animated counter — mount-based (works inside AnimatePresence) ─────────────
function Counter({ value, suffix = '' }: { value: number | string; suffix?: string }) {
  const [n, setN] = useState(0);
  const isNum = typeof value === 'number';

  useEffect(() => {
    if (!isNum) return;
    setN(0);
    const duration = 1200; // ms
    const start = performance.now();
    const target = value as number;
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    // small delay so AnimatePresence entrance completes first
    const t = setTimeout(() => { raf = requestAnimationFrame(tick); }, 80);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{isNum ? n.toLocaleString() : value}{suffix}</>;
}

// ── Ad images served via /creative/* (bypasses ad-blocker /ads/ filter) ────────
const adIlera       = '/creative/AYO/v1/Ilera - Ask - 300x250.jpg';
const adAiroNY      = '/creative/Airo Ny/Airo Ny/AIRO_NY_300x250.jpg';
const adAuraMav1    = '/creative/Aura finals/Aura finals/MA/v1/Aura_v1_MA_300x250.jpg';
const adAuraMav2    = '/creative/Aura finals/Aura finals/MA/v2/Aura_v2_MA_300x250.jpg';
const adBlueOak     = '/creative/BlueOak 15% Off/BlueOak 15% Off/BlueOak_Sale_300x250.jpg';
const adDime        = '/creative/DIME Finals/DIME Finals/DIME_300x250.jpg';
const adFlowerPower = '/creative/FlowerPower/FlowerPower_300x250.jpg';
const adLowell      = '/creative/Lowell Dec Finals/Lowell Dec Finals/Lowell_300x250.jpg';
const adNJPure      = '/creative/NJ Pure Final/NJ Pure Final/NJPURE_300x250.jpg';
const adRoam        = '/creative/ROAM/v1/ROAM_v1_300x250.jpg';
const adTheTrust    = '/creative/TheTrust/TheTrust_300x250.jpg';

// Leaderboard (728×90)
const adIlera728    = '/creative/AYO/v1/Ilera - Ask - 728x90.jpg';
const adAiro728     = '/creative/Airo Ny/Airo Ny/AIRO_NY__728x90.jpg';
const adBlueOak728  = '/creative/BlueOak 15% Off/BlueOak 15% Off/BlueOak_Sale_728x90.jpg';
const adLowell728   = '/creative/Lowell Dec Finals/Lowell Dec Finals/Lowell_728x90.jpg';


// ── Carousel hook ─────────────────────────────────────────────────────────────
function useCarousel(items: string[], intervalMs = 2500) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % items.length), intervalMs);
    return () => clearInterval(t);
  }, [items.length, intervalMs]);
  return idx;
}

// ── Preview: Display (browser with leaderboard + rectangle carousels) ─────────
const DISPLAY_LEADER = [adIlera728, adAiro728, adBlueOak728, adLowell728];
const DISPLAY_RECT   = [adIlera, adAiroNY, adAuraMav1, adAuraMav2, adBlueOak, adDime];

function PreviewDisplay() {
  const li = useCarousel(DISPLAY_LEADER, 2800);
  const ri = useCarousel(DISPLAY_RECT, 2200);
  return (
    <div className="w-full h-full bg-[#111] rounded-xl overflow-hidden flex flex-col border border-white/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1e1e1e] border-b border-white/5 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" /><span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" /><span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <div className="ml-2 flex-1 bg-white/10 rounded h-4 text-[9px] text-white/30 flex items-center px-2 font-mono">dispensary.com/shop</div>
      </div>
      {/* Leaderboard banner */}
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: '14%' }}>
        <AnimatePresence mode="wait">
          <motion.img key={li} src={DISPLAY_LEADER[li]} alt="ad"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} />
        </AnimatePresence>
      </div>
      {/* Page body */}
      <div className="flex flex-1 min-h-0 gap-2 p-2">
        {/* Fake content */}
        <div className="flex-1 space-y-1.5">
          {[80,60,90,50,70,55].map((w,i) => <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${w}%` }} />)}
        </div>
        {/* 300×250 rectangle ad */}
        <div className="relative rounded overflow-hidden border border-white/10 flex-shrink-0" style={{ width: '35%' }}>
          <AnimatePresence mode="wait">
            <motion.img key={ri} src={DISPLAY_RECT[ri]} alt="ad"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ── Preview: Online Video (player frame + ad image as preroll) ────────────────
const VIDEO_ADS = [adFlowerPower, adLowell, adTheTrust, adRoam, adNJPure];

function PreviewVideo() {
  const vi = useCarousel(VIDEO_ADS, 3000);
  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden relative border border-white/10">
      <AnimatePresence mode="wait">
        <motion.img key={vi} src={VIDEO_ADS[vi]} alt="preroll"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }} />
      </AnimatePresence>
      {/* Preroll overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Skip chip */}
      <div className="absolute top-3 right-3 bg-black/70 text-white text-[9px] px-2 py-1 rounded">Skip in 5s ›</div>
      {/* Progress bar */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10">
        <motion.div className="h-full bg-[#00c98b]" animate={{ width: ['0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity }} />
      </div>
      {/* SPONSORED badge */}
      <div className="absolute bottom-4 left-3 bg-black/70 text-[#00c98b] text-[9px] font-bold px-2 py-1 rounded tracking-wider">SPONSORED · IN-STREAM</div>
    </div>
  );
}

// ── Preview: CTV (TV frame + real video) ──────────────────────────────────────
function PreviewCTV() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a] rounded-xl p-3">
      {/* TV bezel */}
      <div className="relative w-full rounded-lg overflow-hidden border-[6px] border-[#222] shadow-2xl" style={{ aspectRatio: '16/9', maxHeight: '85%' }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={ctvVideo} type="video/mp4" />
        </video>
        {/* Channel bug */}
        <div className="absolute top-2 right-2 bg-black/70 text-[#00c98b] text-[9px] font-bold px-2 py-0.5 rounded tracking-widest">● LIVE AD</div>
      </div>
      {/* TV stand */}
      <div className="flex justify-center gap-14 mt-0">
        <div className="w-2 h-5 bg-[#222] rounded-b" style={{ transform: 'rotate(15deg)', transformOrigin: 'top' }} />
        <div className="w-2 h-5 bg-[#222] rounded-b" style={{ transform: 'rotate(-15deg)', transformOrigin: 'top' }} />
      </div>
      <div className="w-28 h-2 bg-[#222] rounded mt-0.5" />
    </div>
  );
}

// ── Preview: Mobile In-App (two phones, auto-cycling real ads) ────────────────
const MOBILE_ADS_REAL = [adIlera, adAiroNY, adDime, adNJPure, adRoam, adLowell, adTheTrust];

function PreviewMobileApp() {
  const left  = useCarousel(MOBILE_ADS_REAL, 2400);
  const right = useCarousel(MOBILE_ADS_REAL, 3100);
  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-xl flex items-center justify-center gap-4 px-6">
      {[left, right].map((adIdx, pi) => (
        <div key={pi} className="flex-1 max-w-[44%] bg-[#1a1a1a] rounded-[18px] overflow-hidden border border-white/10 shadow-xl"
          style={{ aspectRatio: '9/16' }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-[#111]">
            <span className="text-white/30 text-[7px]">9:41</span>
            <div className="w-4 h-2 rounded-sm bg-white/20" />
          </div>
          {/* App header skeleton */}
          <div className="px-2 py-1.5 bg-[#141414]">
            <div className="h-1.5 bg-white/10 rounded w-3/4 mb-1" />
            <div className="h-1 bg-white/6 rounded w-1/2" />
          </div>
          {/* Ad slot — real image carousel */}
          <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
            <AnimatePresence mode="wait">
              <motion.img key={adIdx} src={MOBILE_ADS_REAL[adIdx]} alt="in-app ad"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.55 }} />
            </AnimatePresence>
            <div className="absolute bottom-1 right-1 bg-black/70 text-[#00c98b] text-[7px] font-bold px-1.5 py-0.5 rounded tracking-wider">SPONSORED</div>
          </div>
          {/* Content below ad */}
          <div className="px-2 py-2 space-y-1">
            {[70,50,80,40].map((w,i) => <div key={i} className="h-1 bg-white/8 rounded" style={{ width: `${w}%` }} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Preview: Social (phone with feed + real ad) ───────────────────────────────
const SOCIAL_ADS = [adAuraMav1, adAuraMav2, adFlowerPower, adBlueOak, adDime];

function PreviewSocial() {
  const si = useCarousel(SOCIAL_ADS, 2600);
  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-xl flex items-center justify-center">
      <div className="bg-[#1a1a1a] rounded-[22px] overflow-hidden border border-white/10 shadow-2xl" style={{ width: '52%', aspectRatio: '9/16' }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-3 py-1 bg-[#111]">
          <span className="text-white/30 text-[7px]">9:41</span>
          <div className="w-4 h-1.5 bg-white/20 rounded-sm" />
        </div>
        {/* Instagram-like header */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/6">
          <span className="text-white text-[9px] font-bold">instagram</span>
          <span className="text-white/40 text-[9px]">♡ ✉</span>
        </div>
        {/* Story bar */}
        <div className="flex gap-1.5 px-3 py-2 border-b border-white/5">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-7 h-7 rounded-full border ${i===1?'border-[#00c98b]':'border-white/20'} bg-white/10`} />
              <div className="h-1 w-5 bg-white/10 rounded" />
            </div>
          ))}
        </div>
        {/* Sponsored post with real ad */}
        <div>
          <div className="flex items-center gap-2 px-3 py-1.5">
            <div className="w-5 h-5 rounded-full bg-[#00c98b]/30 border border-[#00c98b]/50" />
            <div><div className="h-1.5 w-14 bg-white/20 rounded mb-0.5" /><div className="text-[#00c98b] text-[6px]">Sponsored</div></div>
          </div>
          <div className="relative" style={{ aspectRatio: '1/1' }}>
            <AnimatePresence mode="wait">
              <motion.img key={si} src={SOCIAL_ADS[si]} alt="social ad"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }} />
            </AnimatePresence>
          </div>
          <div className="px-3 py-1.5 flex gap-2 text-[10px]">
            <span className="text-white/60">♥</span><span className="text-white/40">💬</span><span className="text-white/40">↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Preview: On-Menu (dispensary menu + rotating ad) ──────────────────────────
const MENU_ADS = [adIlera, adAiroNY, adBlueOak, adDime, adNJPure];

function PreviewOnMenu() {
  const mi = useCarousel(MENU_ADS, 2400);
  return (
    <div className="w-full h-full bg-[#0f0f0f] rounded-xl overflow-hidden border border-white/10 flex flex-col">
      {/* Menu header */}
      <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/8 flex items-center gap-2 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#00c98b]/40" />
        <span className="text-white/60 text-[10px] font-medium">LeaflyMenu · Dispensary Co-Brand Placement</span>
      </div>
      <div className="flex flex-1 min-h-0 gap-3 p-3">
        {/* Product rows */}
        <div className="flex-1 space-y-2">
          {['Indica', 'Sativa', 'Hybrid', 'Edibles'].map((cat, i) => (
            <div key={cat} className={`flex items-center gap-2 p-2 rounded-lg ${i===0?'border border-[#00c98b]/40 bg-[#00c98b]/5':'bg-white/4'}`}>
              <div className="w-8 h-8 rounded-md bg-white/10 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="h-1.5 bg-white/20 rounded w-3/4 mb-1" />
                <div className="h-1 bg-white/10 rounded w-1/2" />
              </div>
              {i===0 && <span className="text-[#00c98b] text-[7px] font-bold border border-[#00c98b]/50 px-1 py-0.5 rounded flex-shrink-0">FEATURED</span>}
            </div>
          ))}
        </div>
        {/* Co-brand ad tile */}
        <div className="relative w-[38%] flex-shrink-0 rounded-xl overflow-hidden border border-[#00c98b]/25">
          <AnimatePresence mode="wait">
            <motion.img key={mi} src={MENU_ADS[mi]} alt="co-brand ad"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }} />
          </AnimatePresence>
          <div className="absolute bottom-1 inset-x-0 text-center">
            <span className="bg-[#00c98b] text-black text-[7px] font-black px-1.5 py-0.5 rounded">CO-BRAND AD</span>
          </div>
        </div>
      </div>
    </div>
  );
}



// ── Accordion data ─────────────────────────────────────────────────────────────
const ACCORDION_ITEMS = [
  {
    title: 'Display (Premium Web & Mobile)',
    features: [
      'Drive Conversions',
      'Reach the Right Audience',
      'Audience availability',
      'Reach A21+ cannabis shoppers across premium publishers',
      'Scale Efficiently',
    ],
    stat1Label: 'Monthly reach', stat1Value: 800, stat1Suffix: 'K',
    stat2Label: 'Avg viewability', stat2Value: 90, stat2Suffix: '%',
    Preview: PreviewDisplay,
  },
  {
    title: 'Online Video (In-stream & Out-stream)',
    features: [
      'Pre-roll & mid-roll brand placements',
      'Unskippable brand moments',
      'Contextual & behavioral targeting',
      'Brand-safe premium environments',
      'High completion rates at scale',
    ],
    stat1Label: 'Monthly reach', stat1Value: 1200, stat1Suffix: 'K',
    stat2Label: 'Completion rate', stat2Value: 75, stat2Suffix: '%',
    Preview: PreviewVideo,
  },
  {
    title: 'Connected TV (CTV)',
    features: [
      'Living room screen dominance',
      'Non-skippable 15–30 sec spots',
      'A21+ household-level targeting',
      'Premium streaming network access',
      'Full-screen, lean-back attention',
    ],
    stat1Label: 'Monthly reach', stat1Value: 600, stat1Suffix: 'K',
    stat2Label: 'Completion rate', stat2Value: 95, stat2Suffix: '%',
    Preview: PreviewCTV,
  },
  {
    title: 'Mobile In-App',
    features: [
      'Native in-app placements at scale',
      'Location-aware proximity targeting',
      'Within miles of dispensary locations',
      'High-impact interstitial formats',
      'Session-time audience accuracy',
    ],
    stat1Label: 'Monthly reach', stat1Value: 900, stat1Suffix: 'K',
    stat2Label: 'Avg CTR', stat2Value: 28, stat2Suffix: '%',
    Preview: PreviewMobileApp,
  },
  {
    title: 'Social (Meta / Instagram where compliant)',
    features: [
      'Compliant social activations',
      'Lookalike A21+ audience targeting',
      'Story, feed & reel placements',
      'Influencer co-brand amplification',
      'Interest & behavior segmentation',
    ],
    stat1Label: 'Monthly reach', stat1Value: 450, stat1Suffix: 'K',
    stat2Label: 'Engagement rate', stat2Value: 45, stat2Suffix: '%',
    Preview: PreviewSocial,
  },
  {
    title: 'On-Menu Co-Brand Placements (12,000+ Dispensaries)',
    features: [
      'Native brand placement on dispensary menus',
      'Product-level and category-level visibility',
      'Direct add-to-cart purchase pathway',
      'Real-time menu data integration',
      'Co-op funded by brand partners',
    ],
    stat1Label: 'Menus active', stat1Value: '12K+' as unknown as number, stat1Suffix: '',
    stat2Label: 'Avg conversion lift', stat2Value: 82, stat2Suffix: '%',
    Preview: PreviewOnMenu,
  },
];

// ── Main component ─────────────────────────────────────────────────────────────
export function ShoppableMedia() {
  const [open, setOpen] = useState(0);
  const active = ACCORDION_ITEMS[open];

  return (
    <section className="py-16 md:py-24 bg-[#9ef0d4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Hero: text + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 lg:pr-8"
          >
            <div className="space-y-4 text-lg sm:text-xl text-jc-dark/80 leading-relaxed">
              <p>
                Our advanced <span className="font-semibold text-jc-dark">Demand Side Platform (DSP)</span> and{' '}
                <span className="font-semibold text-jc-dark">Consumer Data Platform (CDP)</span> maximize advertising
                effectiveness to help you accomplish your business objectives.
              </p>
              <p>
                We navigate strict advertising restrictions, find new customers, and boost sales growth. Our unique
                buying practices optimize your ad placement across curated publishers and drive positive ROI.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {['DSP Technology', 'CDP Integration', 'Positive ROI'].map(tag => (
                <span key={tag} className="bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/80 shadow-sm text-jc-dark font-semibold text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* TV mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative w-full"
          >
            <div className="relative z-10 bg-[#111] rounded-lg p-2 md:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border-2 border-gray-800 aspect-[16/9] overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-sm">
                <source src={shoppableVideo} type="video/mp4" />
              </video>
            </div>
            <div className="absolute top-0 inset-x-0 h-full bg-gray-900 rounded-lg translate-y-1 -z-10" />
            <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 flex justify-between w-[50%] z-0">
              <div className="w-3 h-12 bg-gray-800 rotate-[30deg] origin-top rounded-b-sm" />
              <div className="w-3 h-12 bg-gray-800 -rotate-[30deg] origin-top rounded-b-sm" />
            </div>
          </motion.div>
        </div>

        {/* ── Accordion + Dynamic right panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-stretch"
        >
          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {ACCORDION_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  className={`rounded-2xl border cursor-pointer overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-jc-dark border-jc-dark' : 'bg-white/50 border-white/80 hover:bg-white/70'}`}
                  onClick={() => setOpen(i)}
                  layout
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <span className={`font-semibold text-base leading-snug ${isOpen ? 'text-white' : 'text-jc-dark'}`}>
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className={`flex-shrink-0 ml-3 ${isOpen ? 'text-jc-teal' : 'text-jc-dark/40'}`}
                    >
                      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
                        <path d="M5 7.5 L10 12.5 L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="px-5 pb-5 space-y-2.5">
                          {item.features.map((f, fi) => (
                            <motion.li
                              key={fi}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fi * 0.07 }}
                              className="flex items-start gap-2.5 text-white/85 text-sm"
                            >
                              <span className="text-jc-teal mt-0.5 text-xs">✓</span>
                              {f}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic right panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={open}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-jc-dark rounded-2xl p-6 flex flex-col gap-6 border border-gray-800 shadow-xl"
            >
              {/* Premium & Direct badge */}
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 22 22" className="w-5 h-5" fill="none">
                  <motion.circle cx="11" cy="11" r="9" stroke="#00c98b" strokeWidth="1.5"
                    animate={{ rotate: 360 }} style={{ originX: '11px', originY: '11px' }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />
                  <path d="M11 6l1.3 2.8 3.1.5-2.3 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.3-2.1 3.1-.5Z" fill="#00c98b" />
                </svg>
                <span className="text-jc-teal text-xs font-semibold tracking-widest uppercase">Premium &amp; Direct</span>
              </div>

              {/* SVG Preview */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/30">
                <active.Preview />
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-1">
                <div>
                  <div className="flex items-center gap-1 text-white/50 text-xs mb-1">
                    <svg viewBox="0 0 14 14" className="w-3 h-3" fill="none" stroke="#00c98b" strokeWidth="1.3">
                      <circle cx="7" cy="7" r="5.5" /><path d="M7 2C7 2 5 4 5 7C5 10 7 12 7 12C7 12 9 10 9 7C9 4 7 2 7 2Z" /><line x1="1.5" y1="7" x2="12.5" y2="7" />
                    </svg>
                    {active.stat1Label}
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-black text-3xl leading-none">
                    <Counter value={active.stat1Value} suffix={active.stat1Suffix} />
                    <motion.svg viewBox="0 0 28 16" className="w-7 h-4" fill="none"
                      initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.4 }}>
                      <path d="M2 13 L8 7 L14 10 L26 2" stroke="#00c98b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 2 H26 V7" stroke="#00c98b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </div>
                  <div className="mt-1.5 h-0.5 w-20 rounded bg-[#00c98b]" />
                </div>

                <div className="w-px h-10 bg-white/10" />

                <div>
                  <div className="flex items-center gap-1 text-white/50 text-xs mb-1">
                    <svg viewBox="0 0 14 10" className="w-3.5 h-2.5" fill="none" stroke="#00c98b" strokeWidth="1.3">
                      <path d="M1 5C3 1.5 11 1.5 13 5C11 8.5 3 8.5 1 5Z" /><circle cx="7" cy="5" r="2" fill="#00c98b" />
                    </svg>
                    {active.stat2Label}
                  </div>
                  <div className="text-white font-black text-3xl leading-none">
                    <Counter value={active.stat2Value} suffix={active.stat2Suffix} />
                  </div>
                  <div className="mt-1.5 h-0.5 w-20 rounded bg-[#00c98b]" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
const heroVideo = '/marketing/videos/uhhu.mp4';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Track scroll progress within this entire container
  // 300vh height gives us plenty of scroll room to animate the sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation values mapped to scrollYProgress (0 to 1)

  // 1) Video Backdrop Filter (darkens the video as you scroll down)
  const videoOverlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.7]);
  
  // 2) Content Reveal Animations
  // Text & Content scales up and fades in from bottom as we scroll from 0.1 to 0.4
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["50%", "0%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      
      {/* Sticky Container for Video & Overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* The Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted={isMuted} 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Animated Dark Overlay (Increases on scroll) */}
        <motion.div 
          className="absolute inset-0 bg-black pointer-events-none z-10" 
          style={{ opacity: videoOverlayOpacity }}
        />

        {/* Sound Toggle Button (Always visible at bottom right of viewport) */}
        <div className="absolute bottom-8 right-8 z-30">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>

        {/* Floating Content over the Video */}
        {/* We absolutely position it in the center of the viewport and animate its Y, Scale, and Opacity */}
        <motion.div 
          className="absolute inset-0 z-20 flex flex-col justify-center pt-20 pb-4 h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
          style={{ 
            y: contentY, 
            opacity: contentOpacity, 
            scale: contentScale 
          }}
        >
          <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto mb-auto">
            {/* Title */}
            <div className="w-full mb-6 lg:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md leading-[1.1]">
                Turn High-Intent Discovery<br />
                Into Direct Purchases
              </h1>
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column */}
              <div className="lg:col-span-8 bg-white/90 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/60 shadow-lg flex flex-col justify-center">
                <div className="text-gray-700 text-[1.05rem] lg:text-[1.1rem] leading-relaxed space-y-6 font-medium">
                  <p>
                    <strong className="text-gray-900">JointCommerce</strong> captures <span className="font-bold text-gray-900 cursor-default">A21+ shoppers</span> actively searching <span className="font-bold text-gray-900 cursor-default">"where to buy"</span> through our SEO-powered shopper directory and amplifies that demand with shoppable activation across curated premium publisher environments — routing consumers directly to purchase on JointCommerce (when enabled) and across participating retailer, brand, and marketplace commerce systems.
                  </p>
                  <p>
                    As the <span className="font-bold text-gray-900 cursor-default">infrastructure layer</span> connecting discovery to commerce, JointCommerce enables <span className="font-bold text-gray-900 cursor-default">always-on activation</span> with <strong className="text-gray-900">real-time, measurable online revenue performance.</strong>
                  </p>
                  <p className="font-extrabold text-gray-900 text-2xl pt-2 tracking-tight">
                    Launch quickly. Scale continuously. Measure confidently.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="w-full h-full bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-jc-teal/30 shadow-lg flex flex-col items-center text-center justify-center">
                  {/* Circular A21+ Badge */}
                  <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center mb-6">
                    {/* Rotating SVG Text */}
                    <motion.div 
                      className="absolute inset-0 z-0 opacity-80"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full text-jc-teal overflow-visible drop-shadow-sm">
                        <path id="curvePathRight" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                        <text className="text-[13px] font-bold tracking-[0.2em] fill-current uppercase">
                          <textPath href="#curvePathRight" startOffset="0%">
                            shopper • shopper •
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>
                    
                    {/* Inner Badge */}
                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-[#14B8A6] z-10 shadow-md border-2 border-white">
                      <span className="text-white font-extrabold text-lg">A21+</span>
                    </div>
                  </div>
                  
                  <h3 className="text-gray-900 font-bold text-lg leading-snug mb-4 tracking-tight">
                    Drive Measurable Online Sales<br />From<br />
                    <span className="text-gray-900 cursor-default">Verified A21+</span><br />
                    <span className="text-[0.9rem] font-medium text-gray-700">Zero Party High-Intent Shoppers</span>
                  </h3>
                  
                  <p className="text-gray-700 text-[0.85rem] leading-relaxed mx-auto font-medium">
                    <span className="font-bold text-gray-900 cursor-default">JointCommerce</span> captures shoppers actively searching <span className="font-bold text-gray-900 cursor-default">"where to buy,"</span> activates them across <span className="font-bold text-gray-900 cursor-default">premium publisher environments</span>, and routes them directly to purchase - with <span className="font-bold text-gray-900 cursor-default">real-time revenue reporting.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button className="h-[48px] px-8 rounded-lg bg-jc-teal text-white font-bold hover:bg-jc-mint transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md group border border-transparent">
                Book Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="h-[48px] px-8 rounded-lg bg-jc-teal text-white font-bold hover:bg-jc-mint transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md border border-transparent group">
                Claim Your Dispensary Listing <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="h-[48px] px-8 rounded-lg bg-jc-teal text-white font-bold hover:bg-jc-mint transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md border border-transparent group">
                Enable Direct Purchase <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Bottom Stats Pills */}
            <div className="inline-flex flex-wrap items-center justify-start gap-x-8 gap-y-3 px-6 md:px-8 py-3 bg-white/85 backdrop-blur-md rounded-2xl border border-white/60 mt-4 lg:mt-6 w-full sm:w-auto shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-jc-teal shadow-[0_0_6px_rgba(0,212,178,0.5)]"></div>
                <span className="text-gray-700 text-[13px] font-semibold tracking-wide">12,000+ Retail Menus Connected</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-jc-teal shadow-[0_0_6px_rgba(0,212,178,0.5)]"></div>
                <span className="text-gray-700 text-[13px] font-semibold tracking-wide">A21+ Verified Discovery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-jc-teal shadow-[0_0_6px_rgba(0,212,178,0.5)]"></div>
                <span className="text-gray-700 text-[13px] font-semibold tracking-wide">Premium Publisher Activation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-jc-teal shadow-[0_0_6px_rgba(0,212,178,0.5)]"></div>
                <span className="text-gray-700 text-[13px] font-semibold tracking-wide">100% Viewable Standards</span>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import heroVideo from '../static/marketing/videos/uhhu.mp4';

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
            className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>

        {/* Floating Content over the Video */}
        {/* We absolutely position it in the center of the viewport and animate its Y, Scale, and Opacity */}
        <motion.div 
          className="absolute inset-0 z-20 flex items-center pt-20 pb-10"
          style={{ 
            y: contentY, 
            opacity: contentOpacity, 
            scale: contentScale 
          }}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto mb-auto lg:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                {/* Changed text back to match a bright overlay theme if desired, or keep white since it's on a darkened video */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-lg">
                  THE DISCOVERY-<br />
                  TO-<br />
                  COMMERCE<br />
                  ACTIVATION<br />
                  INFRASTRUCTURE
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button className="h-[56px] px-8 rounded-full bg-jc-teal text-jc-dark font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg">
                    Launch Activation
                  </button>
                  <button className="h-[56px] pl-8 pr-2 rounded-full bg-white text-jc-dark font-bold hover:bg-jc-teal transition-colors flex items-center gap-4 group cursor-pointer shadow-lg">
                    Enable Direct Purchase
                    <div className="w-10 h-10 rounded-full bg-jc-dark flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right">
                <div className="max-w-md w-full bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex flex-row items-center justify-between gap-6 mb-8 lg:justify-end">
                    <p className="text-white font-medium text-lg lg:text-xl leading-snug flex-1 text-left lg:text-right drop-shadow-md">
                      Drive Measurable Online Sales From<br />
                      <span className="font-bold text-jc-teal">Verified A21+</span> Zero Party High-Intent Shoppers.
                    </p>
                    
                    {/* Circular A21+ Badge */}
                    <div className="relative w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* Rotating SVG Text */}
                      <motion.div 
                        className="absolute inset-0 z-0"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full text-white overflow-visible drop-shadow-md">
                          <path id="curvePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                          <text className="text-[14px] font-bold tracking-[0.2em] fill-current uppercase">
                            <textPath href="#curvePath" startOffset="0%">
                              shopper • shopper •
                            </textPath>
                          </text>
                        </svg>
                      </motion.div>
                      
                      {/* Inner Badge */}
                      <div className="relative w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-jc-teal z-10 shadow-lg border-2 border-jc-dark/20">
                        <span className="text-jc-dark font-bold text-lg">A21+</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-sm leading-relaxed text-left lg:text-right max-w-[360px] ml-auto drop-shadow-md">
                    <strong className="text-white font-bold">JointCommerce</strong> captures shoppers actively searching <strong className="text-white font-bold">"where to buy,"</strong> activates them across <strong className="text-white font-bold">premium publisher environments</strong>, and routes them directly to purchase - with real-time revenue reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

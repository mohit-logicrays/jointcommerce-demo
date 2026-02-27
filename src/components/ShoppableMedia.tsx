import { motion } from 'framer-motion';
import { BarChart3, ShoppingCart, Eye, CheckCircle2, ChevronRight, Rocket, Repeat, Globe } from 'lucide-react';
import shoppableVideo from '../static/marketing/videos/Comp dsds1.mp4';
import logoViacom from '../static/marketing/logos/Viacom_logo.svg.png';
import logoABC from '../static/marketing/logos/American_Broadcasting_Company_Logo.svg.png';
import logoESPN from '../static/marketing/logos/ESPN_logos.png';
import logoMax from '../static/marketing/logos/Max_logo.svg';
import logoHulu from '../static/marketing/logos/Hulu_logo_(2018).svg.png';
import logoTBS from '../static/marketing/logos/TBS_logo_2016.svg';
import logoCNN from '../static/marketing/logos/CNN-Logo.wine.png';
import logoSling from '../static/marketing/logos/Sling_Logo_Navy.png';
import logoMTV from '../static/marketing/logos/MTV_New_Official_Logo_2021.png';
import logoBravo from '../static/marketing/logos/Bravo_LOGO_2017_Black.png';

export function ShoppableMedia() {
  const logos = [
    { name: 'Viacom', src: logoViacom },
    { name: 'ABC', src: logoABC },
    { name: 'ESPN', src: logoESPN },
    { name: 'Max', src: logoMax },
    { name: 'Hulu', src: logoHulu },
    { name: 'TBS', src: logoTBS },
    { name: 'CNN', src: logoCNN },
    { name: 'Sling', src: logoSling },
    { name: 'MTV', src: logoMTV },
    { name: 'Bravo', src: logoBravo },
  ];

  const retailerItems = [
    "Geo-targeted activation",
    "Brand-funded co-op participation",
    "Routing priority",
    "Direct purchase eligibility",
    "Real-time revenue visibility"
  ];

  const retailerPrograms = [
    { icon: <Rocket className="w-5 h-5 text-jc-teal" />, text: "Growth Launch" },
    { icon: <Repeat className="w-5 h-5 text-jc-teal" />, text: "Always-On Trade Area" },
    { icon: <Globe className="w-5 h-5 text-jc-teal" />, text: "Market Expansion" }
  ];

  const brandItems = [
    "Retailer menus",
    "Direct purchase-enabled JointCommerce menus",
    "Brand product pages",
    "Marketplace listing pages (where available)"
  ];

  const brandPrograms = [
    "Retail Sell-Through Starter",
    "Statewide Performance Activation",
    "National Co-Op Deployment"
  ];

  return (
    <section className="py-24 md:py-32 bg-[#9ef0d4] overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl text-jc-dark font-light leading-[1.1] tracking-wide"
          >
            SHOPPABLE MEDIA
          </motion.h2>
        </div>

        {/* Hero Section: Text Left, TV Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:pr-8"
          > 
            <div className="space-y-4 text-lg sm:text-xl text-jc-dark/80 leading-relaxed">
              <p>
                Our advanced <span className="font-semibold text-jc-dark">Demand Side Platform (DSP)</span> and{' '}
                <span className="font-semibold text-jc-dark">Consumer Data Platform (CDP)</span> maximize advertising 
                effectiveness to help you accomplish your business objectives.
              </p>
              
              <p>
                We navigate strict advertising restrictions, find new customers, and boost sales growth. 
                Our unique buying practices optimize your ad placement across curated publishers and drive 
                positive ROI to help relieve inequitable high tax rates.
              </p>
              
              <p className="font-medium text-jc-dark">
                JointCommerce empowers your businesses with a data-driven, strategic approach to overcome 
                these industry-specific challenges.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/80 shadow-sm">
                <span className="text-jc-dark font-semibold text-sm">DSP Technology</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/80 shadow-sm">
                <span className="text-jc-dark font-semibold text-sm">CDP Integration</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/80 shadow-sm">
                <span className="text-jc-dark font-semibold text-sm">Positive ROI</span>
              </div>
            </div>
          </motion.div>

          {/* Right: TV Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            {/* TV Screen / Frame */}
            <div className="relative z-10 bg-[#111] rounded-lg p-2 md:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border-2 md:border-[3px] border-gray-800 aspect-[16/9] overflow-hidden">
               <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover rounded-sm"
              >
                <source src={shoppableVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Bottom bezel shadow/depth */}
            <div className="absolute top-0 inset-x-0 h-full bg-gray-900 rounded-lg translate-y-1 -z-10" />
            
            {/* TV Stand legs */}
            <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 flex justify-between w-[50%] z-0">
               <div className="w-2.5 md:w-3.5 h-10 md:h-14 bg-gray-800 transform rotate-[30deg] origin-top rounded-b-sm shadow-md"></div>
               <div className="w-2.5 md:w-3.5 h-10 md:h-14 bg-gray-800 transform -rotate-[30deg] origin-top rounded-b-sm shadow-md"></div>
            </div>

            {/* Decorative glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-jc-teal/10 to-transparent rounded-lg -z-20 blur-2xl"></div>
          </motion.div>
        </div>

        {/* Split Content Area: Retailers vs Brands */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Retailers Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 p-8 sm:p-10 rounded-3xl border border-white/60 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-4xl font-bold text-jc-dark mb-4 tracking-tight">RETAILERS</h3>
            <p className="text-xl text-jc-dark/80 font-medium mb-8">
              Enable Direct Purchase.<br />Launch Always-On Growth.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold text-jc-dark mb-4 uppercase tracking-wider">Unlock:</h4>
              <ul className="space-y-3">
                {retailerItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-jc-teal flex-shrink-0" />
                    <span className="text-jc-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-jc-dark mb-4 uppercase tracking-wider">Retailer Activation Programs:</h4>
              <ul className="space-y-4">
                {retailerPrograms.map((program, idx) => (
                  <li key={idx} className="bg-white/80 py-3 px-5 rounded-xl text-jc-dark font-semibold shadow-sm flex items-center gap-3">
                     <div className="bg-jc-teal/10 p-1.5 rounded-lg">
                       {program.icon}
                     </div>
                     <span>{program.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Brands Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-jc-dark p-8 sm:p-10 rounded-3xl border border-gray-800 shadow-xl"
          >
            <h3 className="text-4xl font-bold text-[#9ef0d4] mb-4 tracking-tight">BRANDS</h3>
            <p className="text-xl text-white/90 font-medium mb-8">
              Drive Retail Sell-Through With Measurable Revenue Performance.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold text-white/70 mb-4 uppercase tracking-wider">Route activation traffic to:</h4>
              <ul className="space-y-3">
                {brandItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#9ef0d4] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white/70 mb-4 uppercase tracking-wider">Brand Programs:</h4>
              <div className="space-y-3">
                {brandPrograms.map((program, idx) => (
                  <div key={idx} className="group flex items-center justify-between bg-gray-900/50 hover:bg-gray-800 transition-colors p-4 rounded-xl border border-gray-800 cursor-pointer">
                    <span className="text-white font-medium group-hover:text-[#9ef0d4] transition-colors">{program}</span>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#9ef0d4] transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Features Bar */}
        <motion.div 
          className="bg-white rounded-full py-5 px-6 lg:py-6 lg:px-12 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-8 items-center max-w-5xl mx-auto border border-white/50 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm lg:text-base">
            <BarChart3 className="w-5 h-5 lg:w-6 lg:h-6 text-jc-teal" />
            <span>Always-on growth</span>
          </div>
          <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm lg:text-base">
            <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-jc-teal" />
            <span>Direct-to-purchase routing</span>
          </div>
          <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm lg:text-base">
            <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-jc-teal" />
            <span>Proven ROAS visibility</span>
          </div>
        </motion.div>

        {/* Logos Marquee */}
        <div className="mt-16 lg:mt-20 overflow-hidden relative z-10">
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <img 
                key={i} 
                src={logo.src} 
                alt={logo.name} 
                className="h-8 object-contain transition-all hover:scale-110 cursor-pointer"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
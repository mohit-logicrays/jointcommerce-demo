import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import footerVideo from '../static/marketing/videos/ijijijli.mp4';
import logoImage from '../static/marketing/logos/logo-without-text.png';

export function Footer() {
  return (
    <footer className="relative z-30 flex flex-col">
      {/* CTA Section with Background Video */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video 
          src={footerVideo}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        
        <motion.div 
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to scale your brand?
          </h2>
          <button className="px-8 py-3.5 rounded-full bg-[#0efbba] text-jc-dark font-bold hover:bg-white transition-colors uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(14,251,186,0.4)]">
            BOOK LIVE DEMO
          </button>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#9ef0d4] pt-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Column 1: Platform & Discovery */}
            <div className="col-span-1">
              <h4 className="font-medium text-jc-dark mb-6 text-sm">Platform & Discovery</h4>
              <ul className="space-y-4 text-xs font-medium text-jc-dark/70">
                <li><Link to="/platform" className="hover:text-jc-teal transition-colors">Platform</Link></li>
                <li><Link to="/our-technology" className="hover:text-jc-teal transition-colors">Our Technology</Link></li>
                <li><Link to="/why-jointcommerce" className="hover:text-jc-teal transition-colors">Why JointCommerce</Link></li>
                <li><Link to="/demand-infrastructure" className="hover:text-jc-teal transition-colors">Demand</Link></li>
                <li><Link to="/directory" className="hover:text-jc-teal transition-colors">Directory</Link></li>
                <li><Link to="/shoppers" className="hover:text-jc-teal transition-colors">For Shoppers</Link></li>
              </ul>
            </div>

            {/* Column 2: Ecosystem */}
            <div className="col-span-1">
              <h4 className="font-medium text-jc-dark mb-6 text-sm">Ecosystem</h4>
              <ul className="space-y-4 text-xs font-medium text-jc-dark/70">
                <li><Link to="/retailers" className="hover:text-jc-teal transition-colors">Retailers</Link></li>
                <li><Link to="/brands" className="hover:text-jc-teal transition-colors">Brands</Link></li>
                <li><Link to="/partners" className="hover:text-jc-teal transition-colors">Partners</Link></li>
                <li><Link to="/agencies" className="hover:text-jc-teal transition-colors">Agencies</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact & Legal */}
            <div className="col-span-1">
              <h4 className="font-medium text-jc-dark mb-6 text-sm">Contact & Legal</h4>
              <ul className="space-y-4 text-xs font-medium text-jc-dark/70">
                <li><Link to="/enterprise" className="hover:text-jc-teal transition-colors">Enterprise</Link></li>
                <li><Link to="/advertisers" className="hover:text-jc-teal transition-colors">Advertisers</Link></li>
                <li><Link to="/contact" className="hover:text-jc-teal transition-colors">Contact Us</Link></li>
                <li><a href="#" className="hover:text-jc-teal transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-jc-teal transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div className="col-span-1">
              <h4 className="font-medium text-jc-dark mb-6 text-sm">Get in Touch</h4>
              <ul className="space-y-4 text-xs font-medium text-jc-dark/70">
                <li className="flex items-center gap-2">
                   <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                   <a href="tel:949-698-2094" className="hover:text-jc-teal transition-colors tracking-wide">949-698-2094</a>
                </li>
                <li className="flex items-center gap-2">
                   <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                   <a href="mailto:jointcommerce@jointcommerce.co" className="hover:text-jc-teal transition-colors truncate">jointcommerce@jointcommerce.co</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center text-[10px] text-jc-dark/60">
            Copyright © {new Date().getFullYear()} JointCommerce. All Rights Reserved
          </div>
        </div>

        {/* Massive Typography at bottom mapping to "intCommer" visually */}
        <div className="w-full relative h-[18vw] sm:h-[15vw] md:h-[12vw] lg:h-[10vw] xl:h-[8vw] mt-8 pointer-events-none select-none flex items-end justify-center overflow-hidden">
           <h1 className="text-[25vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] font-black text-[#20222a] leading-[0.7] tracking-tighter absolute -bottom-[4vw] whitespace-nowrap">
             JointCommerce
           </h1>
        </div>
      </div>
    </footer>
  );
}

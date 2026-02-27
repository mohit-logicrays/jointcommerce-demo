import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white relative z-30">
      {/* CTA Section with Background Image */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://picsum.photos/seed/cannabis/1920/1080?blur=2" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        <motion.div 
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to scale your cannabis brand?
          </h2>
          <button className="px-8 py-4 rounded-full bg-jc-teal text-jc-dark font-bold hover:bg-white transition-colors uppercase tracking-widest text-sm">
            BOOK LIVE DEMO
          </button>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Social */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-jc-dark font-bold text-2xl tracking-tight mb-8">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
              </svg>
              JointCommerce
            </div>
            <div className="flex gap-4 text-jc-dark/60">
              <a href="#" className="hover:text-jc-teal transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-jc-teal transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-jc-teal transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-jc-teal transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-jc-dark uppercase tracking-widest text-xs mb-6">PLATFORM</h4>
            <ul className="space-y-4 text-sm text-jc-dark/70">
              <li><a href="#" className="hover:text-jc-teal transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">Platform</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">Retailers</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">Brands</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">Ecosystem</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-jc-dark uppercase tracking-widest text-xs mb-6">SOLUTIONS</h4>
            <ul className="space-y-4 text-sm text-jc-dark/70">
              <li><a href="#" className="hover:text-jc-teal transition-colors">Agencies</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">Advertisers</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-jc-dark uppercase tracking-widest text-xs mb-6">RESOURCES</h4>
            <ul className="space-y-4 text-sm text-jc-dark/70">
              <li><a href="#" className="hover:text-jc-teal transition-colors">Directory</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">For Shoppers</a></li>
              <li><a href="#" className="hover:text-jc-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-xs text-jc-dark/50 uppercase tracking-widest">
          © {new Date().getFullYear()} JOINTCOMMERCE ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

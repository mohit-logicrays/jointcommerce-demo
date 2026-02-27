import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Platform', href: '#' },
    { name: 'Retailers', href: '#' },
    { name: 'Brands', href: '#' },
    { name: 'Platform Ecosystem', href: '#' },
    { name: 'Agencies', href: '#' },
    { name: 'Directory', href: '#' },
    { name: 'For Shoppers', href: '#' },
    { name: 'Enterprise', href: '#' },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-jc-dark/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="white"/>
            </svg>
            JointCommerce
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2 rounded-full border border-jc-teal text-jc-teal hover:bg-jc-teal hover:text-jc-dark transition-colors text-sm font-medium">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-jc-teal transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-jc-dark border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <button className="w-full px-6 py-3 rounded-full border border-jc-teal text-jc-teal hover:bg-jc-teal hover:text-jc-dark transition-colors text-sm font-medium">
                Contact
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

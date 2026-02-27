import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import logoImage from '../static/marketing/logos/logo-without-text.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    {
      name: 'Platform',
      children: [
        { name: 'Core Infrastructure', href: '/platform' },
        { name: 'Our Technology', href: '/our-technology' },
        { name: 'Why JointCommerce', href: '/why-jointcommerce' },
        { name: 'Demand Network', href: '/demand-infrastructure' },
        { name: 'Shopper Directory', href: '/directory' },
      ]
    },
    {
      name: 'Solutions',
      children: [
        { name: 'For Retailers', href: '/retailers' },
        { name: 'For Brands', href: '/brands' },
        { name: 'For Partners', href: '/partners' },
        { name: 'For Agencies', href: '/agencies' },
        { name: 'For Advertisers', href: '/advertisers' },
      ]
    },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Shoppers', href: '/shoppers' },
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

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
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 text-white font-bold text-xl tracking-tight z-50">
            <img src={logoImage} alt="JointCommerce Logo" className="h-8 w-auto brightness-0 invert" />
            JointCommerce
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors py-8">
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Seamless Invisible Bridge */}
                    <div className="absolute top-full left-0 w-full h-4" />
                    <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-56 bg-[#111] border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-50 translate-y-2 group-hover:translate-y-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors py-8 block"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="px-6 py-2.5 rounded-full border border-jc-teal text-jc-teal hover:bg-jc-teal hover:text-jc-dark transition-colors text-sm font-bold shadow-lg shadow-jc-teal/10 inline-block">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-jc-teal transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A1111] border-b border-white/10 absolute top-full left-0 right-0 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-white/5 last:border-0 pb-2 mb-2 last:pb-0 last:mb-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-lg font-medium text-white hover:bg-white/5"
                      >
                        {item.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform", openMobileDropdown === item.name ? "rotate-180 text-jc-teal" : "text-white/50")} />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 pr-3 py-2 space-y-1 bg-white/5 rounded-xl mt-1 mb-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  onClick={handleMobileNavClick}
                                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/10"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={handleMobileNavClick}
                      className="block px-3 py-3 rounded-xl text-lg font-medium text-white hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 pb-2 px-3">
                <Link to="/contact" onClick={handleMobileNavClick} className="w-full px-6 py-4 rounded-full border-2 border-jc-teal font-bold bg-jc-teal text-jc-dark transition-colors shadow-lg shadow-jc-teal/20 text-lg block text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const logoImage = '/marketing/logos/logo-without-text.png';

export function ClientNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navScrolledState = isScrolled || pathname !== '/';

  const navItems = [
    { name: 'Discover', href: '/' },
    { name: 'Retailers', href: '/retailers' },
    { name: 'Brands', href: '/brands' },
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navScrolledState
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className={cn(
            "flex-shrink-0 flex items-center gap-3 font-bold text-xl tracking-tight z-50 transition-colors",
            navScrolledState ? "text-gray-900" : "text-white"
          )}>
            <img
              src={logoImage}
              alt="JointCommerce Logo"
              className={cn("h-8 w-auto transition-all", navScrolledState ? "brightness-0" : "brightness-0 invert")}
            />
            JointCommerce
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-md font-semibold transition-colors py-8 block",
                  navScrolledState ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Button */}
          <div className="hidden lg:flex items-center">
            <button className="px-6 py-2.5 rounded-lg border-2 border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700 transition-colors text-sm font-bold shadow-sm">
              Login / Verify A21+
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("transition-colors p-2", navScrolledState ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-jc-teal")}
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
            className="lg:hidden bg-white border-b border-gray-200 absolute top-full left-0 right-0 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0 pb-2 mb-2 last:pb-0 last:mb-0">
                  <Link
                    href={item.href}
                    onClick={handleMobileNavClick}
                    className="block px-3 py-3 rounded-xl text-lg font-medium text-gray-800 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="pt-6 pb-2 px-3">
                <button className="w-full px-6 py-4 rounded-lg border-2 border-emerald-600 font-bold bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700 transition-colors shadow-md text-lg block text-center">
                  Login / Verify A21+
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

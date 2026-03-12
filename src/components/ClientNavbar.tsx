'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const logoImage = '/marketing/logos/logo-without-text.png';

export function ClientNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navScrolledState = isScrolled || pathname !== '/';

  const navItems = [
    { name: 'Why JointCommerce', href: '/why-jointcommerce' },
    {
      name: 'Platform',
      children: [
        { name: 'Core Infrastructure', href: '/platform' },
        { name: 'Our Technology', href: '/our-technology' },
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
    { name: 'Case Studies', href: '/#case-studies', scrollTo: 'case-studies' },
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
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
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button className={cn(
                      "flex items-center gap-1 text-md font-semibold transition-colors py-8",
                      navScrolledState ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
                    )}>
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Seamless Invisible Bridge */}
                    <div className="absolute top-full left-0 w-full h-4" />
                    <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-200 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg z-50 translate-y-2 group-hover:translate-y-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-800 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={(e) => {
                      if (item.scrollTo && pathname === '/') {
                        handleScrollToSection(e, item.scrollTo);
                      }
                    }}
                    className={cn(
                      "text-md font-semibold transition-colors py-8 block",
                      navScrolledState ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="px-6 py-2.5 rounded-full border border-jc-teal text-jc-teal hover:bg-jc-teal hover:text-white transition-colors text-sm font-bold shadow-sm inline-block">
              Contact Us
            </Link>
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
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-lg font-medium text-gray-800 hover:bg-gray-50"
                      >
                        {item.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform", openMobileDropdown === item.name ? "rotate-180 text-jc-teal" : "text-gray-400")} />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 pr-3 py-2 space-y-1 bg-gray-50 rounded-xl mt-1 mb-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={handleMobileNavClick}
                                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
                      href={item.href!}
                      onClick={(e) => {
                        if (item.scrollTo) {
                          if (pathname === '/') {
                            handleScrollToSection(e, item.scrollTo);
                          } else {
                            handleMobileNavClick();
                          }
                        } else {
                          handleMobileNavClick();
                        }
                      }}
                      className="block px-3 py-3 rounded-xl text-lg font-medium text-gray-800 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 pb-2 px-3">
                <Link href="/contact" onClick={handleMobileNavClick} className="w-full px-6 py-4 rounded-full border-2 border-jc-teal font-bold bg-jc-teal text-white transition-colors shadow-md text-lg block text-center">
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

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-30 flex flex-col bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          
          {/* Column 1 */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Discover</h4>
            <ul className="space-y-3 text-sm text-gray-900/70">
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Trending Products</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">New Drops</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Categories</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Retailers</h4>
            <ul className="space-y-3 text-sm text-gray-900/70">
              <li><Link href="/retailers" className="hover:text-emerald-600 transition-colors">Find Dispensaries</Link></li>
              <li><Link href="/retailers" className="hover:text-emerald-600 transition-colors">Browse Menus</Link></li>
              <li><Link href="/retailers" className="hover:text-emerald-600 transition-colors">Integrate Your Menu</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Brands</h4>
            <ul className="space-y-3 text-sm text-gray-900/70">
              <li><Link href="/brands" className="hover:text-emerald-600 transition-colors">Brand Directory</Link></li>
              <li><Link href="/brands" className="hover:text-emerald-600 transition-colors">Activate Campaign</Link></li>
              <li><Link href="/brands" className="hover:text-emerald-600 transition-colors">Analytics</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">About</h4>
            <ul className="space-y-3 text-sm text-gray-900/70">
              <li><Link href="/why-jointcommerce" className="hover:text-emerald-600 transition-colors">About JointCommerce</Link></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-black/10 pt-8 text-center text-sm text-gray-900/60">
          Copyright © {new Date().getFullYear()} JointCommerce. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

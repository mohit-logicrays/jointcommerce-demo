"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Lock, Info, CheckCircle2, Menu, Bell, User, Star, ShieldCheck } from 'lucide-react';
const logoImage = "/logos/logo-without-text.png";

export function DirectPurchase() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-jc-teal" />,
      title: "Browse live inventory"
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-jc-teal" />,
      title: "Seamlessly add to cart"
    },
    {
      icon: <Lock className="w-5 h-5 text-jc-teal" />,
      title: "Securely complete checkout"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-jc-dark leading-[1.1] tracking-tight mb-6 uppercase">
              <span className="text-jc-teal hover:text-jc-mint transition-colors cursor-default">DIRECT</span><br />
              <span className="text-jc-teal hover:text-jc-mint transition-colors cursor-default">PURCHASE</span>
            </h2>
            <p className="text-xl text-jc-dark/80 mb-12 font-light">
              Consumers can buy directly on <strong className="font-bold">JointCommerce</strong>.
            </p>

            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-jc-teal text-jc-teal flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{feature.title}</h3>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-[6px] border-[#14B8A6] shadow-md max-w-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-[#14B8A6] uppercase tracking-widest mb-1.5">SYSTEM COMPLIANCE NOTE</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Retailers retain 100% control of pricing and fulfillment logic.<br />
                    <strong className="text-gray-900 font-semibold">JointCommerce</strong> acts as the facilitator and is not the merchant of record.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Laptop Screen Mockup */}
            <div className="relative z-10 w-[120%] -ml-[10%] lg:w-[130%] lg:-ml-[15%] aspect-[16/10] bg-[#1a1c23] rounded-t-3xl p-2.5 md:p-3 shadow-2xl flex flex-col items-center">
              {/* Camera Notch */}
              <div className="absolute top-2.5 md:top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-3 md:h-4 bg-[#1a1c23] rounded-b-lg z-30"></div>
              
              <div className="absolute inset-0 bg-white m-2.5 md:m-3 rounded-lg md:rounded-xl overflow-hidden flex flex-col pt-3 md:pt-4">
                {/* Browser Top Nav */}
                <div className="px-3 border-b border-gray-100 pb-2">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                       <div className="flex items-center gap-1.5">
                          <img src={logoImage} alt="JointCommerce Link" className="w-5 h-5 object-contain filter brightness-0" />
                          <span className="font-black text-[13px] tracking-tight text-black">JointCommerce</span>
                       </div>
                       <div className="hidden sm:flex text-[9px] font-bold text-gray-700 gap-3">
                         <span className="flex items-center gap-0.5">Dispensaries <span className="text-[6px]">▼</span></span>
                         <span className="flex items-center gap-0.5">Strains <span className="text-[6px]">▼</span></span>
                         <span>Deals</span>
                         <span>Forum</span>
                         <span>Blog</span>
                       </div>
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-2 py-1 flex-1 min-w-[120px]">
                         <span className="text-[8px] text-gray-400">Search strains, dispensaries...</span>
                       </div>
                       <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center"><Bell className="w-2.5 h-2.5" /></div>
                       <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center"><ShoppingCart className="w-2.5 h-2.5" /></div>
                       <div className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[9px] font-bold">A</div>
                     </div>
                   </div>
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-hidden flex flex-col px-4 pt-2">
                  <div className="text-[8px] text-[#14B8A6] mb-2 flex items-center gap-1 font-medium">
                     Home <span className="text-gray-300">/</span> Happy Days <span className="text-gray-300">/</span> Flower <span className="text-gray-300">/</span> <span className="text-gray-500">G13 Haze | 3.5g</span>
                  </div>
                  
                  <div className="flex flex-1 gap-4">
                    {/* Left - Image */}
                    <div className="w-1/3 flex flex-col gap-2">
                      <div className="bg-white border border-gray-100 rounded-lg flex-1 flex items-center justify-center p-4">
                        <img src="https://picsum.photos/seed/retail/200/250" className="max-h-full object-contain mix-blend-multiply opacity-80" alt="Product" />
                      </div>
                      <div className="flex gap-2 mb-6">
                        <div className="w-10 bg-white border border-gray-200 rounded p-1"><img src="https://picsum.photos/seed/retail1/40/40" className="w-full h-full object-cover" /></div>
                        <div className="w-10 bg-white border border-[#14B8A6] rounded p-1"><img src="https://picsum.photos/seed/retail/40/40" className="w-full h-full object-cover" /></div>
                        <div className="w-10 bg-[#0b5cff] rounded p-1 flex relative overflow-hidden"><img src="https://picsum.photos/seed/retail2/40/40" className="w-full h-full object-cover opacity-50 mix-blend-overlay" /> <div className="absolute inset-0 flex items-center justify-center"><div className="w-3 h-3 bg-white rotate-45"></div></div></div>
                      </div>
                    </div>

                    {/* Middle - Details */}
                    <div className="w-1/3 pt-1">
                       <p className="text-[9px] text-[#14B8A6] mb-0.5">Visit Happy Days Store</p>
                       <h1 className="text-lg font-bold text-gray-900 leading-tight mb-1">G13 Haze | 3.5g</h1>
                       <p className="text-[10px] text-gray-600 font-medium mb-1">Size: <span className="font-bold">14g</span></p>
                       <div className="flex gap-1 items-center mb-4">
                         <div className="flex text-[#14B8A6]">
                           <Star className="w-2.5 h-2.5 fill-current" />
                           <Star className="w-2.5 h-2.5 fill-current" />
                           <Star className="w-2.5 h-2.5 fill-current" />
                           <Star className="w-2.5 h-2.5 fill-current" />
                           <Star className="w-2.5 h-2.5 text-gray-300" />
                         </div>
                         <span className="text-[9px] font-bold">4.4</span>
                         <span className="text-[9px] text-[#14B8A6]">7 reviews</span>
                       </div>

                       <h3 className="text-[10px] font-bold border-b border-gray-100 pb-1 mb-2">Product Details</h3>
                       <div className="grid grid-cols-2 gap-y-1 text-[9px] mb-4">
                         <span className="text-gray-500">Category:</span><span className="font-medium text-gray-800">Flower</span>
                         <span className="text-gray-500">THC:</span><span className="font-medium text-gray-800">29.12%</span>
                         <span className="text-gray-500">Brand:</span><span className="font-medium text-[#14B8A6]">Fx</span>
                       </div>

                       <div className="flex items-center justify-between mb-2">
                         <h3 className="text-[10px] font-bold">About this item</h3>
                         <div className="flex bg-gray-100 rounded-md p-0.5">
                           <div className="bg-[#14B8A6] text-white text-[7px] font-bold px-2 py-0.5 rounded shadow-sm">Store's Description</div>
                           <div className="text-gray-500 text-[7px] font-bold px-2 py-0.5">JC's Description</div>
                         </div>
                       </div>
                       <p className="text-[7.5px] text-gray-600 leading-relaxed border-t border-gray-100 pt-1">
                         G13 Haze is a legendary sativa-dominant hybrid known for its potent effects and rich history. This strain delivers a cerebral high that's perfect for creative activities and social gatherings. Features earthy, citrus notes with hints of pine. Great for daytime use.
                       </p>
                    </div>

                    {/* Right - Pricing box */}
                    <div className="w-1/3 pt-1">
                       <div className="border border-gray-100 rounded-xl p-3 shadow-sm h-full flex flex-col">
                         <div className="text-xl font-bold text-gray-900 mb-1">$150.00</div>
                         <div className="text-[10px] font-bold text-[#14B8A6] mb-1">In Stock</div>
                         <div className="text-[8px] text-gray-500 mb-3 border-b border-gray-100 pb-2">Sold by: <span className="text-[#14B8A6]">Happy Days</span></div>
                         
                         <div className="flex items-center gap-2 mb-3">
                           <span className="text-[9px] font-medium">Qty:</span>
                           <div className="border border-gray-200 rounded px-2 py-1 text-[9px] flex items-center justify-between w-12 bg-gray-50">1 <span className="text-[6px]">▼</span></div>
                         </div>
                         
                         <button className="w-full bg-jc-teal text-white rounded-full py-1.5 text-[10px] font-bold mb-3 hover:bg-jc-mint transition-colors">
                           Add to Cart
                         </button>
                         <div className="flex items-center gap-1 text-[7px] text-gray-400 mb-3 border-b border-gray-100 pb-2">
                           <Lock className="w-2.5 h-2.5" /> Secure transaction
                         </div>

                         <div className="space-y-2 mt-auto">
                           <div className="flex gap-1.5 items-start">
                             <div className="w-3 h-3 border border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                             <div>
                               <div className="text-[8px] font-bold">Delivery</div>
                               <div className="text-[7px] text-gray-400">Check dispensary for options</div>
                             </div>
                           </div>
                           <div className="flex gap-1.5 items-start">
                             <div className="w-3 h-3 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1 h-1 bg-gray-400 rounded-full"></div></div>
                             <div>
                               <div className="text-[8px] font-bold">Pickup</div>
                               <div className="text-[7px] text-gray-400">Available at store</div>
                             </div>
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Laptop Base Hinge */}
            <div className="relative z-20 w-[124%] -ml-[12%] lg:w-[136%] lg:-ml-[18%] h-3 md:h-5 bg-gradient-to-b from-[#e2e8f0] to-[#94a3b8] rounded-b-xl md:rounded-b-2xl shadow-xl flex justify-center items-start border border-[#cbd5e1] mt-0">
               <div className="w-1/4 h-1 md:h-1.5 bg-[#cbd5e1] rounded-b-md mx-auto shadow-inner"></div>
            </div>
            {/* Laptop Base Shadow Extender */}
            <div className="relative w-[120%] -ml-[10%] lg:w-[130%] lg:-ml-[15%] h-6 md:h-10 bg-[#e2e8f0]/60 -mt-2 md:-mt-4 rounded-b-3xl blur-md -z-10"></div>

            {/* Floating 100% Badge (Top Right) */}
            <motion.div 
              className="absolute -top-8 -right-8 md:-top-12 md:-right-16 bg-white w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-50 flex flex-col items-center justify-center z-40"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            >
              <span className="text-[#14B8A6] font-black text-xl md:text-2xl leading-none">100%</span>
              <span className="text-[6px] md:text-[7px] font-bold text-gray-400 uppercase tracking-widest mt-1 text-center leading-tight">RETAILER<br/>CONTROL</span>
            </motion.div>

            {/* Floating Checkout Modal (Bottom Right) */}
            <motion.div 
              className="absolute -bottom-16 -right-12 md:-bottom-20 md:-right-24 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-[#e2e8f0] w-72 md:w-80 z-40"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Fake modal top dots */}
              <div className="flex gap-1.5 mb-4">
                 <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 text-sm md:text-base">Secure Checkout</h3>
                <span className="bg-gray-100 text-gray-400 text-[8px] font-bold px-2 py-1 rounded tracking-wider uppercase">ENCRYPTED</span>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                   {/* Product skeleton box */}
                   <div className="w-6 h-6 border-2 border-gray-200 rounded-md"></div>
                </div>
                <div className="flex-1 space-y-2">
                   <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                   <div className="text-[#14B8A6] font-bold text-xs">$150.00</div>
                </div>
                <div className="text-[8px] text-gray-400 self-end mb-1">Qty:<br/>1</div>
              </div>

              {/* Fake form fields */}
              <div className="space-y-3 mb-6">
                <div className="h-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3">
                   <div className="w-3 h-2 bg-gray-300 rounded-sm"></div>
                   <div className="h-1.5 w-1/3 bg-gray-200 rounded ml-2"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 flex-1 bg-gray-50 border border-gray-200 rounded-lg"></div>
                  <div className="h-8 w-1/3 bg-gray-50 border border-gray-200 rounded-lg"></div>
                </div>
              </div>

              <button className="w-full py-3 bg-jc-teal text-white font-bold text-xs rounded-xl md:rounded-2xl tracking-wide flex items-center justify-center gap-2 hover:bg-jc-mint transition-all shadow-[0_10px_20px_-10px_rgba(20,184,166,0.5)]">
                COMPLETE PURCHASE <Lock className="w-3 h-3" />
              </button>
              
              <div className="mt-4 flex justify-between px-2">
                <span className="flex items-center gap-1 text-[7px] text-gray-500 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#e6fcf5] flex items-center justify-center"><CheckCircle2 className="w-2.5 h-2.5 text-[#14B8A6]" /></div>
                  NATIVE INTEGRATION<br/><span className="font-bold text-gray-700">Direct-to-Consumer</span>
                </span>
                <span className="flex items-center gap-1 text-[7px] font-bold text-gray-400">
                  <ShieldCheck className="w-2.5 h-2.5" /> PCI COMPLIANT
                </span>
                <span className="flex items-center gap-1 text-[7px] font-bold text-gray-400">
                  <Lock className="w-2.5 h-2.5" /> SSL SECURE
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

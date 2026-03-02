"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MonitorPlay, Route, LineChart } from 'lucide-react';

export function InvestingInMedia() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-jc-teal" />,
      text: "Capture high-intent discovery demand"
    },
    {
      icon: <MonitorPlay className="w-5 h-5 text-jc-teal" />,
      text: "Activate shoppers across premium display & video"
    },
    {
      icon: <Route className="w-5 h-5 text-jc-teal" />,
      text: "Route directly to checkout"
    },
    {
      icon: <LineChart className="w-5 h-5 text-jc-teal" />,
      text: "Measure revenue back to ad exposure"
    }
  ];

  return (
    <section className="py-24 bg-jc-dark text-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Header (Single Line) */}
        <div className="text-center mb-16 lg:mb-24 flex justify-center mt-12 md:mt-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight w-full max-w-none break-words"
          >
            <span className="text-jc-teal font-extrabold uppercase mr-2 tracking-wider">IF YOU'RE INVESTING IN MEDIA</span> — It Should Drive Sales.
          </motion.h2>
        </div>

        {/* 12 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Narrower): Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 xl:col-span-4 w-full max-w-xl mx-auto lg:mx-0"
          >
            <div className="space-y-6 lg:space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-5 bg-gray-900/40 p-5 rounded-2xl border border-gray-800 transition-all duration-300 hover:bg-gray-800/60 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-jc-teal/10 flex items-center justify-center flex-shrink-0 border border-jc-teal/20">
                    {feature.icon}
                  </div>
                  <p className="text-lg font-medium text-white/90">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Wider): Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 xl:col-span-8 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-[16/10] shadow-2xl bg-black border border-gray-800">
               <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover scale-[1.02]"
              >
                <source src="/videos/investing.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />

              {/* Floating UI Elements */}
              <motion.div 
                className="absolute top-1/4 -left-4 lg:left-8 bg-jc-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-10 hidden sm:block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-sm font-medium text-white">Commerce activation</p>
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 -right-4 lg:right-8 bg-jc-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-10 hidden sm:block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-sm font-medium text-white">Not awareness media</p>
              </motion.div>

              {/* Chart Overlay */}
              <motion.div 
                className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-2xl z-10 min-w-[200px] hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-xs font-bold text-jc-dark mb-2 uppercase tracking-wider">Click-through</p>
                <div className="h-16 flex items-end gap-1">
                  {[40, 70, 45, 90, 60, 80, 50].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-jc-teal rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { BarChart3, ShoppingCart, Eye } from 'lucide-react';

export function ShoppableMedia() {
  const logos = [
    { name: 'Viacom', src: 'https://picsum.photos/seed/viacom/100/40' },
    { name: 'ABC', src: 'https://picsum.photos/seed/abc/100/40' },
    { name: 'ESPN', src: 'https://picsum.photos/seed/espn/100/40' },
    { name: 'Max', src: 'https://picsum.photos/seed/max/100/40' },
    { name: 'Hulu', src: 'https://picsum.photos/seed/hulu/100/40' },
    { name: 'TBS', src: 'https://picsum.photos/seed/tbs/100/40' },
    { name: 'CNN', src: 'https://picsum.photos/seed/cnn/100/40' },
    { name: 'Sling', src: 'https://picsum.photos/seed/sling/100/40' },
    { name: 'MTV', src: 'https://picsum.photos/seed/mtv/100/40' },
    { name: 'Bravo', src: 'https://picsum.photos/seed/bravo/100/40' },
  ];

  return (
    <section className="py-24 bg-jc-light-teal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-jc-dark leading-[1.1] tracking-tight mb-8">
              SHOPPABLE<br />
              MEDIA
            </h2>
            <p className="text-2xl lg:text-4xl text-jc-dark/80 font-light leading-snug">
              BRAND&<br />
              RETAILERS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* TV Frame Mockup */}
            <div className="relative bg-black rounded-3xl p-4 shadow-2xl border-4 border-gray-800 aspect-video flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/tv/800/450" 
                alt="TV Content" 
                className="w-full h-full object-cover rounded-xl opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl flex gap-8 items-center border border-white/10">
                  <img 
                    src="https://picsum.photos/seed/product/150/300" 
                    alt="Product" 
                    className="w-32 h-auto rounded-lg shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">Cannabis<br />with a <span className="text-blue-400">Smile</span></h3>
                    <p className="text-sm text-white/80 mb-6">Your happy place for the best weed in New Jersey</p>
                    <div className="bg-white p-2 rounded-lg inline-block">
                      <img 
                        src="https://picsum.photos/seed/qr/100/100" 
                        alt="QR Code" 
                        className="w-24 h-24"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs text-white/60 mt-2 text-center">Scan to shop now</p>
                  </div>
                </div>
              </div>
            </div>
            {/* TV Stand */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-gray-800 rounded-b-xl flex justify-between px-4">
               <div className="w-2 h-16 bg-gray-800 transform rotate-12 origin-top"></div>
               <div className="w-2 h-16 bg-gray-800 transform -rotate-12 origin-top"></div>
            </div>
          </motion.div>
        </div>

        {/* Features Bar */}
        <motion.div 
          className="mt-24 bg-white rounded-full py-6 px-8 shadow-xl flex flex-wrap justify-center gap-8 lg:gap-16 items-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-jc-dark font-medium">
            <BarChart3 className="w-6 h-6 text-jc-teal" />
            <span>Always-on growth</span>
          </div>
          <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3 text-jc-dark font-medium">
            <ShoppingCart className="w-6 h-6 text-jc-teal" />
            <span>Direct-to-purchase routing</span>
          </div>
          <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3 text-jc-dark font-medium">
            <Eye className="w-6 h-6 text-jc-teal" />
            <span>Proven ROAS visibility</span>
          </div>
        </motion.div>

        {/* Logos Marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <img 
                key={i} 
                src={logo.src} 
                alt={logo.name} 
                className="h-8 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Monitor, Tv, Package, Video, Layers, RefreshCw, CheckCircle2, Zap, TrendingUp, Users } from 'lucide-react';
import frostedVideo from '../static/marketing/videos/Frosted NUG CTV.mp4';

export function LaunchFaster() {
  const features = [
    {
      icon: <Monitor className="w-5 h-5 text-jc-teal" />,
      title: "Display",
      description: "High-impact responsive ads"
    },
    {
      icon: <Video className="w-5 h-5 text-jc-teal" />,
      title: "Video",
      description: "Optimized shoppable video units"
    },
    {
      icon: <Tv className="w-5 h-5 text-jc-teal" />,
      title: "Connected TV",
      description: "Premium streaming placements"
    },
    {
      icon: <Layers className="w-5 h-5 text-jc-teal" />,
      title: "Retailer-specific overlays",
      description: "Specific-retailer creative layers"
    },
    {
      icon: <Package className="w-5 h-5 text-jc-teal" />,
      title: "Product-level Units",
      description: "Granular SKU-based creative"
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-jc-teal" />,
      title: "Performance refresh cycles",
      description: "Continuous creative optimization"
    }
  ];

  return (
    <section className="py-24 bg-[#9ef0d4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-jc-dark leading-[1.1] tracking-tight mb-6">
              Launch Faster.<br />
              Convert Better.
            </h2>
            <p className="text-lg text-jc-dark/70 mb-12">
              Every JointCommerce activation includes access to our Integrated Creative Studio — built specifically for shoppable commerce campaigns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-jc-dark text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-jc-dark/60 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-jc-dark bg-white/50 p-4 rounded-xl border border-white/20">
              <CheckCircle2 className="w-5 h-5 text-jc-teal" />
              Creative built for verified A21+ commerce activation.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* UI Browser Mockup */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Browser Header */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>

              {/* Green Dashboard Container */}
              <div className="bg-[#5fb291] rounded-xl p-4 md:p-6 mb-4 relative overflow-hidden shadow-inner">
                <div className="bg-white rounded-xl p-4 shadow-xl w-full flex flex-col">
                  {/* Top Bar inside Dash */}
                  <div className="flex justify-between items-center mb-4">
                     <div className="font-extrabold text-[12px] tracking-widest text-[#5fb291]">CREATIVE ANALYTICS</div>
                     <div className="w-16 h-4 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="flex gap-4">
                    {/* Sidebar */}
                    <div className="w-1/4 border-r border-gray-100 pr-4 flex flex-col gap-3">
                      <div className="h-2 w-full bg-gray-200 rounded-full mt-2"></div>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-5/6 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-4/5 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                    </div>
                    {/* Main View */}
                    <div className="w-3/4 flex flex-col gap-4">
                      {/* Data grid top */}
                      <div className="grid grid-cols-3 gap-3">
                         <div className="h-10 bg-gray-50 rounded border border-gray-100"></div>
                         <div className="h-10 bg-gray-50 rounded border border-gray-100"></div>
                         <div className="h-10 bg-gray-50 rounded border border-gray-100"></div>
                      </div>
                      {/* Rows */}
                      <div className="space-y-3 mt-2">
                        <div className="h-5 bg-gray-50 rounded border border-gray-100 flex items-center px-3 gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                          <div className="h-1.5 w-16 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-5 bg-gray-50 rounded border border-gray-100 flex items-center px-3 gap-3">
                           <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                           <div className="h-1.5 w-20 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-5 bg-gray-50 rounded border border-gray-100 flex items-center px-3 gap-3">
                           <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                           <div className="h-1.5 w-12 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 3 blocks */}
              <div className="grid grid-cols-3 gap-4">
                {/* Block 1 */}
                <div className="bg-[#eff4ff] rounded-xl p-4 flex flex-col items-center justify-center aspect-[4/3] border border-[#e1ebff]">
                  <div className="w-10 h-10 rounded-full bg-[#dbe6fe] flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                </div>
                {/* Block 2 */}
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex flex-col justify-end aspect-[4/3]">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-auto mx-auto shadow-sm">
                     <Users className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="h-2 w-3/4 bg-gray-200 rounded-full mt-2 mx-auto"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded-full mt-2 mx-auto"></div>
                </div>
                {/* Block 3 - Dashed */}
                <div className="rounded-xl border-2 border-dashed border-[#d1d5db] p-4 flex flex-col items-center justify-center aspect-[4/3] bg-white text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mb-2 bg-gray-50 text-gray-400">
                    <span className="text-xl leading-none font-medium mb-0.5">+</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase">NEW VARIANT</span>
                </div>
              </div>

              {/* Floating Element: Top Right Video Player */}
              <motion.div 
                className="absolute -top-12 -right-16 w-56 bg-white p-3 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100 z-20 group"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
              >
                {/* Decorative header */}
                <div className="h-2 bg-gray-100 rounded-full w-12 mx-auto mb-3"></div>
                {/* Video container */}
                <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-xl overflow-hidden mb-3 shadow-inner">
                  <video 
                    src={frostedVideo} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <div className="px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-md font-bold text-[8px] tracking-wider uppercase flex items-center justify-center transition-transform group-hover:scale-0 group-hover:opacity-0 origin-center text-center">
                      <span className="leading-tight text-gray-900">VIEW ALL<br/>PRODUCTION</span>
                    </div>
                  </div>
                </div>
                {/* "Shop You" button */}
                <button className="w-full py-2.5 bg-[#310080] text-white text-xs font-bold tracking-wider rounded-lg uppercase shadow-md hover:bg-[#4300ab] transition-all hover:shadow-xl hover:-translate-y-0.5">
                  SHOP You
                </button>
              </motion.div>
              
              {/* Floating Element: Bottom Left Thumbnail */}
              <motion.div 
                className="absolute -bottom-8 -left-12 w-48 bg-white p-3 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-gray-100 z-20 group"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#eff4ff] flex items-center justify-center border border-[#dbe6fe]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                       <circle cx="12" cy="12" r="10"></circle>
                       <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                </div>
                <div className="w-full h-24 bg-[#fedac9] rounded-xl overflow-hidden relative flex flex-col items-center border border-[#fcceb8]">
                  <span className="text-[12px] mt-2 font-bold text-black/60 tracking-wider">Display AD</span>
                  {/* Decorative leaves/shapes */}
                  <div className="absolute -bottom-4 flex justify-center w-full">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#294c25] fill-current">
                      <path d="M50,100 C50,100 0,60 0,30 C0,10 20,0 50,0 C80,0 100,10 100,30 C100,60 50,100 50,100 Z" transform="scale(0.8) translate(10 20) rotate(-15 50 50)"></path>
                      <path d="M50,100 C50,100 0,60 0,30 C0,10 20,0 50,0 C80,0 100,10 100,30 C100,60 50,100 50,100 Z" transform="scale(0.9) translate(-5 10) rotate(20 50 50) opacity(0.8)"></path>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-24 bg-jc-teal/10 rounded-full py-6 px-8 flex flex-wrap justify-between items-center max-w-5xl mx-auto border border-jc-teal/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm">
            <Zap className="w-5 h-5 text-jc-teal" />
            <span>No production delays</span>
          </div>
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm">
            <RefreshCw className="w-5 h-5 text-jc-teal" />
            <span>Faster deployment</span>
          </div>
          <div className="flex items-center gap-3 text-jc-dark font-medium text-sm">
            <TrendingUp className="w-5 h-5 text-jc-teal" />
            <span>Higher conversion alignment</span>
          </div>
          <button className="px-6 py-2 rounded-full bg-jc-teal text-jc-dark font-bold text-sm hover:bg-jc-teal/90 transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}

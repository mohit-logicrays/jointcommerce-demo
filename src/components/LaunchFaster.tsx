import { motion } from 'framer-motion';
import { Monitor, Tv, Package, Video, Layers, RefreshCw, CheckCircle2, Zap, TrendingUp } from 'lucide-react';

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
    <section className="py-24 bg-jc-light-teal overflow-hidden">
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
            {/* UI Mockup */}
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              <div className="flex gap-6">
                {/* Sidebar */}
                <div className="w-1/3 space-y-4">
                  <div className="h-8 bg-gray-100 rounded-md w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                  </div>
                  <div className="mt-8 space-y-2">
                    <div className="h-24 bg-gray-100 rounded-xl w-full"></div>
                    <div className="h-24 bg-gray-100 rounded-xl w-full"></div>
                  </div>
                </div>
                {/* Main Content */}
                <div className="w-2/3 space-y-6">
                  <div className="h-48 bg-gray-100 rounded-2xl w-full overflow-hidden relative">
                    <img src="https://picsum.photos/seed/creative/400/200" alt="Creative" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-100 rounded-md w-1/3"></div>
                    <div className="h-8 bg-jc-dark rounded-full w-1/4"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-2xl">+</span>
                      </div>
                    </div>
                    <div className="h-32 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-sm font-medium">NEW VARIANT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-jc-dark p-4 rounded-2xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-2 rounded-2xl shadow-xl border border-gray-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <img src="https://picsum.photos/seed/thumb/100/100" alt="Thumbnail" className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
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

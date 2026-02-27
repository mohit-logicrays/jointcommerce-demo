import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: "Discovery",
      description: "Search-driven \"where to buy\" demand captured through our directory."
    },
    {
      title: "Activation",
      description: "Shoppable display & video across curated premium publisher environments."
    },
    {
      title: "Routing",
      description: "Direct purchase-enabled menus, retailer ecommerce, brand product pages, or selected marketplace endpoints."
    },
    {
      title: "Measurement",
      description: "Revenue, ROAS, order-level tracking, new vs returning performance."
    }
  ];

  return (
    <section className="py-24 bg-jc-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-jc-dark tracking-tight">HOW IT WORKS</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* iMac Mockup */}
            <div className="relative bg-gray-200 rounded-3xl p-4 shadow-2xl border-4 border-gray-300 aspect-video flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/dashboard/800/450" 
                alt="Dashboard" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors cursor-pointer group">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            {/* iMac Stand */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl clip-path-stand"></div>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-4 bg-gray-400 rounded-full blur-sm"></div>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-jc-teal/20 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative flex gap-6 md:gap-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step Indicator */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-jc-light-teal border-4 border-white flex items-center justify-center shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-jc-teal" />
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-jc-dark mb-2">{step.title}</h3>
                    <p className="text-jc-dark/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

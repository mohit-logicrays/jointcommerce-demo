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
    <section className="py-24 bg-jc-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-jc-teal">IF YOU'RE INVESTING IN MEDIA</span><br />
              It Should Drive Sales.
            </h2>
            
            <div className="mt-12 space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-jc-teal/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-lg text-white/90">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square">
              <img 
                src="https://picsum.photos/seed/shopping/800/1000" 
                alt="Shopper" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                className="absolute top-1/4 -left-8 bg-jc-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-sm font-medium text-white">Commerce activation</p>
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 -right-8 bg-jc-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-sm font-medium text-white">Not awareness media</p>
              </motion.div>

              {/* Chart Overlay */}
              <motion.div 
                className="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-4 shadow-2xl"
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

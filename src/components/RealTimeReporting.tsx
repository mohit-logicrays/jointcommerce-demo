import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, PieChart, TrendingUp } from 'lucide-react';

export function RealTimeReporting() {
  const metrics = [
    "Revenue driven",
    "ROAS",
    "Order ID & timestamp",
    "Confirmation page URL",
    "Revenue by store & brand",
    "Average Order Value",
    "New vs returning",
    "Market breakdown"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-jc-dark leading-[1.1] tracking-tight mb-6 uppercase">
              REAL-TIME<br />
              REPORTING
            </h2>
            <p className="text-xl text-jc-dark/80 mb-12 font-light">
              See Exactly What Drove Sales.
            </p>

            <p className="text-sm font-bold text-jc-dark mb-6 uppercase tracking-wider">Dashboards include (where enabled):</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-jc-teal flex-shrink-0" />
                  <span className="text-sm font-medium text-jc-dark/80">{metric}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-jc-teal/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-jc-teal" />
              </div>
              <p className="text-sm font-medium text-jc-dark/60">Full placement transparency</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-xs font-mono text-gray-400">analytics_v2_live.sh</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-jc-teal animate-pulse"></div>
                  <span className="text-xs font-bold text-jc-teal uppercase tracking-widest">LIVE FEED</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-8">
                {/* Top Metrics */}
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">REVENUE ATTRIBUTION</h3>
                    <div className="flex gap-4">
                      <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">ROAS</p>
                        <p className="text-xl font-bold text-jc-teal">14.2x</p>
                      </div>
                      <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">CONVERSION</p>
                        <p className="text-xl font-bold text-gray-900">4.8%</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Last 24 Hours</p>
                    <div className="flex items-end gap-2 h-24">
                      {[40, 70, 45, 90, 60, 80].map((height, i) => (
                        <div 
                          key={i} 
                          className="w-8 bg-jc-teal/20 rounded-t-sm relative group"
                          style={{ height: `${height}%` }}
                        >
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-jc-teal rounded-t-sm transition-all duration-500"
                            style={{ height: `${height * 0.8}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                      <tr>
                        <th className="px-4 py-3">ORDER ID</th>
                        <th className="px-4 py-3">BRAND</th>
                        <th className="px-4 py-3 text-right">REVENUE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { id: "#JC-99210", brand: "Enterprise Store A", rev: "$1,240.00" },
                        { id: "#JC-99209", brand: "Global Brand X", rev: "$842.15" },
                        { id: "#JC-99208", brand: "Lifestyle Gear", rev: "$2,105.50" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 font-mono text-xs text-gray-500">{row.id}</td>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.brand}</td>
                          <td className="px-4 py-3 font-bold text-gray-900 text-right">{row.rev}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -bottom-12 -right-12 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-64 z-30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-jc-teal/10 flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-jc-teal" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">MARKET SHARE</h4>
                    <p className="text-lg font-bold text-gray-900">California</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Los Angeles</span>
                    <span className="font-bold text-gray-900">45%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-jc-teal h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs pt-2">
                    <span className="text-gray-500">San Francisco</span>
                    <span className="font-bold text-gray-900">30%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-jc-teal/60 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Small Laptop Mockup Below */}
            <motion.div 
              className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-md z-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-gray-800 rounded-t-xl p-2 shadow-2xl border-2 border-gray-900 aspect-[16/10] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-white m-1 rounded-lg overflow-hidden flex flex-col">
                  <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                    </div>
                    <div className="flex-1 flex items-end gap-2">
                      {[30, 50, 40, 80, 60, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-jc-teal rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-20 h-3 bg-gray-300 rounded-b-lg shadow-xl w-[110%] -ml-[5%] flex justify-center">
                <div className="w-16 h-1 bg-gray-400 rounded-b-sm"></div>
              </div>
              
              {/* Text next to laptop */}
              <div className="absolute top-1/2 -right-32 -translate-y-1/2 hidden xl:block">
                <h3 className="text-xl font-bold text-jc-dark uppercase tracking-widest leading-tight">
                  BUILT FOR<br />
                  ACCOUNTABILITY.
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Dark curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-jc-dark clip-path-curve-bottom z-10"></div>
    </section>
  );
}

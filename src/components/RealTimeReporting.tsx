import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Receipt } from 'lucide-react';

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
    <section className="py-24 bg-[#6EDDD2] overflow-visible relative z-10 pb-64">
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden lg:block relative"
          >
            {/* Revenue Attribution Widget Mockup */}
            <div className="absolute right-0 -top-12 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100/50 w-[460px] z-20">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  <span className="ml-3 text-[10px] font-mono text-gray-400">analytics_v2_live.sh</span>
                </div>
                <div className="bg-[#e6fcf5] text-jc-teal text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#bcece0]">
                  LIVE FEED
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 border-b-2 border-jc-teal pb-1 inline-block">REVENUE ATTRIBUTION</h3>
                  <div className="flex gap-4">
                    <div className="bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-[8px] text-gray-400 uppercase font-bold mb-1 tracking-wider">AVG ROAS</p>
                      <p className="text-xl font-black text-jc-teal">14.2x</p>
                    </div>
                    <div className="bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm relative -ml-2 z-10 bg-white shadow-xl scale-105">
                      <p className="text-[8px] text-gray-400 uppercase font-bold mb-1 tracking-wider">CONVERSION</p>
                      <p className="text-xl font-black text-gray-900">4.8%</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-[9px] font-bold text-jc-teal mb-4 tracking-wider">Last 24 Hours</p>
                  <div className="flex items-end gap-1.5 h-20">
                    {[30, 80, 45, 100, 60, 90, 75].map((height, i) => (
                      <div key={i} className="w-5 bg-jc-teal/20 rounded-t-sm group relative">
                        <div className="absolute bottom-0 left-0 right-0 bg-jc-teal rounded-t-sm transition-all duration-300 group-hover:bg-[#1ba87e]" style={{ height: `${height * 0.9}%` }}/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="mt-6 border-t border-gray-100 pt-4">
                <table className="w-full text-left text-[10px]">
                  <thead className="text-gray-400 uppercase font-bold text-[8px] tracking-widest mb-2 block">
                    <tr className="flex items-center">
                      <th className="w-1/4 pb-2">ORDER ID</th>
                      <th className="w-1/2 pb-2">BRAND</th>
                      <th className="w-1/4 text-right pb-2">REVENUE</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-3 block mt-2">
                    {[
                      { id: "#JC-99210", brand: "Enterprise Store A", rev: "$1,240.00" },
                      { id: "#JC-99209", brand: "Global Brand X", rev: "$842.15" },
                      { id: "#JC-99208", brand: "Lifestyle Gear", rev: "$2,105.50" },
                    ].map((row, i) => (
                      <tr key={i} className="flex items-center border-b border-gray-50 pb-2 hover:bg-gray-50 transition-colors">
                        <td className="w-1/4 font-mono text-[9px] text-gray-400">{row.id}</td>
                        <td className="w-1/2 font-bold text-gray-800">{row.brand}</td>
                        <td className="w-1/4 font-black text-gray-900 text-right">{row.rev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Centered Laptop Mockup at Bottom */}
      <div className="relative mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-30 pb-12 mb-[-120px]">
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Laptop Mockup Background Glow */}
            <div className="absolute inset-0 bg-black/5 blur-[100px] rounded-full scale-110 -z-10"></div>

            {/* Laptop Screen Body */}
            <div className="relative w-full aspect-[16/10] bg-[#1a1c23] rounded-t-2xl md:rounded-t-3xl p-2 md:p-3 shadow-2xl z-20 flex flex-col items-center">
              {/* Camera Notch */}
              <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-16 md:w-24 h-3 md:h-4 bg-[#1a1c23] rounded-b-md md:rounded-b-lg z-30"></div>
              
              {/* Display Area */}
              <div className="bg-[#f8fafc] w-full h-full rounded-lg md:rounded-xl overflow-hidden relative flex flex-col text-[#0f172a]">
                
                {/* Dashboard Top Header */}
                <div className="flex justify-between items-center p-3 md:p-6 pb-2 md:pb-4 border-b border-gray-200 bg-white">
                  <div className="h-6 md:h-8 px-4 rounded-full border border-gray-200 flex items-center bg-gray-50 text-[8px] md:text-[10px] text-gray-500 font-mono tracking-wider w-1/2 md:w-1/4">
                    04/18/2023 - 09/25/2023
                  </div>
                  <div className="h-6 md:h-8 px-4 md:px-6 bg-[#b9f2e5] text-jc-dark text-[8px] md:text-[10px] font-bold tracking-widest uppercase flex items-center rounded-full">
                    Submit
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex px-3 md:px-6 gap-6 md:gap-8 border-b border-gray-200 text-[10px] md:text-xs bg-white">
                  <div className="font-bold border-b-2 border-jc-dark pb-3 text-jc-dark -mb-[1px]">Overall Summary</div>
                  <div className="font-medium text-gray-400 pb-3 hover:text-gray-600 transition-colors cursor-pointer">Audience Trends</div>
                </div>

                <div className="flex-1 p-3 md:p-6 flex flex-col relative bg-[#f8fafc]">
                  
                  {/* Blurred Background Grid */}
                  <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-8 opacity-80">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="aspect-[2/1] bg-white border border-gray-100 shadow-sm rounded-xl hidden md:flex flex-col justify-center items-center">
                        <div className="w-6 h-6 rounded-full bg-[#d0f4e8] mb-2 mx-auto"></div>
                        <div className="h-1.5 w-12 bg-gray-200 rounded-full mx-auto"></div>
                      </div>
                    ))}
                  </div>

                  {/* Graph Area */}
                  <div className="flex-1 mt-auto relative min-h-[100px] md:min-h-[160px] border-l border-b border-gray-200">
                    {/* Y-axis labels */}
                    <div className="absolute -left-6 top-0 text-[8px] text-gray-400">2,00<br/>0</div>
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[8px] text-gray-400">1,00<br/>0</div>
                    <div className="absolute -left-4 bottom-0 text-[8px] text-gray-400">0</div>
                    
                    {/* Grid lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
                    <div className="absolute top-1/4 left-0 right-0 w-px h-full bg-gray-200"></div>
                    <div className="absolute top-1/2 left-0 right-0 w-px h-full bg-gray-200" style={{ left: '25%' }}></div>
                    <div className="absolute top-1/2 left-0 right-0 w-px h-full bg-gray-200" style={{ left: '50%' }}></div>
                    <div className="absolute top-1/2 left-0 right-0 w-px h-full bg-gray-200" style={{ left: '75%' }}></div>

                    {/* Bars & Lines */}
                    <div className="absolute inset-0 flex items-end justify-between px-4 md:px-12 pointer-events-none z-10">
                       {[
                        { bar1: 50, bar2: 5, label: "Nov '23" },
                        { bar1: 50, bar2: 30, label: "02 Nov" },
                        { bar1: 50, bar2: 0, label: "03 Nov" },
                        { bar1: 50, bar2: 45, label: "04 Nov" },
                        { bar1: 50, bar2: 45, label: "05 Nov" },
                        { bar1: 50, bar2: 45, label: "06 Nov" },
                        { bar1: 50, bar2: 0, label: "07 Nov" }
                      ].map((data, idx) => (
                        <div key={idx} className="relative flex flex-col items-center h-[90%] w-8 justify-end">
                           <div className="flex items-end gap-1 w-full h-full relative">
                             {/* Light Teal Bar */}
                             <div className="w-1/2 bg-[#b9f2e5] opacity-50 absolute bottom-0 left-0" style={{ height: `${data.bar1}%` }}></div>
                             {/* Black Bar */}
                             <div className="w-1/2 bg-[#20222a] absolute bottom-0 right-0 z-10" style={{ height: `${data.bar2}%` }}></div>
                           </div>
                           <span className="absolute -bottom-6 text-[8px] text-gray-400 text-center uppercase tracking-widest">{data.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Connecting Line Graph */}
                    <svg className="absolute inset-0 w-full h-[90%] left-0 bottom-[10%] drop-shadow-sm pointer-events-none z-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M 8 98 L 22 55 L 36 98 L 50 15 L 64 5 L 78 15 L 92 98" fill="none" stroke="#20222a" strokeWidth="1.5" />
                      <circle cx="22" cy="55" r="1.5" fill="#20222a" className="hidden md:block"/>
                      <circle cx="36" cy="98" r="1.5" fill="#20222a" className="hidden md:block"/>
                      <circle cx="50" cy="15" r="1.5" fill="#20222a" className="hidden md:block"/>
                      <circle cx="64" cy="5" r="1.5" fill="#20222a" className="hidden md:block"/>
                    </svg>
                  </div>

                  {/* Floating Interactive "Driven Revenue" Card */}
                  <motion.div 
                    className="absolute top-4 md:top-8 left-4 md:left-12 bg-[#6EDDD2] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] border border-white z-30 min-w-[140px] md:min-w-[180px] cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg md:rounded-xl bg-[#20222a] flex items-center justify-center mb-3 md:mb-4 shadow-md">
                      <Receipt className="w-4 md:w-5 h-4 md:h-5 text-[#6EDDD2]" />
                    </div>
                    <h3 className="text-sm md:text-sm font-bold text-[#20222a] tracking-wider uppercase">Driven Revenue</h3>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* Laptop Base Lip & Hinge */}
            <div className="relative w-[114%] -ml-[7%] h-3 md:h-5 bg-gradient-to-b from-[#f1f5f9] to-[#94a3b8] rounded-b-xl md:rounded-b-2xl shadow-2xl z-20 flex justify-center items-start border border-[#cbd5e1]">
               {/* Indent / Opening lip */}
               <div className="w-1/4 h-1 md:h-1.5 bg-[#cbd5e1] rounded-b-md mx-auto shadow-inner"></div>
            </div>
            
            {/* Laptop Base Shadow Extender */}
            <div className="relative w-[110%] -ml-[5%] h-6 md:h-10 bg-[#e2e8f0] -mt-2 md:-mt-4 rounded-b-3xl blur-md -z-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"></div>
          </motion.div>
          {/* Sider Text Next to laptop */}
          <div className="absolute top-1/2 right-12 translate-x-full lg:right-0 xl:-right-12 hidden lg:block z-40 transform -translate-y-1/2">
            <h3 className="text-xl md:text-2xl font-black text-jc-dark uppercase tracking-widest leading-tight">
              BUILT FOR<br />
              ACCOUNTABILITY.
            </h3>
          </div>
      </div>
      
    </section>
  );
}

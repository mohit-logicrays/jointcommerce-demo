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
            {/* Laptop Mockup Background Glow */}
            <div className="absolute inset-0 bg-jc-teal/10 blur-[100px] rounded-full scale-110 -z-10"></div>

            {/* Laptop Screen Body */}
            <div className="relative w-full aspect-[16/10] bg-[#1a1c23] rounded-t-2xl md:rounded-t-3xl p-2 md:p-3 shadow-2xl z-20 flex flex-col items-center">
              {/* Camera Notch */}
              <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-16 md:w-24 h-3 md:h-4 bg-[#1a1c23] rounded-b-md md:rounded-b-lg z-30"></div>
              
              {/* Display Area */}
              <div className="bg-white w-full h-full rounded-lg md:rounded-xl overflow-hidden relative flex flex-col text-[#0f172a]">
                
                {/* Dashboard Top Header */}
                <div className="flex justify-between items-center p-3 md:p-6 pb-2 md:pb-4 border-b border-gray-100">
                  <div className="h-6 md:h-8 px-4 rounded-full border border-gray-200 flex items-center bg-gray-50 text-[8px] md:text-[10px] text-gray-500 font-mono tracking-wider w-1/2 md:w-1/3">
                    04/18/2023 - 09/25/2023
                  </div>
                  <div className="h-6 md:h-8 px-4 md:px-6 bg-[#b9f2e5] text-jc-dark text-[8px] md:text-[10px] font-bold tracking-widest uppercase flex items-center rounded-full">
                    Submit
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex px-3 md:px-6 gap-6 md:gap-8 border-b border-gray-100 text-[10px] md:text-xs">
                  <div className="font-bold border-b-2 border-jc-dark pb-3 text-jc-dark -mb-[1px]">Overall Summary</div>
                  <div className="font-medium text-gray-400 pb-3 hover:text-gray-600 transition-colors cursor-pointer">Audience Trends</div>
                </div>

                <div className="flex-1 p-3 md:p-6 flex flex-col relative">
                  
                  {/* Blurred Background Grid */}
                  <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-8 filter blur-sm opacity-60">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="aspect-[2/1] bg-[#e6fcf5] rounded-xl hidden md:flex flex-col justify-center items-center">
                        <div className="w-8 h-8 rounded-full bg-[#d0f4e8] mb-2 mx-auto"></div>
                        <div className="h-2 w-16 bg-[#bcece0] rounded-full mx-auto"></div>
                      </div>
                    ))}
                  </div>

                  {/* Graph Area */}
                  <div className="flex-1 mt-auto relative min-h-[100px] md:min-h-[160px] border-l border-b border-gray-100/50">
                    {/* Y-axis labels */}
                    <div className="absolute -left-6 top-0 text-[8px] text-gray-400">2,00<br/>0</div>
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[8px] text-gray-400">1,00<br/>0</div>
                    <div className="absolute -left-4 bottom-0 text-[8px] text-gray-400">0</div>
                    
                    {/* Grid lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gray-100/50"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100/50"></div>
                    <div className="absolute top-1/4 left-0 right-0 w-px h-full bg-gray-100/50"></div>
                    <div className="absolute top-1/2 left-0 right-0 w-px h-full bg-gray-100/50" style={{ left: '25%' }}></div>
                    <div className="absolute top-1/2 left-0 right-0 w-px h-full bg-gray-100/50" style={{ left: '50%' }}></div>
                    <div className="absolute top-1/2 left-0 right-0 w-px h-full bg-gray-100/50" style={{ left: '75%' }}></div>

                    {/* Bars & Lines */}
                    <div className="absolute inset-0 flex items-end justify-between px-4 md:px-12 pointer-events-none">
                      {[
                        { bar1: 50, bar2: 5, label: "Nov '23" },
                        { bar1: 50, bar2: 30, label: "02 Nov '23" },
                        { bar1: 50, bar2: 0, label: "03 Nov '23" },
                        { bar1: 50, bar2: 45, label: "04 Nov '23" },
                        { bar1: 50, bar2: 45, label: "05 Nov '23" },
                        { bar1: 50, bar2: 45, label: "06 Nov '23" },
                        { bar1: 50, bar2: 0, label: "07 Nov '23" }
                      ].map((data, idx) => (
                        <div key={idx} className="relative flex flex-col items-center h-[90%] w-8 justify-end">
                           <div className="flex items-end gap-1 w-full h-full relative">
                             {/* Light Teal Bar */}
                             <div className="w-1/2 bg-[#b9f2e5] opacity-50 absolute bottom-0 left-0" style={{ height: `${data.bar1}%` }}></div>
                             {/* Black Bar */}
                             <div className="w-1/2 bg-jc-dark absolute bottom-0 right-0 z-10" style={{ height: `${data.bar2}%` }}></div>
                           </div>
                           <span className="absolute -bottom-6 text-[8px] text-gray-400 text-center uppercase tracking-widest">{data.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Connecting Line Graph */}
                    <svg className="absolute inset-0 w-full h-[90%] left-0 bottom-[10%] drop-shadow-sm pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M 8 98 L 22 55 L 36 98 L 50 15 L 64 5 L 78 15 L 92 98" fill="none" stroke="#0f172a" strokeWidth="0.8" />
                    </svg>

                  </div>

                  {/* Floating Interactive "Driven Revenue" Card */}
                  <motion.div 
                    className="absolute top-4 md:top-8 left-4 md:left-8 bg-[#b9f2e5] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-[#a6eade] z-30 min-w-[140px] md:min-w-[200px] cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-lg md:rounded-xl bg-jc-dark flex items-center justify-center mb-3 md:mb-4 shadow-inner">
                      <Receipt className="w-4 md:w-6 h-4 md:h-6 text-[#b9f2e5]" />
                    </div>
                    <h3 className="text-sm md:text-lg font-bold text-jc-dark tracking-wide">Driven Revenue</h3>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* Laptop Base Lip & Hinge */}
            <div className="relative w-[114%] -ml-[7%] h-3 md:h-5 bg-gradient-to-b from-[#e2e8f0] to-[#94a3b8] rounded-b-xl md:rounded-b-2xl shadow-xl z-20 flex justify-center items-start border border-[#cbd5e1]">
               {/* Indent / Opening lip */}
               <div className="w-1/4 h-1 md:h-1.5 bg-[#cbd5e1] rounded-b-md mx-auto shadow-inner"></div>
            </div>
            
            {/* Laptop Base Shadow Extender */}
            <div className="relative w-[110%] -ml-[5%] h-6 md:h-10 bg-[#e2e8f0]/40 -mt-2 md:-mt-4 rounded-b-3xl blur-md -z-10"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Dark curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-jc-dark clip-path-curve-bottom z-10"></div>
    </section>
  );
}

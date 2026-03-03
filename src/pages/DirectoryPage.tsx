import { motion } from 'framer-motion';
import { Search, ShoppingCart, CheckCircle, MapPin } from 'lucide-react';

export function DirectoryPage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8"
         >
            <span className="text-jc-teal font-bold tracking-wider uppercase text-sm block">Directory</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
               SEO-Powered <br className="hidden md:block"/>
               Discovery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
               Capturing high-intent "where to buy" demand and routing customers precisely to purchase endpoints.
            </p>
            
            <div className="space-y-4 pt-4">
               <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-4 rounded-xl">
                  <MapPin className="text-jc-teal w-6 h-6" />
                  <span className="text-gray-800 font-semibold">Local Search Dominance</span>
               </div>
               <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-4 rounded-xl">
                  <ShoppingCart className="text-jc-teal w-6 h-6" />
                  <span className="text-gray-800 font-semibold">Direct Purchase Available (When Enabled)</span>
               </div>
            </div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full max-w-md"
         >
            {/* Abstract Graphic Search Mockup */}
            <div className="relative rounded-3xl bg-white border border-gray-200 p-8 shadow-sm overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-jc-teal/5 blur-[60px]" />
               
               <div className="relative z-10">
                  <div className="w-full bg-gray-100 h-14 rounded-full border border-gray-200 flex items-center px-6 mb-8">
                     <Search className="text-gray-400 w-6 h-6 mr-4" />
                     <div className="w-48 h-2 bg-gray-300 rounded-full" />
                  </div>
                  
                  <div className="space-y-4">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex items-start gap-4">
                           <div className="w-12 h-12 bg-jc-teal/10 rounded-lg flex-shrink-0" />
                           <div className="flex-1 space-y-2">
                              <div className="w-24 h-3 bg-gray-300 rounded" />
                              <div className="w-32 h-2 bg-gray-200 rounded" />
                           </div>
                           <CheckCircle className="text-jc-teal w-5 h-5 opacity-80" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
    </div>
    </div>
  );
}

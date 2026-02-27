import { motion } from 'framer-motion';
import { BarChart3, Presentation, Briefcase, FileDown, Network } from 'lucide-react';

export function AgenciesPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
         >
            <span className="text-jc-teal font-bold tracking-wider uppercase text-sm mb-4 block">For Agencies</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
               Agency & Wholesale <span className="text-jc-teal border-b-4 border-jc-teal pb-2">Activation</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
               Empower your clients with actionable, regulated discovery deployment designed for agency execution.
            </p>
            
            <div className="flex flex-col gap-6 mt-12 bg-black/40 p-8 rounded-2xl border border-white/10">
               <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-3">
                  <BarChart3 className="text-jc-teal w-6 h-6" /> Data Transparency
               </h3>
               <p className="text-white/70">
                  Includes real-time dashboards and easily exportable reporting tables, providing complete auditability for agency media buyers.
               </p>
               <button className="self-start px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center gap-2">
                 <FileDown className="w-4 h-4" /> Download Sample Report
               </button>
            </div>
         </motion.div>
         
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
         >
            {[
               { icon: Presentation, title: "Certified", desc: "For boutique teams specialized in highly-regulated segments." },
               { icon: Briefcase, title: "Strategic", desc: "For mid-market firms managing regional and statewide campaigns." },
               { icon: Network, title: "Enterprise", desc: "API integrations and custom multi-brand dashboarding for global holds." }
            ].map((tier, i) => (
               <div key={i} className="flex gap-6 p-6 md:p-8 bg-[#0a0f0f] border border-jc-teal/20 rounded-3xl hover:-translate-y-1 transition-transform">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-jc-teal/10 flex items-center justify-center">
                     <tier.icon className="w-8 h-8 text-jc-teal" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                     <p className="text-white/70 text-lg leading-snug">{tier.desc}</p>
                  </div>
               </div>
            ))}
         </motion.div>
      </div>
    </div>
  );
}

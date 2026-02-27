import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Link, Smartphone, FileText, CheckCircle2 } from 'lucide-react';

export function PremiumActivation() {
  const nodes = [
    { icon: <Link className="w-5 h-5 text-jc-teal" />, text: "DIRECT PUBLISHER\nRELATIONSHIPS", position: "top-left" },
    { icon: <Eye className="w-5 h-5 text-jc-teal" />, text: "100% VIEWABLE\nIMPRESSION STANDARDS", position: "top-right" },
    { icon: <ShieldCheck className="w-5 h-5 text-jc-teal" />, text: "VERIFIED A21+ AUDIENCE\nDEPLOYMENT", position: "left" },
    { icon: <Link className="w-5 h-5 text-jc-teal" />, text: "URL & APP-LEVEL\nTRANSPARENCY", position: "right" },
    { icon: <FileText className="w-5 h-5 text-jc-teal" />, text: "POLICY-ALIGNED\nPRIVATE INVENTORY", position: "bottom-left" },
    { icon: <Smartphone className="w-5 h-5 text-jc-teal" />, text: "CROSS-DEVICE\nREPORTING", position: "bottom-right" },
  ];

  return (
    <section className="py-24 bg-jc-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-jc-teal tracking-widest uppercase mb-4">PREMIUM ACTIVATION</h2>
          <p className="text-xl lg:text-2xl font-medium tracking-widest uppercase">PREMIUM INVENTORY. FULL TRANSPARENCY.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto aspect-square md:aspect-[2/1] flex items-center justify-center">
          {/* Center Logo */}
          <motion.div 
            className="absolute z-20 w-32 h-32 rounded-full border border-white/20 bg-jc-dark flex flex-col items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
              <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="white"/>
            </svg>
            <span className="text-[10px] font-bold tracking-widest">JOINTCOMMERCE</span>
          </motion.div>

          {/* Connecting Lines (Simplified for CSS) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-full h-px bg-white absolute transform rotate-45"></div>
            <div className="w-full h-px bg-white absolute transform -rotate-45"></div>
            <div className="w-full h-px bg-white absolute"></div>
          </div>

          {/* Nodes */}
          <div className="absolute inset-0">
            {nodes.map((node, index) => {
              // Calculate positions based on a circle/ellipse
              let top = '50%';
              let left = '50%';
              let transform = 'translate(-50%, -50%)';

              switch (node.position) {
                case 'top-left': top = '20%'; left = '20%'; break;
                case 'top-right': top = '20%'; left = '80%'; break;
                case 'left': top = '50%'; left = '10%'; break;
                case 'right': top = '50%'; left = '90%'; break;
                case 'bottom-left': top = '80%'; left = '20%'; break;
                case 'bottom-right': top = '80%'; left = '80%'; break;
              }

              return (
                <motion.div
                  key={index}
                  className="absolute flex items-center gap-3 bg-jc-dark border border-white/10 px-4 py-3 rounded-xl whitespace-pre-line text-xs font-bold tracking-wider text-right"
                  style={{ top, left, transform }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {node.position.includes('left') ? (
                    <>
                      <span className="text-right">{node.text}</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                        {node.icon}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                        {node.icon}
                      </div>
                      <span className="text-left">{node.text}</span>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

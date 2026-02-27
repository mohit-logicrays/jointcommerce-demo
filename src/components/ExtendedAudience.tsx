import { motion } from 'framer-motion';
import { Target, Users, RadioTower } from 'lucide-react';
import bgVideo from '../static/marketing/videos/6802bef7f0d9c9a024a79671_5eca3fffe575b1eed852c2467f9b2a0f90f4ea6f (1)-transcode.mp4';

export function ExtendedAudience() {
  const cards = [
    {
      icon: <Target className="w-6 h-6 text-jc-teal" />,
      title: "Verified Discovery",
      description: "Identity-resolved user verification for A21+ compliance, ensuring your audience matches your target profile with surgical accuracy."
    },
    {
      icon: <Users className="w-6 h-6 text-jc-teal" />,
      title: "Ancillary Advertising",
      description: "Strategic placement for non-competing brand partners within your premium media environments without diluting your core brand value."
    },
    {
      icon: <RadioTower className="w-6 h-6 text-jc-teal" />,
      title: "Publisher Nodes",
      description: "High-fidelity integration with premium media environments via direct API connections, maintaining data integrity and speed."
    }
  ];

  return (
    <section className="relative text-white z-0 mt-[-100px] pt-[200px] pb-32 overflow-hidden bg-jc-dark">
      {/* Angled Background Divider */}
      <div className="absolute top-0 left-0 w-full h-full clip-path-curve-bottom"></div>
      
      {/* Angled Top clip-path for the container */}
      <div 
        className="absolute inset-0 bg-[#14151a]"
        style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Background Video inside the angled section */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen">
           <video 
             src={bgVideo} 
             autoPlay 
             muted 
             loop 
             playsInline 
             className="w-full h-full object-cover"
           />
           {/* Gradient Overlay for better text legibility */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#14151a]/80 via-transparent to-[#14151a]"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-widest">
            EXTENDED AUDIENCE ACTIVATION
          </h2>
          <p className="text-lg text-jc-teal max-w-2xl mx-auto font-medium">
            For approved non-endemic and ancillary advertisers seeking verified A21+ discovery-driven audiences within premium publisher environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-jc-teal/30 flex items-center justify-center mb-6 group-hover:bg-jc-teal/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

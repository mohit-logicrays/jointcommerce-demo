import { motion } from 'framer-motion';
import { Target, Users, RadioTower } from 'lucide-react';

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
    <section className="py-32 bg-jc-dark text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

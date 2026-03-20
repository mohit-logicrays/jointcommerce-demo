'use client';

import { motion } from 'framer-motion';
;

// Import all OTT logos
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const eLogo = "/static/marketing/logos/OTTLogos/E_Logo_Flat_2012 1.png";
;
;
;
;
;
;
;

export function CTVMarketplace() {
  // Logo configuration with actual images - 4 rows of 7 logos each
  const logos = [
    // Row 1 - 7 logos
    [
      { name: 'Food Network', src: "/static/marketing/logos/OTTLogos/food-network-logo-white 1.png" },
      { name: 'Pluto TV', src: "/static/marketing/logos/OTTLogos/pluto-tv-solid-a30617b14fd7bfde90ab4665a9638798 1.png" },
      { name: 'MLB', src: "/static/marketing/logos/OTTLogos/Major League Baseball  2.png" },
      { name: 'FOX', src: "/static/marketing/logos/OTTLogos/Fox_Broadcasting_Company_logo_(2019) 2.png" },
      { name: 'Viacom', src: "/static/marketing/logos/OTTLogos/Viacom_media_networks 1.png" },
      { name: 'Fubo', src: "/static/marketing/logos/OTTLogos/Fubo_2023 2.png" },
      { name: 'Travel', src: "/static/marketing/logos/OTTLogos/svgviewer-output - 2026-03-12T120847.292 1.png" },
    ],
    // Row 2 - 7 logos
    [
      { name: 'Roku', src: "/static/marketing/logos/OTTLogos/svgviewer-output - 2026-03-12T123308.856 2.png" },
      { name: 'Bravo', src: "/static/marketing/logos/OTTLogos/Bravo_2024 1.png" },
      { name: 'ESPN', src: "/static/marketing/logos/OTTLogos/ESPN_wordmark 1.png" },
      { name: 'CBS', src: "/static/marketing/logos/OTTLogos/cbs 2.png" },
      { name: 'ABC', src: "/static/marketing/logos/OTTLogos/ABC-2021-LOGO 1.png" },
      { name: 'Vevo', src: "/static/marketing/logos/OTTLogos/Vevo_2016_Logo 1.png" },
      { name: 'HGTV', src: "/static/marketing/logos/OTTLogos/g3015.png" },
    ],
    // Row 3 - 7 logos
    [
      { name: 'Sling', src: "/static/marketing/logos/OTTLogos/logo-sling-rebrand 2.png" },
      { name: 'A&E', src: "/static/marketing/logos/OTTLogos/logo.0b00d86a 1.png" },
      { name: 'TBS', src: "/static/marketing/logos/OTTLogos/tbs-logo-white 2.png" },
      { name: 'History', src: "/static/marketing/logos/OTTLogos/svgviewer-output - 2026-03-12T120633.857 1.png" },
      { name: 'Hulu', src: "/static/marketing/logos/OTTLogos/Hulu_logo_(2018) 1.png" },
      { name: 'NBC Sports', src: "/static/marketing/logos/OTTLogos/NBCSN_2025 2.png" },
      { name: 'E!', src: eLogo },
    ],
    // Row 4 - 7 logos
    [
      { name: 'CNN', src: "/static/marketing/logos/OTTLogos/CNN_Logo_(2014) 1.png" },
      { name: 'Max', src: "/static/marketing/logos/OTTLogos/Max_logo 1.png" },
      { name: 'Nat Geo', src: "/static/marketing/logos/OTTLogos/Natgeologo 1.png" },
      { name: 'BET+', src: "/static/marketing/logos/OTTLogos/BET-2021Logo 1.png" },
      { name: 'AMC', src: "/static/marketing/logos/OTTLogos/AMC_logo_2019 1.png" },
      { name: 'Crackle', src: "/static/marketing/logos/OTTLogos/Crackle_(2019) 1.png" },
      { name: 'Adult Swim', src: "/static/marketing/logos/OTTLogos/adultswim-logo-white 1.png" },
    ],
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#0a0a0a]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={"/static/marketing/videos/OTT-Video.mp4"} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Our Connected TV and OTT Private Inventory Marketplace
          </h2>
        </motion.div>

        {/* Logo Grid - 4 rows of 7 logos each */}
        <div className="space-y-4 md:space-y-6 px-4">
          {logos.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
              className="flex items-center justify-center gap-3 md:gap-4 lg:gap-5"
            >
              {row.map((logo, logoIndex) => (
                <motion.div
                  key={logoIndex}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center justify-center bg-transparent hover:bg-[#1a1a1a] border border-white/10 rounded-lg p-3 w-[100px] h-[70px] md:w-[120px] md:h-[80px] lg:w-[140px] lg:h-[90px] transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* "and more..." text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-white/70 text-base md:text-lg font-light">and more...</p>
        </motion.div>
      </div>
    </section>
  );
}

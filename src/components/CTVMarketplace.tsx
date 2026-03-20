import { motion } from 'framer-motion';
import ottVideo from '../static/marketing/videos/OTT-Video.mp4';

// Import all OTT logos
import foodNetworkLogo from '../static/marketing/logos/OTTLogos/food-network-logo-white 1.png';
import plutoTvLogo from '../static/marketing/logos/OTTLogos/pluto-tv-solid-a30617b14fd7bfde90ab4665a9638798 1.png';
import mlbLogo from '../static/marketing/logos/OTTLogos/Major League Baseball  2.png';
import foxLogo from '../static/marketing/logos/OTTLogos/Fox_Broadcasting_Company_logo_(2019) 2.png';
import viacomLogo from '../static/marketing/logos/OTTLogos/Viacom_media_networks 1.png';
import fuboLogo from '../static/marketing/logos/OTTLogos/Fubo_2023 2.png';
import travelLogo from '../static/marketing/logos/OTTLogos/svgviewer-output - 2026-03-12T120847.292 1.png';
import rokuLogo from '../static/marketing/logos/OTTLogos/svgviewer-output - 2026-03-12T123308.856 2.png';
import bravoLogo from '../static/marketing/logos/OTTLogos/Bravo_2024 1.png';
import espnLogo from '../static/marketing/logos/OTTLogos/ESPN_wordmark 1.png';
import cbsLogo from '../static/marketing/logos/OTTLogos/cbs 2.png';
import abcLogo from '../static/marketing/logos/OTTLogos/ABC-2021-LOGO 1.png';
import vevoLogo from '../static/marketing/logos/OTTLogos/Vevo_2016_Logo 1.png';
import hgtvLogo from '../static/marketing/logos/OTTLogos/g3015.png';
import slingLogo from '../static/marketing/logos/OTTLogos/logo-sling-rebrand 2.png';
import aeLogo from '../static/marketing/logos/OTTLogos/logo.0b00d86a 1.png';
import tbsLogo from '../static/marketing/logos/OTTLogos/tbs-logo-white 2.png';
import historyLogo from '../static/marketing/logos/OTTLogos/svgviewer-output - 2026-03-12T120633.857 1.png';
import huluLogo from '../static/marketing/logos/OTTLogos/Hulu_logo_(2018) 1.png';
import mtvLogo from '../static/marketing/logos/OTTLogos/svgviewer-output - 2026-03-12T120847.292 1.png';
import nbcSportsLogo from '../static/marketing/logos/OTTLogos/NBCSN_2025 2.png';
import eLogo from '../static/marketing/logos/OTTLogos/E!_Logo_Flat_2012 1.png';
import cnnLogo from '../static/marketing/logos/OTTLogos/CNN_Logo_(2014) 1.png';
import maxLogo from '../static/marketing/logos/OTTLogos/Max_logo 1.png';
import natGeoLogo from '../static/marketing/logos/OTTLogos/Natgeologo 1.png';
import betLogo from '../static/marketing/logos/OTTLogos/BET-2021Logo 1.png';
import amcLogo from '../static/marketing/logos/OTTLogos/AMC_logo_2019 1.png';
import crackleLogo from '../static/marketing/logos/OTTLogos/Crackle_(2019) 1.png';
import adultSwimLogo from '../static/marketing/logos/OTTLogos/adultswim-logo-white 1.png';

export function CTVMarketplace() {
  // Logo configuration with actual images
  const logos = [
    // Row 1
    [
      { name: 'Food Network', src: foodNetworkLogo },
      { name: 'Pluto TV', src: plutoTvLogo },
      { name: 'MLB', src: mlbLogo },
      { name: 'FOX', src: foxLogo },
      { name: 'Viacom', src: viacomLogo },
      { name: 'Fubo', src: fuboLogo },
      { name: 'Travel', src: travelLogo },
      { name: 'Roku', src: rokuLogo },
      { name: 'Bravo', src: bravoLogo },
      { name: 'ESPN', src: espnLogo },
    ],
    // Row 2
    [
      { name: 'CBS', src: cbsLogo },
      { name: 'ABC', src: abcLogo },
      { name: 'Vevo', src: vevoLogo },
      { name: 'HGTV', src: hgtvLogo },
      { name: 'Sling', src: slingLogo },
      { name: 'A&E', src: aeLogo },
      { name: 'TBS', src: tbsLogo },
      { name: 'History', src: historyLogo },
      { name: 'Hulu', src: huluLogo },
      { name: 'MTV', src: mtvLogo },
    ],
    // Row 3
    [
      { name: 'NBC Sports', src: nbcSportsLogo },
      { name: 'E!', src: eLogo },
      { name: 'CNN', src: cnnLogo },
      { name: 'Max', src: maxLogo },
      { name: 'Nat Geo', src: natGeoLogo },
      { name: 'BET+', src: betLogo },
      { name: 'AMC', src: amcLogo },
      { name: 'Crackle', src: crackleLogo },
      { name: 'Adult Swim', src: adultSwimLogo },
    ],
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#0a0a0a]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={ottVideo} type="video/mp4" />
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

        {/* Logo Grid */}
        <div className="space-y-10 md:space-y-12 lg:space-y-14 px-4">
          {logos.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
              className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8"
            >
              {row.map((logo, logoIndex) => (
                <motion.div
                  key={logoIndex}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-6 md:h-8 lg:h-10 w-auto object-contain filter brightness-100 hover:brightness-110 transition-all"
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

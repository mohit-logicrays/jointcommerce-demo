import { Hero } from '../components/Hero';
import { Challenges } from '../components/Challenges';
import { DirectoryPromo } from '../components/DirectoryPromo';
import { AdvertisingPlatform } from '../components/AdvertisingPlatform';
import { BrandsBar } from '../components/BrandsBar';
import { CommerceNetwork } from '../components/CommerceNetwork';
import { ShoppableMedia } from '../components/ShoppableMedia';
import { ConnectedSystem } from '../components/ConnectedSystem';
import { InvestingInMedia } from '../components/InvestingInMedia';
import { PremiumActivation } from '../components/PremiumActivation';
import { LaunchFaster } from '../components/LaunchFaster';
import { DirectPurchase } from '../components/DirectPurchase';
import { RealTimeReporting } from '../components/RealTimeReporting';
import { CaseStudies } from '../components/CaseStudies';
import { ExtendedAudience } from '../components/ExtendedAudience';
import { AdTechSolutions } from '../components/AdTechSolutions';
import { HowItWorks } from '../components/HowItWorks';

export function HomePage() {
  return (
    <>
      <div id="hero"><Hero /></div>
      <div id="directory"><DirectoryPromo /></div>
      <div id="advertising-platform"><AdvertisingPlatform /></div>
      <div id="brands"><BrandsBar /></div>
      <div id="commerce-network"><CommerceNetwork /></div>
      <div id="challenges"><Challenges /></div>
      {/* <HowItWorks /> */}
      <div id="shoppable-media"><ShoppableMedia /></div>
      <div id="connected-system"><ConnectedSystem /></div>
      <div id="investing-in-media"><InvestingInMedia /></div>
      <div id="premium-activation"><PremiumActivation /></div>
      <div id="adtech-solutions"><AdTechSolutions /></div>
      <div id="launch-faster"><LaunchFaster /></div>
      <div id="direct-purchase"><DirectPurchase /></div>
      <div id="real-time-reporting"><RealTimeReporting /></div>
      <div id="case-studies"><CaseStudies /></div>
      <div id="extended-audience"><ExtendedAudience /></div>
    </>
  );
}

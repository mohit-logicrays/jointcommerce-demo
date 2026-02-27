import { Hero } from '../components/Hero';
import { DirectoryPromo } from '../components/DirectoryPromo';
import { CommerceNetwork } from '../components/CommerceNetwork';
import { ShoppableMedia } from '../components/ShoppableMedia';
import { ConnectedSystem } from '../components/ConnectedSystem';
import { InvestingInMedia } from '../components/InvestingInMedia';
import { PremiumActivation } from '../components/PremiumActivation';
import { LaunchFaster } from '../components/LaunchFaster';
import { DirectPurchase } from '../components/DirectPurchase';
import { RealTimeReporting } from '../components/RealTimeReporting';
import { ExtendedAudience } from '../components/ExtendedAudience';

export function HomePage() {
  return (
    <>
      <Hero />
      <DirectoryPromo />
      <CommerceNetwork />
      <ShoppableMedia />
      <ConnectedSystem />
      <InvestingInMedia />
      <PremiumActivation />
      <LaunchFaster />
      <DirectPurchase />
      <RealTimeReporting />
      <ExtendedAudience />
    </>
  );
}

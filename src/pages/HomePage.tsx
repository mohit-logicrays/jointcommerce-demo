import { Hero } from '../components/Hero';
import { Challenges } from '../components/Challenges';
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
import { AdTechSolutions } from '../components/AdTechSolutions';

export function HomePage() {
  return (
    <>
      <Hero />
      <DirectoryPromo />
      <Challenges />
      <CommerceNetwork />
      <ShoppableMedia />
      <ConnectedSystem />
      <InvestingInMedia />
      <PremiumActivation />
      <AdTechSolutions />
      <LaunchFaster />
      <DirectPurchase />
      <RealTimeReporting />
      <ExtendedAudience />
    </>
  );
}

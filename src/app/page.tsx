import { Hero } from '@/components/Hero';
import { Challenges } from '@/components/Challenges';
import { DirectoryPromo } from '@/components/DirectoryPromo';
import { AdvertisingPlatform } from '@/components/AdvertisingPlatform';
import { BrandsBar } from '@/components/BrandsBar';
import { CommerceNetwork } from '@/components/CommerceNetwork';
import { ShoppableMedia } from '@/components/ShoppableMedia';
import { ConnectedSystem } from '@/components/ConnectedSystem';
import { InvestingInMedia } from '@/components/InvestingInMedia';
import { PremiumActivation } from '@/components/PremiumActivation';
import { LaunchFaster } from '@/components/LaunchFaster';
import { DirectPurchase } from '@/components/DirectPurchase';
import { RealTimeReporting } from '@/components/RealTimeReporting';
import { ExtendedAudience } from '@/components/ExtendedAudience';
import { AdTechSolutions } from '@/components/AdTechSolutions';
import { HowItWorks } from '@/components/HowItWorks';

export default function Home() {
  return (
    <>
      <Hero />
      <DirectoryPromo />
      <AdvertisingPlatform />
      <BrandsBar />
      <CommerceNetwork />
      <Challenges />
      <HowItWorks />
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

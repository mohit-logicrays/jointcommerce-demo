import type { Metadata } from 'next';
import { Hero } from '@/app/components/Hero';
import { Challenges } from '@/app/components/Challenges';
import { DirectoryPromo } from '@/app/components/DirectoryPromo';
import { AdvertisingPlatform } from '@/app/components/AdvertisingPlatform';
import { BrandsBar } from '@/app/components/BrandsBar';
import { CommerceNetwork } from '@/app/components/CommerceNetwork';
import { ShoppableMedia } from '@/app/components/ShoppableMedia';
import { ConnectedSystem } from '@/app/components/ConnectedSystem';
import { PremiumActivation } from '@/app/components/PremiumActivation';
import { CTVMarketplace } from '@/app/components/CTVMarketplace';
import { LaunchFaster } from '@/app/components/LaunchFaster';
import { DirectPurchase } from '@/app/components/DirectPurchase';
import { RealTimeReporting } from '@/app/components/RealTimeReporting';
import { ExtendedAudience } from '@/app/components/ExtendedAudience';
import { AdTechSolutions } from '@/app/components/AdTechSolutions';
import { HowItWorks } from '@/app/components/HowItWorks';

export const metadata: Metadata = {
  description: 'JointCommerce - The leading shoppable media platform connecting brands, retailers, and shoppers through innovative advertising solutions.',
  openGraph: {
    title: 'JointCommerce - Shoppable Media Platform',
    description: 'Transform your advertising with our shoppable media platform.',
  },
};

export default function HomePage() {
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
      <PremiumActivation />
      <CTVMarketplace />
      <AdTechSolutions />
      <LaunchFaster />
      <DirectPurchase />
      <RealTimeReporting />
      <ExtendedAudience />
    </>
  );
}

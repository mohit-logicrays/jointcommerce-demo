/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CommerceNetwork } from './components/CommerceNetwork';
import { ShoppableMedia } from './components/ShoppableMedia';
import { ConnectedSystem } from './components/ConnectedSystem';
import { InvestingInMedia } from './components/InvestingInMedia';
import { HowItWorks } from './components/HowItWorks';
import { PremiumActivation } from './components/PremiumActivation';
import { LaunchFaster } from './components/LaunchFaster';
import { DirectPurchase } from './components/DirectPurchase';
import { RealTimeReporting } from './components/RealTimeReporting';
import { ExtendedAudience } from './components/ExtendedAudience';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-jc-dark font-sans selection:bg-jc-teal selection:text-jc-dark">
      <Navbar />
      <main>
        <Hero />
        <CommerceNetwork />
        <ShoppableMedia />
        <ConnectedSystem />
        <InvestingInMedia />
        <HowItWorks />
        <PremiumActivation />
        <LaunchFaster />
        <DirectPurchase />
        <RealTimeReporting />
        <ExtendedAudience />
      </main>
      <Footer />
    </div>
  );
}

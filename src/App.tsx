/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DirectoryPromo } from './components/DirectoryPromo';
import { CommerceNetwork } from './components/CommerceNetwork';
import { ShoppableMedia } from './components/ShoppableMedia';
import { ConnectedSystem } from './components/ConnectedSystem';
import { InvestingInMedia } from './components/InvestingInMedia';
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
      </main>
      <Footer />
    </div>
  );
}

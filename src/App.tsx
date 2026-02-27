/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { RetailersPage } from './pages/RetailersPage';
import { BrandsPage } from './pages/BrandsPage';
import { PartnersPage } from './pages/PartnersPage';
import { DemandInfrastructurePage } from './pages/DemandInfrastructurePage';
import { AgenciesPage } from './pages/AgenciesPage';
import { AdvertisersPage } from './pages/AdvertisersPage';
import { DirectoryPage } from './pages/DirectoryPage';
import { ShoppersPage } from './pages/ShoppersPage';
import { EnterprisePage } from './pages/EnterprisePage';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/retailers" element={<RetailersPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/demand-infrastructure" element={<DemandInfrastructurePage />} />
        <Route path="/agencies" element={<AgenciesPage />} />
        <Route path="/advertisers" element={<AdvertisersPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/shoppers" element={<ShoppersPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
      </Route>
    </Routes>
  );
}

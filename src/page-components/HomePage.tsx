'use client';

import { Hero } from '../components/Hero';
import { LiveActivity } from '../components/LiveActivity';
import { TrendingToday } from '../components/TrendingToday';
import { TodaysDrops } from '../components/TodaysDrops';
import { ForYouSection } from '../components/ForYouSection';
import { YourFavorites } from '../components/YourFavorites';
import { TrendingNearYou } from '../components/TrendingNearYou';
import { ExploreCannabis } from '../components/ExploreCannabis';
import { RetailersNearYou } from '../components/RetailersNearYou';
import { CommerceNetworkDiagram } from '../components/CommerceNetworkDiagram';
import { ForRetailers } from '../components/ForRetailers';
import { ForBrands } from '../components/ForBrands';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <>
      <div id="hero"><Hero /></div>
      <div id="live-activity"><LiveActivity /></div>
      <div id="trending-today"><TrendingToday /></div>
      <div id="todays-drops"><TodaysDrops /></div>
      <div id="for-you"><ForYouSection /></div>
      <div id="your-favorites"><YourFavorites /></div>
      <div id="trending-near-you"><TrendingNearYou /></div>
      <div id="explore-cannabis"><ExploreCannabis /></div>
      <div id="retailers-near-you"><RetailersNearYou /></div>
      <div id="commerce-network"><CommerceNetworkDiagram /></div>
      <div id="for-retailers"><ForRetailers /></div>
      <div id="for-brands"><ForBrands /></div>
      <div id="final-cta"><FinalCTA /></div>
    </>
  );
}

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advertisers | JointCommerce',
  description: 'Extended Audience Activation. Reach verified A21+ discovery-driven audiences across premium publisher environments with compliant deployment.',
};

export default function AdvertisersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

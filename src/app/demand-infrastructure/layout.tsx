import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demand Infrastructure | JointCommerce',
  description: 'Upstream Demand That Strengthens Retail Media & Marketplace Ecosystems. Infrastructure that fuels existing marketplace properties.',
};

export default function DemandInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

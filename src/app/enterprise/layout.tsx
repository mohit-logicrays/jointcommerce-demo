import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise | JointCommerce',
  description: 'Built for Scaled Operators & National Brands. Multi-market governance, cross-device dashboards, and dedicated integration support.',
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

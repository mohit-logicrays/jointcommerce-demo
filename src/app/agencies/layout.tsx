import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agencies | JointCommerce',
  description: 'Agency & Wholesale Activation. Empower client growth with actionable, regulated discovery deployment and real-time data transparency.',
};

export default function AgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

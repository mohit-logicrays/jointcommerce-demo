import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Directory | JointCommerce',
  description: 'SEO-Powered Discovery. Capturing high-intent "where to buy" demand and routing customers precisely to purchase endpoints.',
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

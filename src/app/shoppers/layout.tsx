import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shoppers | JointCommerce',
  description: 'Discover. Compare. Purchase. Help A21+ shoppers discover exactly where products are available locally and purchase directly.',
};

export default function ShoppersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

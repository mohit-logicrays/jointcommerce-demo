import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brands | JointCommerce',
  description: 'Drive Retail Sell-Through With Measurable Revenue Performance. Route activation traffic to retailer menus and marketplace listings.',
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

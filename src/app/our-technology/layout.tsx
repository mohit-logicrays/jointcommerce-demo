import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Technology | JointCommerce',
  description: 'World-class advertising technology to drive e-commerce sales. DSP & CDP integration and programmatic targeting for regulated companies.',
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

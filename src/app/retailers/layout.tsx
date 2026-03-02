import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retailers | JointCommerce',
  description: 'Enable Direct Purchase and launch Always-On Growth. Empowering retail businesses with a data-driven approach to overcome advertising restrictions.',
};

export default function RetailersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

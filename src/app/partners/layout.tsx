import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners | JointCommerce',
  description: 'Ecommerce & POS Integration. JointCommerce routes high-intent discovery demand directly into participating ecommerce menus and POS systems.',
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

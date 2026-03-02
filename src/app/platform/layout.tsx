import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform | Discovery Infrastructure',
  description: 'Built for performance-driven advertisers operating in regulated environments. JointCommerce is the platform powering discovery-to-commerce activation.',
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

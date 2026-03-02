import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | JointCommerce',
  description: 'Real Results / Case Studies. Private inventory marketplace of policy-compliant website and app publishers delivering high ROI.',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

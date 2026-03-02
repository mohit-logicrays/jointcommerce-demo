import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why JointCommerce | The Infrastructure Layer',
  description: 'JointCommerce controls discovery, activation, commerce routing, and revenue reporting in one infrastructure layer. Built for scaled operators and national brands.',
};

export default function WhyJointCommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

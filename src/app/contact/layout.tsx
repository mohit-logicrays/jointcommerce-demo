import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | JointCommerce',
  description: 'Ready to scale? Whether you\'re looking to enable direct purchase or scale your brand\'s reach—our team is ready to help you accelerate growth.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

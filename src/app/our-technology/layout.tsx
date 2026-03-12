import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Technology - JointCommerce',
  description: 'Learn about JointCommerce\'s cutting-edge technology stack. From AI-powered targeting to real-time analytics, discover the innovation driving commerce media forward.',
  keywords: ['technology', 'AI technology', 'commerce media tech', 'real-time analytics', 'advertising technology', 'JointCommerce'],
  openGraph: {
    title: 'Our Technology - JointCommerce',
    description: 'Learn about JointCommerce\'s cutting-edge technology stack. From AI-powered targeting to real-time analytics, discover the innovation driving commerce media forward.',
    type: 'website',
    url: 'https://jointcommerce.co/our-technology',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Technology - JointCommerce',
    description: 'Learn about JointCommerce\'s cutting-edge technology stack. From AI-powered targeting to real-time analytics, discover the innovation driving commerce media forward.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/our-technology',
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
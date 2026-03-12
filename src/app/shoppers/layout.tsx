import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Shoppers - JointCommerce',
  description: 'Discover personalized shopping experiences with JointCommerce. Find the best deals, exclusive offers, and products tailored to your preferences across our retail network.',
  keywords: ['shoppers', 'shopping experience', 'personalized shopping', 'deals', 'offers', 'retail network', 'JointCommerce'],
  openGraph: {
    title: 'For Shoppers - JointCommerce',
    description: 'Discover personalized shopping experiences with JointCommerce. Find the best deals, exclusive offers, and products tailored to your preferences across our retail network.',
    type: 'website',
    url: 'https://jointcommerce.co/shoppers',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce - For Shoppers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Shoppers - JointCommerce',
    description: 'Discover personalized shopping experiences with JointCommerce. Find the best deals, exclusive offers, and products tailored to your preferences across our retail network.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/shoppers',
  },
};

export default function ShoppersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
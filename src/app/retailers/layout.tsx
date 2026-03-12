import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Retailers - JointCommerce',
  description: 'Monetize your retail media with JointCommerce. Transform your customer data into revenue streams while providing enhanced shopping experiences and targeted advertising solutions.',
  keywords: ['retailers', 'retail media', 'monetization', 'customer data', 'retail advertising', 'commerce platform', 'JointCommerce'],
  openGraph: {
    title: 'For Retailers - JointCommerce',
    description: 'Monetize your retail media with JointCommerce. Transform your customer data into revenue streams while providing enhanced shopping experiences and targeted advertising solutions.',
    type: 'website',
    url: 'https://jointcommerce.co/retailers',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce - For Retailers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Retailers - JointCommerce',
    description: 'Monetize your retail media with JointCommerce. Transform your customer data into revenue streams while providing enhanced shopping experiences and targeted advertising solutions.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/retailers',
  },
};

export default function RetailersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
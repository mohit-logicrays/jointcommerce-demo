import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Advertisers - JointCommerce',
  description: 'Discover how JointCommerce empowers advertisers with advanced commerce media solutions, real-time analytics, and premium activation opportunities across our extensive retail network.',
  keywords: ['advertisers', 'commerce media', 'advertising platform', 'retail advertising', 'performance marketing', 'JointCommerce'],
  openGraph: {
    title: 'For Advertisers - JointCommerce',
    description: 'Discover how JointCommerce empowers advertisers with advanced commerce media solutions, real-time analytics, and premium activation opportunities across our extensive retail network.',
    type: 'website',
    url: 'https://jointcommerce.co/advertisers',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce - For Advertisers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Advertisers - JointCommerce',
    description: 'Discover how JointCommerce empowers advertisers with advanced commerce media solutions, real-time analytics, and premium activation opportunities across our extensive retail network.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/advertisers',
  },
};

export default function AdvertisersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
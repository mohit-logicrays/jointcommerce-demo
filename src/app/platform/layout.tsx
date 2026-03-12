import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform - JointCommerce',
  description: 'Explore JointCommerce\'s comprehensive commerce media platform. Discover our core infrastructure, advanced technology, and integrated solutions that power the future of retail advertising.',
  keywords: ['platform', 'commerce media platform', 'retail technology', 'advertising infrastructure', 'JointCommerce platform'],
  openGraph: {
    title: 'Platform - JointCommerce',
    description: 'Explore JointCommerce\'s comprehensive commerce media platform. Discover our core infrastructure, advanced technology, and integrated solutions that power the future of retail advertising.',
    type: 'website',
    url: 'https://jointcommerce.co/platform',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform - JointCommerce',
    description: 'Explore JointCommerce\'s comprehensive commerce media platform. Discover our core infrastructure, advanced technology, and integrated solutions that power the future of retail advertising.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/platform',
  },
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
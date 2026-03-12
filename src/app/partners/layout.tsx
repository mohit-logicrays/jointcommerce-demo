import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Partners - JointCommerce',
  description: 'Join JointCommerce\'s partner ecosystem. Integrate with our ecommerce and POS systems to access high-intent demand and grow your business through strategic partnerships.',
  keywords: ['partners', 'partnerships', 'ecommerce integration', 'POS integration', 'demand layer', 'JointCommerce'],
  openGraph: {
    title: 'For Partners - JointCommerce',
    description: 'Join JointCommerce\'s partner ecosystem. Integrate with our ecommerce and POS systems to access high-intent demand and grow your business through strategic partnerships.',
    type: 'website',
    url: 'https://jointcommerce.co/partners',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce - For Partners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Partners - JointCommerce',
    description: 'Join JointCommerce\'s partner ecosystem. Integrate with our ecommerce and POS systems to access high-intent demand and grow your business through strategic partnerships.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/partners',
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
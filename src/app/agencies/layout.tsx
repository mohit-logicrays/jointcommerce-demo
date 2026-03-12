import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Agencies - JointCommerce',
  description: 'Partner with JointCommerce to offer your clients cutting-edge commerce media solutions. Access our comprehensive platform, dedicated support, and performance-driven advertising tools.',
  keywords: ['agencies', 'marketing agencies', 'commerce media platform', 'agency partnerships', 'client solutions', 'JointCommerce'],
  openGraph: {
    title: 'For Agencies - JointCommerce',
    description: 'Partner with JointCommerce to offer your clients cutting-edge commerce media solutions. Access our comprehensive platform, dedicated support, and performance-driven advertising tools.',
    type: 'website',
    url: 'https://jointcommerce.co/agencies',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce - For Agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Agencies - JointCommerce',
    description: 'Partner with JointCommerce to offer your clients cutting-edge commerce media solutions. Access our comprehensive platform, dedicated support, and performance-driven advertising tools.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/agencies',
  },
};

export default function AgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demand Infrastructure - JointCommerce',
  description: 'Discover JointCommerce\'s demand infrastructure that connects brands with high-intent shoppers across our extensive retail network. Drive performance with precision targeting.',
  keywords: ['demand infrastructure', 'demand generation', 'retail network', 'shopper targeting', 'commerce media', 'JointCommerce'],
  openGraph: {
    title: 'Demand Infrastructure - JointCommerce',
    description: 'Discover JointCommerce\'s demand infrastructure that connects brands with high-intent shoppers across our extensive retail network. Drive performance with precision targeting.',
    type: 'website',
    url: 'https://jointcommerce.co/demand-infrastructure',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce Demand Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demand Infrastructure - JointCommerce',
    description: 'Discover JointCommerce\'s demand infrastructure that connects brands with high-intent shoppers across our extensive retail network. Drive performance with precision targeting.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/demand-infrastructure',
  },
};

export default function DemandInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
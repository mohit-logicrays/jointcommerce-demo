import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why JointCommerce - Leading Commerce Media Platform',
  description: 'Discover why leading brands and retailers choose JointCommerce. Learn about our unique approach to commerce media, proven results, and innovative technology solutions.',
  keywords: ['why JointCommerce', 'commerce media leader', 'proven results', 'innovative technology', 'brand success', 'retail partnerships'],
  openGraph: {
    title: 'Why JointCommerce - Leading Commerce Media Platform',
    description: 'Discover why leading brands and retailers choose JointCommerce. Learn about our unique approach to commerce media, proven results, and innovative technology solutions.',
    type: 'website',
    url: 'https://jointcommerce.co/why-jointcommerce',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'Why JointCommerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why JointCommerce - Leading Commerce Media Platform',
    description: 'Discover why leading brands and retailers choose JointCommerce. Learn about our unique approach to commerce media, proven results, and innovative technology solutions.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/why-jointcommerce',
  },
};

export default function WhyJointCommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
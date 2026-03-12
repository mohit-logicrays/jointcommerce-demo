import { HomePage } from '@/src/page-components/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JointCommerce - Leading Commerce Media Platform',
  description: 'Transform your retail business with JointCommerce\'s comprehensive commerce media platform. Connect brands, retailers, and shoppers through innovative advertising solutions and data-driven insights.',
  keywords: ['commerce media platform', 'retail advertising', 'brand partnerships', 'shopper marketing', 'retail media network', 'advertising technology', 'JointCommerce'],
  openGraph: {
    title: 'JointCommerce - Leading Commerce Media Platform',
    description: 'Transform your retail business with JointCommerce\'s comprehensive commerce media platform. Connect brands, retailers, and shoppers through innovative advertising solutions and data-driven insights.',
    type: 'website',
    url: 'https://jointcommerce.co',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce - Leading Commerce Media Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JointCommerce - Leading Commerce Media Platform',
    description: 'Transform your retail business with JointCommerce\'s comprehensive commerce media platform. Connect brands, retailers, and shoppers through innovative advertising solutions and data-driven insights.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co',
  },
};

export default function Page() {
  return <HomePage />;
}

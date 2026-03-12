import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopper Directory - JointCommerce',
  description: 'Explore JointCommerce\'s comprehensive shopper directory. Connect with verified shoppers, access detailed demographics, and target your ideal customers with precision.',
  keywords: ['shopper directory', 'customer directory', 'shopper data', 'customer targeting', 'demographics', 'JointCommerce'],
  openGraph: {
    title: 'Shopper Directory - JointCommerce',
    description: 'Explore JointCommerce\'s comprehensive shopper directory. Connect with verified shoppers, access detailed demographics, and target your ideal customers with precision.',
    type: 'website',
    url: 'https://jointcommerce.co/directory',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce Shopper Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopper Directory - JointCommerce',
    description: 'Explore JointCommerce\'s comprehensive shopper directory. Connect with verified shoppers, access detailed demographics, and target your ideal customers with precision.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/directory',
  },
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
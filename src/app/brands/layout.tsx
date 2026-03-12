import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Brands - JointCommerce',
  description: 'Accelerate your brand growth with JointCommerce\'s commerce media platform. Connect with high-intent shoppers, drive sales, and measure ROI across our premium retail network.',
  keywords: ['brands', 'brand marketing', 'commerce media', 'retail partnerships', 'brand growth', 'shopper marketing', 'JointCommerce'],
  openGraph: {
    title: 'For Brands - JointCommerce',
    description: 'Accelerate your brand growth with JointCommerce\'s commerce media platform. Connect with high-intent shoppers, drive sales, and measure ROI across our premium retail network.',
    type: 'website',
    url: 'https://jointcommerce.co/brands',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce - For Brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Brands - JointCommerce',
    description: 'Accelerate your brand growth with JointCommerce\'s commerce media platform. Connect with high-intent shoppers, drive sales, and measure ROI across our premium retail network.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/brands',
  },
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
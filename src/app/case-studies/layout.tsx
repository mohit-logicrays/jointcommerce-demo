import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - JointCommerce',
  description: 'Explore real success stories from brands and retailers using JointCommerce. See measurable results, ROI improvements, and growth achievements across our commerce media platform.',
  keywords: ['case studies', 'success stories', 'ROI', 'results', 'brand success', 'retail success', 'JointCommerce'],
  openGraph: {
    title: 'Case Studies - JointCommerce',
    description: 'Explore real success stories from brands and retailers using JointCommerce. See measurable results, ROI improvements, and growth achievements across our commerce media platform.',
    type: 'website',
    url: 'https://jointcommerce.co/case-studies',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - JointCommerce',
    description: 'Explore real success stories from brands and retailers using JointCommerce. See measurable results, ROI improvements, and growth achievements across our commerce media platform.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
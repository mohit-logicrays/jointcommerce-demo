import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - JointCommerce',
  description: 'Get in touch with JointCommerce. Contact our team to learn more about our commerce media solutions, schedule a demo, or discuss partnership opportunities.',
  keywords: ['contact', 'get in touch', 'demo', 'partnership', 'support', 'JointCommerce contact'],
  openGraph: {
    title: 'Contact Us - JointCommerce',
    description: 'Get in touch with JointCommerce. Contact our team to learn more about our commerce media solutions, schedule a demo, or discuss partnership opportunities.',
    type: 'website',
    url: 'https://jointcommerce.co/contact',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'Contact JointCommerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - JointCommerce',
    description: 'Get in touch with JointCommerce. Contact our team to learn more about our commerce media solutions, schedule a demo, or discuss partnership opportunities.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
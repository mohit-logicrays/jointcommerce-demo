import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - JointCommerce',
  description: 'Scale your business with JointCommerce\'s enterprise-grade commerce media solutions. Custom integrations, dedicated support, and advanced analytics for large organizations.',
  keywords: ['enterprise', 'enterprise solutions', 'large scale', 'custom integrations', 'dedicated support', 'JointCommerce'],
  openGraph: {
    title: 'Enterprise Solutions - JointCommerce',
    description: 'Scale your business with JointCommerce\'s enterprise-grade commerce media solutions. Custom integrations, dedicated support, and advanced analytics for large organizations.',
    type: 'website',
    url: 'https://jointcommerce.co/enterprise',
    siteName: 'JointCommerce',
    images: [
      {
        url: '/marketing/logos/logo-without-text.png',
        width: 1200,
        height: 630,
        alt: 'JointCommerce Enterprise Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Solutions - JointCommerce',
    description: 'Scale your business with JointCommerce\'s enterprise-grade commerce media solutions. Custom integrations, dedicated support, and advanced analytics for large organizations.',
    images: ['/marketing/logos/logo-without-text.png'],
  },
  alternates: {
    canonical: 'https://jointcommerce.co/enterprise',
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
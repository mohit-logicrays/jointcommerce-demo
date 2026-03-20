import type { Metadata } from 'next';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { SmoothScrollProvider } from '@/app/providers/SmoothScrollProvider';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'JointCommerce - Discovery Infrastructure for Performance Advertisers',
    template: '%s | JointCommerce',
  },
  description: 'JointCommerce powers discovery-to-commerce activation for performance-driven advertisers. Premium publisher network, direct purchase enablement, and real-time reporting.',
  keywords: ['discovery infrastructure', 'performance advertising', 'commerce activation', 'premium publishers', 'CTV marketplace', 'direct purchase', 'retail media'],
  authors: [{ name: 'JointCommerce' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/logo-jc/logo-jc.png', type: 'image/png' },
    ],
    apple: '/logo-jc/logo-jc.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'JointCommerce',
    title: 'JointCommerce - Discovery Infrastructure for Performance Advertisers',
    description: 'Premium publisher activation, flexible routing, and direct purchase enablement for performance-driven advertisers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JointCommerce - Discovery Infrastructure',
    description: 'Performance advertising platform for regulated industries.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-jc-dark font-sans selection:bg-jc-teal selection:text-jc-dark">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

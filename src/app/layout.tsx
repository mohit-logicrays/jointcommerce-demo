import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { LenisProvider } from '@/src/components/LenisProvider';
import { StructuredData, organizationStructuredData, websiteStructuredData, serviceStructuredData } from '@/src/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://jointcommerce.co'),
  title: {
    default: 'JointCommerce - The Cannabis Discovery-to-Checkout Network',
    template: '%s | JointCommerce',
  },
  description: 'The Cannabis Discovery-to-Checkout Network. Discover what\'s trending. Buy it nearby. JointCommerce connects A21+ verified cannabis shoppers with licensed retailers.',
  keywords: ['cannabis discovery', 'cannabis marketplace', 'dispensary finder', 'cannabis products', 'licensed retailers', 'cannabis shopping', 'JointCommerce'],
  authors: [{ name: 'JointCommerce' }],
  creator: 'JointCommerce',
  publisher: 'JointCommerce',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/marketing/logos/logo-without-text.png',
    shortcut: '/marketing/logos/logo-without-text.png',
    apple: '/marketing/logos/logo-without-text.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jointcommerce.co',
    siteName: 'JointCommerce',
    title: 'JointCommerce - The Cannabis Discovery-to-Checkout Network',
    description: 'Discover what\'s trending. Buy it nearby. Connect with A21+ verified cannabis shoppers and licensed retailers.',
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
    title: 'JointCommerce - The Cannabis Discovery-to-Checkout Network',
    description: 'Discover what\'s trending. Buy it nearby. Connect with A21+ verified cannabis shoppers and licensed retailers.',
    images: ['/marketing/logos/logo-without-text.png'],
    creator: '@jointcommerce',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#14B8A6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jointcommerce.co" />
        <meta name="theme-color" content="#14B8A6" />
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
        <StructuredData data={serviceStructuredData} />
      </head>
      <body>
        <LenisProvider>
          <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: '#F7F6F2' }}>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}

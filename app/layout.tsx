import type { Metadata } from 'next';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { SmoothScrollProvider } from '@/app/providers/SmoothScrollProvider';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'JointCommerce - Shoppable Media Platform',
    template: '%s | JointCommerce',
  },
  description: 'Transform your advertising with JointCommerce shoppable media platform. Connect brands, retailers, and shoppers seamlessly.',
  keywords: ['shoppable media', 'advertising platform', 'commerce network', 'retail media', 'CTV marketplace'],
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
  },
  twitter: {
    card: 'summary_large_image',
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

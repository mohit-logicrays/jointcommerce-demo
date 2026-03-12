import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { LenisProvider } from '@/src/components/LenisProvider';

export const metadata: Metadata = {
  title: 'JointCommerce',
  description: 'The leading commerce media platform connecting brands, retailers, and shoppers.',
  icons: {
    icon: '/marketing/logos/logo-without-text.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <div className="min-h-screen flex flex-col bg-jc-dark font-sans selection:bg-jc-teal selection:text-jc-dark">
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retailers',
  description: 'Partner with JointCommerce to unlock new revenue streams and enhance your retail media capabilities.',
};

export default function RetailersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

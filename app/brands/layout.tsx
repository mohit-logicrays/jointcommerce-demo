import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Amplify your brand presence with shoppable media experiences that drive direct sales and engagement.',
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

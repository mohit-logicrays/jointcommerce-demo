import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shoppers',
  description: 'Discover products seamlessly while enjoying your favorite content.',
};

export default function ShoppersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

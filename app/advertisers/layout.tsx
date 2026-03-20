import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advertisers',
  description: 'Reach high-intent shoppers with precision targeting and measurable results.',
};

export default function AdvertisersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

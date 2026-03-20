import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Join our partner ecosystem and deliver innovative commerce solutions to your clients.',
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Discover JointCommerce\'s powerful advertising platform that connects brands with shoppers through shoppable media experiences.',
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

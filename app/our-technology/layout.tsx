import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Technology',
  description: 'Explore the innovative technology powering JointCommerce shoppable media platform.',
};

export default function OurTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

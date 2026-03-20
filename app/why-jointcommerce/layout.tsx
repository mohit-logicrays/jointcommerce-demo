import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why JointCommerce',
  description: 'Discover why leading brands and retailers choose JointCommerce for their commerce needs.',
};

export default function WhyJointCommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise',
  description: 'Enterprise solutions designed for scale, security, and performance.',
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

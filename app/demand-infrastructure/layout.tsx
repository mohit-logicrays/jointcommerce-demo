import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demand Infrastructure',
  description: 'Enterprise-grade infrastructure powering the future of commerce and advertising.',
};

export default function DemandInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agencies',
  description: 'Empower your agency with cutting-edge tools for performance-driven commerce campaigns.',
};

export default function AgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

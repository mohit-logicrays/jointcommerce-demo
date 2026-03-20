import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Directory',
  description: 'Explore our comprehensive directory of brands, retailers, and partners.',
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

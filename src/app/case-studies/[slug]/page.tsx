import { CaseStudyDetailPage } from '@/src/page-components/CaseStudyDetailPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyDetailPage slug={slug} />;
}

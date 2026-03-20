import { CaseStudyDetailPage } from '@/app/page-components/CaseStudyDetailPage';
import { Metadata } from 'next';
import caseStudiesData from '@/app/data/caseStudies.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = (caseStudiesData as any[]).find(cs => cs.slug === slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - JointCommerce',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.title} Case Study - JointCommerce`,
    description: caseStudy.description || `Discover how ${caseStudy.title} achieved success with JointCommerce's commerce media platform. View detailed results, strategy, and ROI improvements.`,
    keywords: ['case study', caseStudy.title, 'success story', 'ROI', 'results', 'JointCommerce', caseStudy.category],
    openGraph: {
      title: `${caseStudy.title} Case Study - JointCommerce`,
      description: caseStudy.description || `Discover how ${caseStudy.title} achieved success with JointCommerce's commerce media platform.`,
      type: 'article',
      url: `https://jointcommerce.co/case-studies/${slug}`,
      siteName: 'JointCommerce',
      images: [
        {
          url: caseStudy.thumbnail || '/marketing/logos/logo-without-text.png',
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} Case Study`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} Case Study - JointCommerce`,
      description: caseStudy.description || `Discover how ${caseStudy.title} achieved success with JointCommerce's commerce media platform.`,
      images: [caseStudy.thumbnail || '/marketing/logos/logo-without-text.png'],
    },
    alternates: {
      canonical: `https://jointcommerce.co/case-studies/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyDetailPage slug={slug} />;
}

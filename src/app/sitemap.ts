import { MetadataRoute } from 'next';
import caseStudiesData from '@/src/data/caseStudies.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jointcommerce.co';
  
  // Static routes
  const staticRoutes = [
    '',
    '/retailers',
    '/brands',
    '/advertisers',
    '/agencies',
    '/partners',
    '/platform',
    '/our-technology',
    '/demand-infrastructure',
    '/directory',
    '/shoppers',
    '/enterprise',
    '/contact',
    '/why-jointcommerce',
    '/case-studies',
  ];

  // Dynamic case study routes
  const caseStudyRoutes = (caseStudiesData as any[]).map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static routes with metadata
  const staticSitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticSitemapEntries, ...caseStudyRoutes];
}
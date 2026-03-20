import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const routes = [
    '',
    '/platform',
    '/retailers',
    '/brands',
    '/partners',
    '/demand-infrastructure',
    '/agencies',
    '/advertisers',
    '/directory',
    '/shoppers',
    '/enterprise',
    '/contact',
    '/our-technology',
    '/why-jointcommerce',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}

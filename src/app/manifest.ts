import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JointCommerce - Leading Commerce Media Platform',
    short_name: 'JointCommerce',
    description: 'The leading commerce media platform connecting brands, retailers, and shoppers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14B8A6',
    icons: [
      {
        src: '/marketing/logos/logo-without-text.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
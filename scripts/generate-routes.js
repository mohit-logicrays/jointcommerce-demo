import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { path: 'retailers', title: 'Retailers', description: 'Partner with JointCommerce to unlock new revenue streams and enhance your retail media capabilities.' },
  { path: 'brands', title: 'Brands', description: 'Amplify your brand presence with shoppable media experiences that drive direct sales and engagement.' },
  { path: 'partners', title: 'Partners', description: 'Join our partner ecosystem and deliver innovative commerce solutions to your clients.' },
  { path: 'demand-infrastructure', title: 'Demand Infrastructure', description: 'Enterprise-grade infrastructure powering the future of commerce and advertising.' },
  { path: 'agencies', title: 'Agencies', description: 'Empower your agency with cutting-edge tools for performance-driven commerce campaigns.' },
  { path: 'advertisers', title: 'Advertisers', description: 'Reach high-intent shoppers with precision targeting and measurable results.' },
  { path: 'directory', title: 'Directory', description: 'Explore our comprehensive directory of brands, retailers, and partners.' },
  { path: 'shoppers', title: 'Shoppers', description: 'Discover products seamlessly while enjoying your favorite content.' },
  { path: 'enterprise', title: 'Enterprise', description: 'Enterprise solutions designed for scale, security, and performance.' },
  { path: 'contact', title: 'Contact', description: 'Get in touch with our team to learn how JointCommerce can transform your business.' },
  { path: 'our-technology', title: 'Our Technology', description: 'Explore the innovative technology powering JointCommerce\'s shoppable media platform.' },
  { path: 'why-jointcommerce', title: 'Why JointCommerce', description: 'Discover why leading brands and retailers choose JointCommerce for their commerce needs.' },
];

routes.forEach(route => {
  const routePath = path.join(__dirname, '..', 'app', route.path);
  
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }

  const layoutContent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${route.title}',
  description: '${route.description}',
};

export default function ${route.title.replace(/[^a-zA-Z]/g, '')}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;

  fs.writeFileSync(path.join(routePath, 'layout.tsx'), layoutContent);
  console.log(`Created layout for ${route.path}`);
});

console.log('All route layouts generated!');

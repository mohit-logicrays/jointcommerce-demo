import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageMapping = {
  'RetailersPage.tsx': 'retailers',
  'BrandsPage.tsx': 'brands',
  'PartnersPage.tsx': 'partners',
  'DemandInfrastructurePage.tsx': 'demand-infrastructure',
  'AgenciesPage.tsx': 'agencies',
  'AdvertisersPage.tsx': 'advertisers',
  'DirectoryPage.tsx': 'directory',
  'ShoppersPage.tsx': 'shoppers',
  'EnterprisePage.tsx': 'enterprise',
  'ContactPage.tsx': 'contact',
  'TechnologyPage.tsx': 'our-technology',
  'WhyJointCommercePage.tsx': 'why-jointcommerce',
};

const srcPagesDir = path.join(__dirname, '..', 'src', 'pages');
const appDir = path.join(__dirname, '..', 'app');

Object.entries(pageMapping).forEach(([sourceFile, routePath]) => {
  const sourcePath = path.join(srcPagesDir, sourceFile);
  const destPath = path.join(appDir, routePath, 'page.tsx');
  
  if (fs.existsSync(sourcePath)) {
    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Convert export function to default export
    content = content.replace(/export function (\w+)\(\)/, 'export default function $1()');
    
    // Add 'use client' if it uses hooks or framer-motion
    if (content.includes('useState') || content.includes('useEffect') || content.includes('motion.') || content.includes('framer-motion')) {
      content = `'use client';\n\n${content}`;
    }
    
    // Update import paths from relative to @/ alias
    content = content.replace(/from ['"]\.\.\/components\//g, "from '@/src/components/");
    
    fs.writeFileSync(destPath, content);
    console.log(`Converted ${sourceFile} to ${routePath}/page.tsx`);
  } else {
    console.log(`Source file not found: ${sourceFile}`);
  }
});

console.log('All pages converted!');

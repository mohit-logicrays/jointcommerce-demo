import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '..', 'src', 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') && f !== 'Layout.tsx');

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if it uses hooks or framer-motion
  const needsClient = content.includes('useState') || 
                      content.includes('useEffect') || 
                      content.includes('motion.') ||
                      content.includes('framer-motion') ||
                      content.includes('AnimatePresence');
  
  // Check if it already has 'use client'
  const hasUseClient = content.includes("'use client'");
  
  if (needsClient && !hasUseClient) {
    content = `'use client';\n\n${content}`;
    fs.writeFileSync(filePath, content);
    console.log(`Added 'use client' to ${file}`);
  }
});

console.log('Done!');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '..', 'app', 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all import statements for static assets
  const importRegex = /import\s+(\w+)\s+from\s+['"]\/static\/([^'"]+)['"]/g;
  const imports = [];
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    imports.push({
      varName: match[1],
      path: match[2],
      fullMatch: match[0]
    });
  }
  
  if (imports.length > 0) {
    // Remove all import statements
    imports.forEach(imp => {
      content = content.replace(imp.fullMatch, '');
    });
    
    // Replace variable usage with direct paths
    imports.forEach(imp => {
      const regex = new RegExp(`\\b${imp.varName}\\b`, 'g');
      content = content.replace(regex, `"/static/${imp.path}"`);
    });
    
    // Clean up empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file} - replaced ${imports.length} imports`);
  }
});

console.log('Done!');

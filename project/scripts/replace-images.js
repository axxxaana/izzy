import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');
const optimizedDir = join(__dirname, '../public/optimized');

async function replaceImages() {
  console.log('🔄 Replacing original images with optimized versions...\n');
  
  try {
    // Get all optimized files
    const optimizedFiles = fs.readdirSync(optimizedDir);
    let replacedCount = 0;
    let webpCount = 0;
    
    for (const file of optimizedFiles) {
      const optimizedPath = join(optimizedDir, file);
      const originalPath = join(publicDir, file);
      
      // Skip if it's already a WebP file (we'll handle those separately)
      if (file.endsWith('.webp')) {
        webpCount++;
        continue;
      }
      
      // Replace original with optimized version
      if (fs.existsSync(originalPath)) {
        const originalStats = fs.statSync(originalPath);
        const optimizedStats = fs.statSync(optimizedPath);
        
        const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
        
        // Copy optimized file to replace original
        fs.copyFileSync(optimizedPath, originalPath);
        
        console.log(`✅ Replaced ${file}: ${(originalStats.size / 1024).toFixed(1)}KB → ${(optimizedStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
        replacedCount++;
      }
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`- Replaced ${replacedCount} original images with optimized versions`);
    console.log(`- Created ${webpCount} WebP versions for better compression`);
    console.log(`\n💡 Next steps:`);
    console.log(`1. Update your React components to use the OptimizedImage component`);
    console.log(`2. Consider using WebP versions for browsers that support them`);
    console.log(`3. Run "npm run build" to see the performance improvements`);
    
  } catch (error) {
    console.error('❌ Error replacing images:', error);
  }
}

replaceImages(); 
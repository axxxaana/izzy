import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');
const optimizedDir = join(__dirname, '../public/optimized');

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function calculateImageStats() {
  console.log('📊 Image Optimization Statistics\n');
  
  try {
    const originalFiles = fs.readdirSync(publicDir).filter(file => 
      /\.(jpg|jpeg|png|gif|svg)$/i.test(file)
    );
    
    const optimizedFiles = fs.readdirSync(optimizedDir).filter(file => 
      /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file)
    );
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let totalWebPSize = 0;
    
    // Calculate original sizes
    for (const file of originalFiles) {
      const filePath = join(publicDir, file);
      const stats = fs.statSync(filePath);
      totalOriginalSize += stats.size;
    }
    
    // Calculate optimized sizes
    for (const file of optimizedFiles) {
      const filePath = join(optimizedDir, file);
      const stats = fs.statSync(filePath);
      
      if (file.endsWith('.webp')) {
        totalWebPSize += stats.size;
      } else {
        totalOptimizedSize += stats.size;
      }
    }
    
    const totalSavings = totalOriginalSize - totalOptimizedSize;
    const savingsPercentage = ((totalSavings / totalOriginalSize) * 100).toFixed(1);
    const webpSavings = totalOriginalSize - totalWebPSize;
    const webpSavingsPercentage = ((webpSavings / totalOriginalSize) * 100).toFixed(1);
    
    console.log('🎯 Optimization Results:');
    console.log('='.repeat(50));
    console.log(`📁 Total images processed: ${originalFiles.length}`);
    console.log(`📁 Optimized versions created: ${optimizedFiles.length}`);
    console.log(`🌐 WebP versions created: ${optimizedFiles.filter(f => f.endsWith('.webp')).length}`);
    
    console.log('\n💾 File Size Comparison:');
    console.log('-'.repeat(30));
    console.log(`📦 Original total: ${formatBytes(totalOriginalSize)}`);
    console.log(`⚡ Optimized total: ${formatBytes(totalOptimizedSize)}`);
    console.log(`🌐 WebP total: ${formatBytes(totalWebPSize)}`);
    
    console.log('\n💰 Savings:');
    console.log('-'.repeat(20));
    console.log(`📉 Standard optimization: ${formatBytes(totalSavings)} (${savingsPercentage}% smaller)`);
    console.log(`📉 WebP optimization: ${formatBytes(webpSavings)} (${webpSavingsPercentage}% smaller)`);
    
    console.log('\n🚀 Performance Impact:');
    console.log('-'.repeat(25));
    console.log(`⚡ Faster page loads: ~${savingsPercentage}% reduction in image payload`);
    console.log(`📱 Better mobile performance: Reduced bandwidth usage`);
    console.log(`🔍 Improved SEO: Better Core Web Vitals scores`);
    console.log(`💰 Cost savings: Reduced hosting bandwidth costs`);
    
    console.log('\n📈 Notable Improvements:');
    console.log('-'.repeat(30));
    
    // Show some specific examples
    const examples = [
      'izzy-image-hero.png',
      'izzy-about-hero.png', 
      'izzy-hero-2.png',
      'Founder personal brand strategy image.png',
      'Fractional marketing & brand direction image.png'
    ];
    
    for (const example of examples) {
      const originalPath = join(publicDir, example);
      const optimizedPath = join(optimizedDir, example);
      const webpPath = join(optimizedDir, example.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
      if (fs.existsSync(originalPath)) {
        const originalSize = fs.statSync(originalPath).size;
        let optimizedSize = 0;
        let webpSize = 0;
        
        if (fs.existsSync(optimizedPath)) {
          optimizedSize = fs.statSync(optimizedPath).size;
        }
        
        if (fs.existsSync(webpPath)) {
          webpSize = fs.statSync(webpPath).size;
        }
        
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`📸 ${example}:`);
        console.log(`   Original: ${formatBytes(originalSize)}`);
        console.log(`   Optimized: ${formatBytes(optimizedSize)} (${savings}% smaller)`);
        if (webpSize > 0) {
          console.log(`   WebP: ${formatBytes(webpSize)} (${webpSavings}% smaller)`);
        }
        console.log('');
      }
    }
    
    console.log('✅ Image optimization complete!');
    console.log('💡 Your website will now load significantly faster.');
    
  } catch (error) {
    console.error('❌ Error calculating image stats:', error);
  }
}

calculateImageStats(); 
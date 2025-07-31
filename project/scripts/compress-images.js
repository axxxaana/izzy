import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');
const outputDir = join(__dirname, '../public/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImages() {
  console.log('🖼️  Starting image compression...');
  
  try {
    // Compress JPEG images
    const jpegFiles = await imagemin([`${publicDir}/*.jpg`, `${publicDir}/*.jpeg`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({
          quality: 80,
          progressive: true,
        }),
      ],
    });
    
    console.log(`✅ Compressed ${jpegFiles.length} JPEG files`);
    
    // Compress PNG images
    const pngFiles = await imagemin([`${publicDir}/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.65, 0.8],
          speed: 4,
        }),
      ],
    });
    
    console.log(`✅ Compressed ${pngFiles.length} PNG files`);
    
    // Convert to WebP for better compression
    const webpFiles = await imagemin([`${publicDir}/*.{jpg,jpeg,png}`], {
      destination: outputDir,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6,
        }),
      ],
    });
    
    console.log(`✅ Created ${webpFiles.length} WebP files`);
    
    // Log file size savings
    let totalOriginalSize = 0;
    let totalCompressedSize = 0;
    
    for (const file of [...jpegFiles, ...pngFiles]) {
      const originalPath = join(publicDir, file.sourcePath);
      const originalStats = fs.statSync(originalPath);
      const compressedStats = fs.statSync(join(outputDir, file.destinationPath));
      
      totalOriginalSize += originalStats.size;
      totalCompressedSize += compressedStats.size;
      
      const savings = ((originalStats.size - compressedStats.size) / originalStats.size * 100).toFixed(1);
      console.log(`📊 ${file.sourcePath}: ${(originalStats.size / 1024).toFixed(1)}KB → ${(compressedStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
    }
    
    const totalSavings = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n🎉 Total compression: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB → ${(totalCompressedSize / 1024 / 1024).toFixed(1)}MB (${totalSavings}% smaller)`);
    
    console.log(`\n📁 Compressed images saved to: ${outputDir}`);
    console.log('💡 You can now replace the original images with the compressed versions.');
    
  } catch (error) {
    console.error('❌ Error compressing images:', error);
  }
}

compressImages(); 
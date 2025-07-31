import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');
const optimizedDir = join(__dirname, '../public/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

async function optimizeImages() {
  console.log('🚀 Starting comprehensive image optimization...\n');
  
  const results = {
    jpeg: { count: 0, originalSize: 0, compressedSize: 0 },
    png: { count: 0, originalSize: 0, compressedSize: 0 },
    webp: { count: 0, originalSize: 0, compressedSize: 0 },
    gif: { count: 0, originalSize: 0, compressedSize: 0 },
    svg: { count: 0, originalSize: 0, compressedSize: 0 }
  };

  try {
    // Optimize JPEG images
    console.log('📸 Optimizing JPEG images...');
    const jpegFiles = await imagemin([`${publicDir}/*.jpg`, `${publicDir}/*.jpeg`], {
      destination: optimizedDir,
      plugins: [
        imageminMozjpeg({
          quality: 75,
          progressive: true,
          smooth: 1,
        }),
      ],
    });
    
    results.jpeg.count = jpegFiles.length;
    console.log(`✅ Optimized ${jpegFiles.length} JPEG files`);

    // Optimize PNG images
    console.log('🖼️  Optimizing PNG images...');
    const pngFiles = await imagemin([`${publicDir}/*.png`], {
      destination: optimizedDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8],
          speed: 4,
          strip: true,
        }),
      ],
    });
    
    results.png.count = pngFiles.length;
    console.log(`✅ Optimized ${pngFiles.length} PNG files`);

    // Create WebP versions for better compression
    console.log('🌐 Creating WebP versions...');
    const webpFiles = await imagemin([`${publicDir}/*.{jpg,jpeg,png}`], {
      destination: optimizedDir,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6,
          nearLossless: 60,
        }),
      ],
    });
    
    results.webp.count = webpFiles.length;
    console.log(`✅ Created ${webpFiles.length} WebP files`);

    // Optimize GIF images
    console.log('🎬 Optimizing GIF images...');
    const gifFiles = await imagemin([`${publicDir}/*.gif`], {
      destination: optimizedDir,
      plugins: [
        imageminGifsicle({
          optimizationLevel: 3,
          interlaced: false,
        }),
      ],
    });
    
    results.gif.count = gifFiles.length;
    console.log(`✅ Optimized ${gifFiles.length} GIF files`);

    // Optimize SVG images
    console.log('🎨 Optimizing SVG images...');
    const svgFiles = await imagemin([`${publicDir}/*.svg`], {
      destination: optimizedDir,
      plugins: [
        imageminSvgo({
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  removeTitle: false,
                  removeDesc: false,
                },
              },
            },
            'removeDimensions',
            'removeXMLNS',
          ],
        }),
      ],
    });
    
    results.svg.count = svgFiles.length;
    console.log(`✅ Optimized ${svgFiles.length} SVG files`);

    // Calculate and display savings
    console.log('\n📊 Compression Results:');
    console.log('='.repeat(50));
    
    let totalOriginalSize = 0;
    let totalCompressedSize = 0;
    
    for (const file of [...jpegFiles, ...pngFiles, ...gifFiles, ...svgFiles]) {
      const originalPath = join(publicDir, file.sourcePath);
      const optimizedPath = join(optimizedDir, file.destinationPath);
      
      if (fs.existsSync(originalPath) && fs.existsSync(optimizedPath)) {
        const originalStats = fs.statSync(originalPath);
        const optimizedStats = fs.statSync(optimizedPath);
        
        const fileType = file.sourcePath.split('.').pop().toLowerCase();
        if (results[fileType]) {
          results[fileType].originalSize += originalStats.size;
          results[fileType].compressedSize += optimizedStats.size;
        }
        
        totalOriginalSize += originalStats.size;
        totalCompressedSize += optimizedStats.size;
        
        const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
        const originalKB = (originalStats.size / 1024).toFixed(1);
        const optimizedKB = (optimizedStats.size / 1024).toFixed(1);
        
        console.log(`📁 ${file.sourcePath}: ${originalKB}KB → ${optimizedKB}KB (${savings}% smaller)`);
      }
    }

    // Display summary by file type
    console.log('\n📈 Summary by File Type:');
    console.log('-'.repeat(30));
    
    Object.entries(results).forEach(([type, data]) => {
      if (data.count > 0) {
        const savings = ((data.originalSize - data.compressedSize) / data.originalSize * 100).toFixed(1);
        const originalMB = (data.originalSize / 1024 / 1024).toFixed(2);
        const compressedMB = (data.compressedSize / 1024 / 1024).toFixed(2);
        
        console.log(`${type.toUpperCase()}: ${data.count} files, ${originalMB}MB → ${compressedMB}MB (${savings}% smaller)`);
      }
    });

    // Overall summary
    const totalSavings = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
    const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
    const totalCompressedMB = (totalCompressedSize / 1024 / 1024).toFixed(2);
    
    console.log('\n🎉 Overall Results:');
    console.log('='.repeat(30));
    console.log(`Total files processed: ${jpegFiles.length + pngFiles.length + gifFiles.length + svgFiles.length}`);
    console.log(`Total size: ${totalOriginalMB}MB → ${totalCompressedMB}MB`);
    console.log(`Total savings: ${totalSavings}% (${(totalOriginalSize - totalCompressedSize) / 1024 / 1024}MB saved)`);
    
    console.log(`\n📁 Optimized images saved to: ${optimizedDir}`);
    console.log('💡 Next steps:');
    console.log('   1. Review the optimized images');
    console.log('   2. Replace original images with optimized versions');
    console.log('   3. Update image references to use WebP where supported');
    console.log('   4. Run "npm run build" to see the final optimized build');

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages(); 
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Configuration
const imageDir = 'public/images';
const outputQuality = 80; // 0-100, higher is better quality but larger file size
const maxWidth = 1920; // Maximum width for large images

// Function to optimize an image
async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    
    // Skip if not an image or already optimized
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext) || filePath.includes('.optimized.')) {
      return;
    }
    
    console.log(`Optimizing: ${filePath}`);
    
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Only resize if the image is larger than maxWidth
    let pipeline = image;
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth);
    }
    
    // Set output options based on format
    let outputOptions = {};
    if (ext === '.jpg' || ext === '.jpeg') {
      outputOptions = { quality: outputQuality };
      pipeline = pipeline.jpeg(outputOptions);
    } else if (ext === '.png') {
      outputOptions = { quality: outputQuality };
      pipeline = pipeline.png(outputOptions);
    } else if (ext === '.webp') {
      outputOptions = { quality: outputQuality };
      pipeline = pipeline.webp(outputOptions);
    }
    
    // Save the optimized image
    await pipeline.toBuffer().then(data => {
      fs.writeFileSync(filePath, data);
    });
    
    console.log(`Optimized: ${filePath}`);
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
  }
}

// Find all images and optimize them
async function optimizeAllImages() {
  const files = glob.sync(`${imageDir}/**/*.{jpg,jpeg,png,webp}`, { nocase: true });
  
  console.log(`Found ${files.length} images to optimize`);
  
  for (const file of files) {
    await optimizeImage(file);
  }
  
  console.log('Image optimization complete!');
}

// Run the optimization
optimizeAllImages(); 
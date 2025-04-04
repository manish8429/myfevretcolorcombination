const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const fileService = require('../services/fileService');

class EnhancementModel {
  async processImage(inputPath, params) {
    // Ensure processed directory exists
    fileService.ensureDirectoryExists(path.join(__dirname, '../processed'));

    const outputPath = path.join(__dirname, '../processed', `${Date.now()}-enhanced.jpg`);
    let image = sharp(inputPath);
    const metadata = await image.metadata();

    // Apply HD upscaling if requested
    if (params.hdUpscale) {
      const scaleFactor = 1.5;
      image = image.resize({
        width: Math.round(metadata.width * scaleFactor),
        height: Math.round(metadata.height * scaleFactor),
        fit: 'inside',
        withoutEnlargement: false
      });
    }

    // Apply enhancements
    image = this.applyEnhancements(image, params);

    // Save the processed image
    await image.toFile(outputPath);

    return outputPath;
  }

  applyEnhancements(image, params) {
    return image
      .modulate({
        brightness: 1 + (params.lightingAdjustment * 0.1),
        saturation: 1 + (params.clarity * 0.05)
      })
      .sharpen({
        sigma: 1 + (params.detailRecovery * 0.2),
        flat: 1,
        jagged: 1
      });
    
    // Note: Additional enhancements can be added here based on other params
  }
}

module.exports = new EnhancementModel();
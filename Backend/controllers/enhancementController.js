const enhancementModel = require('../models/enhancementModel');
const fileService = require('../services/fileService');

exports.enhanceImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const enhancementParams = {
      faceSmoothness: parseInt(req.body.faceSmoothness) || 5,
      skinWhitening: parseInt(req.body.skinWhitening) || 5,
      bodyWhitening: parseInt(req.body.bodyWhitening) || 5,
      detailRecovery: parseInt(req.body.detailRecovery) || 5,
      eyeEnhancement: parseInt(req.body.eyeEnhancement) || 5,
      teethWhitening: parseInt(req.body.teethWhitening) || 5,
      lightingAdjustment: parseInt(req.body.lightingAdjustment) || 0,
      clarity: parseInt(req.body.clarity) || 5,
      hdUpscale: req.body.hdUpscale === 'true',
      backgroundEnhance: req.body.backgroundEnhance === 'true'
    };

    const inputPath = req.file.path;
    const outputPath = await enhancementModel.processImage(inputPath, enhancementParams);

    // Schedule file cleanup
    fileService.scheduleFileCleanup(inputPath);
    fileService.scheduleFileCleanup(outputPath);

    // Send the processed image back
    res.sendFile(outputPath);

  } catch (error) {
    console.error('Enhancement error:', error);
    
    // Clean up files if they exist in case of error
    if (req.file) {
      fileService.cleanupFile(req.file.path);
    }
    
    res.status(500).json({ 
      error: 'Image enhancement failed', 
      details: error.message 
    });
  }
};
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const enhancementController = require('../controllers/enhancementController');

router.post('/', upload.single('image'), enhancementController.enhanceImage);

module.exports = router;
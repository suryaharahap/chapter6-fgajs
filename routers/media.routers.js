const router = require('express').Router();
const {
  MediaProcessingImage,
  MediaProcessingVideo,
  MediaProcessingFile,
  GenerateQRCode,
  MediaUpload,
  MediaProcessingImages,
} = require('../controller/media.controller');

const storage = require('../lib/multer');

router.post('/images', storage.image.single('image'), MediaProcessingImage);
router.post('/videos', storage.video.single('video'), MediaProcessingVideo);
router.post('/files', storage.file.single('file'), MediaProcessingFile);
router.post('/qrcode', GenerateQRCode);

const multer = require('multer')();

router.post('/imagekit', multer.single('image'), MediaUpload);
router.post(
  '/imagekits',
  storage.image.array('images', 3),
  MediaProcessingImages
);

module.exports = router;

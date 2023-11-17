const router = require('express').Router();
const {
  MediaProcessingImage,
  MediaProcessingVideo,
} = require('../controller/media.controller');

const storage = require('../lib/multer');

router.post('/images', storage.image.single('image'), MediaProcessingImage);
router.post('/videos', storage.video.single('video'), MediaProcessingVideo);

module.exports = router;

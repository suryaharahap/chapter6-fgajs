const router = require('express').Router();
const { MediaProcessingImage } = require('../controller/media.controller');

const storage = require('../lib/multer');

router.post('/images', storage.image.single('image'), MediaProcessingImage);

module.exports = router;

const router = require('express').Router();
const { MediaProcessing } = require('../controller/media.controller');

const storage = require('../lib/multer');

router.post('/images', storage.image.single('image'), MediaProcessing);

module.exports = router;

const router = require('express').Router();
const mediaRoute = require('../routers/media.routers');
router.use('/media', mediaRoute);

module.exports = router;

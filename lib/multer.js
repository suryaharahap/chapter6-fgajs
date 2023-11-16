const multer = require('multer');
const path = require('path');
const { all } = require('../routers/route');

const filename = (req, file, callback) => {
  const fileName = Date.now() + path.extname(file.originalname);
  callback(null, fileName);
};

const generateStorage = (dest) => {
  return multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, dest);
    },
    filename,
  });
};

module.exports = {
  image: multer({
    storage: generateStorage('./public/images'),
    fileFilter: (req, file, cb) => {
      const allowedMineTypes = ['image/png', 'image/jpg', 'image/jpeg'];

      if (allowedMineTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        const err = new Error(
          `Only ${allowedMineTypes.join(', ')} allowed to upload!`
        );
        cb(err, false);
      }
    },
    onError: (err, next) => {
      next(err);
    },
  }),
};

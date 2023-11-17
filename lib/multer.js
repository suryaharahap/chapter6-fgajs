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

  video: multer({
    storage: generateStorage('./public/videos'),
    fileFilter: (req, file, callback) => {
      const allowedMimeTypes = [
        'video/mp4',
        'video/x-msvideo',
        'video/quicktime',
      ];

      if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true);
      } else {
        const err = new Error(
          `Only ${allowedMimeTypes.join(', ')} allowed to upload!`
        );
        callback(err, false);
      }
    },
    onError: (err, next) => {
      next(err);
    },
  }),

  file: multer({
    storage: generateStorage('./public/files'),
    fileFilter: (req, file, callback) => {
      const allowedMimeTypes = ['application/pdf'];

      if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true);
      } else {
        const err = new Error(
          `Only ${allowedMimeTypes.join(', ')} allowed to upload!`
        );
        callback(err, false);
      }
    },
    onError: (err, next) => {
      next(err);
    },
  }),
};

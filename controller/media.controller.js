const qr = require('node-qr-image');
const imagekit = require('../lib/imagekit');

function MediaProcessingImage(req, res) {
  const imageUrl = `${req.protocol}://${req.get('host')}/images/${
    req.file.filename
  }`;

  res.status(200).json({
    data: imageUrl,
    message: 'success',
    status: 200,
    error: null,
  });
}

function MediaProcessingVideo(req, res) {
  const videoUrl = `${req.protocol}://${req.get('host')}/video/${
    req.file.filename
  }`;

  res.status(200).json({
    data: videoUrl,
    message: 'success',
    status: 200,
    error: null,
  });
}

function MediaProcessingFile(req, res) {
  const fileUrl = `${req.protocol}://${req.get('host')}/files/${
    req.file.filename
  }`;

  res.status(200).json({
    data: fileUrl,
    message: 'success',
    status: 200,
    error: null,
  });
}

function GenerateQRCode(req, res) {
  const message = req.query.message;
  try {
    const pngString = qr.image(message, { type: 'png' });
    pngString.pipe(
      require('fs').createWriteStream(`${message.toLowerCase()}.png`)
    );

    res.status(200).json({
      data: pngString,
      message: 'success',
      status: 200,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: 'Internal server error.',
      status: 500,
      error: error.message,
    });
  }
}

async function MediaUpload(req, res) {
  try {
    const stringFile = req.file.buffer.toString('base64');

    const uploadFile = await imagekit.upload({
      filename: req.file.originalname, // Pastikan parameter filename diisi dengan nama file asli
      file: stringFile,
    });

    res.status(200).json({
      data: uploadFile,
      message: 'success',
      status: 200,
      error: null,
    });
  } catch (err) {
    res.status(500).json({
      data: null,
      message: 'Failed to upload file.',
      status: 500,
      error: err.message,
    });
  }
}

async function MediaProcessingImages(req, res) {
  try {
    const imageUrls = req.files.map((file) => ({
      url: `${req.protocol}://${req.get('host')}/images/${file.filename}`,
      originalname: file.originalname,
    }));

    res.status(200).json({
      data: imageUrls,
      message: 'success',
      status: 200,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: 'Internal server error.',
      status: 500,
      error: error.message,
    });
  }
}

module.exports = {
  MediaProcessingImage,
  MediaProcessingVideo,
  MediaProcessingFile,
  GenerateQRCode,
  MediaUpload,
  MediaProcessingImages,
};

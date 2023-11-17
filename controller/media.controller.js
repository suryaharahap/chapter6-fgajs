const qr = require('node-qr-image');
// 2.54

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

module.exports = {
  MediaProcessingImage,
  MediaProcessingVideo,
  MediaProcessingFile,
  GenerateQRCode,
};

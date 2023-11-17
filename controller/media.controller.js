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

module.exports = {
  MediaProcessingImage,
  MediaProcessingVideo,
  MediaProcessingFile,
};

function MediaProcessing(req, res) {
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

module.exports = { MediaProcessing };

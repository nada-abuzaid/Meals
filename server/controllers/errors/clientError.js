const clientError = (req, res) => {
  res.status(404).json({ status: 404, message: 'Page Not Found!' });
};

module.exports = clientError;

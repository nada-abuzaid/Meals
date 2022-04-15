const express = require('express');

const router = express.Router();
const { join } = require('path');
const apiRouters = require('./apiRoutes');
require('env2')('.env');
const { servererror, clientError } = require('../controllers');

router.use(apiRouters);

if (process.env.NODE_ENV === 'production') {
  router.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  router.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}
router.use(clientError);
router.use(servererror);

module.exports = router;

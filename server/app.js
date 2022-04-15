const express = require('express');

const app = express();
app.disable('x-powered-by');
const router = require('./route');

app.use([
  express.urlencoded({ extended: false, limit: '5mb' }),
  express.json({ limit: '50mb' }),
]);
app.use(router);

module.exports = app;

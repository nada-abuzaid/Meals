const connection = require('../config/connection');

module.exports = () =>
  connection.query('SELECT * FROM meals ORDER BY id DESC;', []);

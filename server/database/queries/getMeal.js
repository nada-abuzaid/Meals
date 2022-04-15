const connection = require('../config/connection');

module.exports = (id) => connection.query('SELECT * FROM meals WHERE id=$1;', [id]);

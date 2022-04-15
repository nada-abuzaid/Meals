const connection = require('../config/connection');

module.exports = (id) => connection.query('DELETE FROM meals WHERE id = ($1) RETURNING *', [id]);

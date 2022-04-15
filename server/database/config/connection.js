const { Pool } = require('pg');
// eslint-disable-next-line import/no-unresolved
require('env2')('.env');

const { NODE_ENV, DATABASE_URL, DEV_DATABASE_URL } = process.env;
let URL;
let SSL;

switch (NODE_ENV) {
  case 'development':
    URL = DEV_DATABASE_URL;
    SSL = false;
    break;
  case 'production':
    URL = DATABASE_URL;
    SSL = { rejectUnauthorized: false };
    break;
  default:
    throw new Error('NODE_ENV is not set to development or production');
}

const connection = new Pool({
  connectionString: URL,
  ssl: SSL,
});

module.exports = connection;

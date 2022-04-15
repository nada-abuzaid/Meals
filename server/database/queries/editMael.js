const connection = require('../config/connection');

module.exports = (name, description, category, price, img, id) => connection.query(
  ' UPDATE meals SET name=$1 ,description=$2, category=$3, price=$4, img_url=$5 where id=$6 RETURNING *',
  [name, description, category, price, img, id],
);

const { getMeal } = require('../database');

const getMealController = (req, res, next) => {
  const { id } = req.params;
  getMeal(id)
    .then((data) => res.json(data.rows))
    .catch((error) => {
      next(error);
    });
};

module.exports = getMealController;

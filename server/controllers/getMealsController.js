const { getMeals } = require('../database');

const getMealsController = (req, res, next) => {
  getMeals()
    .then((data) => res.json(data.rows))
    .catch((error) => {
      next(error);
    });
};

module.exports = getMealsController;

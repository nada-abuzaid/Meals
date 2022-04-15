const { deleteMeal } = require('../database');

const deleteMealController = (req, res, next) => {
  const { id } = req.params;
  deleteMeal(id)
    .then((data) => res.json(data))
    .catch((error) => {
      next(error);
    });
};

module.exports = deleteMealController;

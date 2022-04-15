const addMealController = require('./addMealController');
const getMealsController = require('./getMealsController');
const deleteMealController = require('./deleteMealController');
const editMealController = require('./editMealController');
const getMealController = require('./getMealController');
const servererror = require('./errors/serverError');
const clientError = require('./errors/clientError');

module.exports = {
  addMealController,
  getMealsController,
  deleteMealController,
  editMealController,
  getMealController,
  servererror,
  clientError,
};

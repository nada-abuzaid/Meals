const apiRouters = require('express').Router();
const {
  addMealController,
  getMealsController,
  deleteMealController,
  editMealController,
  getMealController,
} = require('../controllers');

apiRouters.post('/api/v1/meal', addMealController);
apiRouters.get('/api/v1/meals', getMealsController);
apiRouters.delete('/api/v1/meal/:id', deleteMealController);
apiRouters.put('/api/v1/meal/:id', editMealController);
apiRouters.get('/api/v1/meal/:id', getMealController);

module.exports = apiRouters;

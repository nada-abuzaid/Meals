const { addMeal } = require('../database');
const addMealSchema = require('../utils/addMealSchema');
const createError = require('../utils/createError');

const addMealController = (req, res, next) => {
  const { name, description, category, price, img } = req.body;
  addMealSchema
    .validateAsync({ name, description, price, img }, { abortEarly: false })
    .then(() => addMeal(name, description, category, price, img))
    .then((data) =>
      res
        .status(201)
        .json({ message: 'Meal added successfully', meals: data.rows[0] })
    )
    .catch((error) => {
      if (error.name === 'ValidationError') {
        const messages = error.details.map((err) => err.message);
        next(createError(messages, 400));
      } else {
        next(error);
      }
    });
};

module.exports = addMealController;

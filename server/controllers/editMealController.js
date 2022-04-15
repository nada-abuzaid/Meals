const { editMael } = require('../database');
const addMealSchema = require('../utils/addMealSchema');
const createError = require('../utils/createError');

const editMealController = (req, res, next) => {
  const { name, description, category, price, img } = req.body;
  const { id } = req.params;
  addMealSchema
    .validateAsync({ name, description, price, img }, { abortEarly: false })
    .then(() => editMael(name, description, category, price, img, id))
    .then((data) =>
      res
        .status(201)
        .json({ message: 'Meal Updated successfully', meals: data.rows[0] })
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

module.exports = editMealController;

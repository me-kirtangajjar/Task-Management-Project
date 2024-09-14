const { checkExact, body } = require("express-validator");

const taskValidation = checkExact([
  body("title").notEmpty().isString().withMessage("Enter task title"),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Enter task description"),
]);

module.exports = {taskValidation}
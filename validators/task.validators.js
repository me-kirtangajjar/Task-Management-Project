const { checkExact, body } = require("express-validator");

const taskValidation = checkExact([
  body("title")
    .notEmpty()
    .withMessage("Enter task title")
    .isString()
    .withMessage("Enter task title"),
  body("description")
    .notEmpty()
    .withMessage("Enter task description")
    .isString()
    .withMessage("Enter task description"),
]);

module.exports = { taskValidation };

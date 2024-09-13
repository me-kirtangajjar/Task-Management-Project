const { checkExact, body } = require("express-validator");

const usersRegisterValidator = checkExact([
  body("name")
    .notEmpty()
    .withMessage("Enter name")
    .isString()
    .withMessage("Name must be a string")
    .isAlpha()
    .withMessage("Name must contain only alphabetic characters"),
  body("email")
    .notEmpty()
    .withMessage("Enter email")
    .isString()
    .withMessage("Email must be a string")
    .isEmail()
    .withMessage("Enter valid email"),
  body("password")
    .notEmpty()
    .isString()
    .withMessage("Password must be a string")
    .withMessage("Enter password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .isLength({ max: 64 })
    .withMessage("Password must be less than 64 characters"),
]);

module.exports = { usersRegisterValidator };

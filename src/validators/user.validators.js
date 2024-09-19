const { checkExact, body } = require("express-validator");
const { INVALID_EMAIL_FORMAT, PASSWORD_TOO_SHORT } = require("../constant/responseMessage");

const userRegisterValidation = checkExact([
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
    .withMessage(INVALID_EMAIL_FORMAT),
  body("password")
    .notEmpty()
    .withMessage("Enter password")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6 })
    .withMessage(PASSWORD_TOO_SHORT)
    .isLength({ max: 64 })
    .withMessage("Password must be less than 64 characters"),
]);

const userLoginValidation = checkExact([
  body("email")
    .notEmpty()
    .withMessage("Enter email")
    .isString()
    .withMessage("Email must be string")
    .isEmail()
    .withMessage(INVALID_EMAIL_FORMAT),
  body("password")
    .notEmpty()
    .withMessage("Enter password")
    .isString()
    .withMessage("Password must be a string"),
]);

module.exports = { userRegisterValidation, userLoginValidation };

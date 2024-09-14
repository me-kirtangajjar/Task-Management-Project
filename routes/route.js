const router = require("express").Router();
const {
  userRegisterValidation,
  userLoginValidation,
} = require("../validators/users.validators");
const { validateRequest } = require("../middlewares/validateRequest");
const { userRegister, userLogin } = require("../controllers/userController");

// User routes
router.post(
  "/users/register",
  userRegisterValidation,
  validateRequest,
  userRegister
);
router.post("/users/login", userLoginValidation, validateRequest, userLogin);

module.exports = router;

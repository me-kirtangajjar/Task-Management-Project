const router = require("express").Router();
const { usersRegisterValidator } = require("../validators/users.validators");
const { validateRequest } = require("../middlewares/validateRequest");
const { userRegister, userLogin } = require("../controllers/userController");

// User routes
router.post(
  "/users/register",
  usersRegisterValidator,
  validateRequest,
  userRegister
);
router.post("/users/login", userLogin);

module.exports = router;

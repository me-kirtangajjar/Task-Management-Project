const router = require("express").Router();
const {
  userRegisterValidation,
  userLoginValidation,
} = require("../validators/users.validators");
const { validateRequest } = require("../middlewares/validateRequest");
const { userRegister, userLogin } = require("../controllers/usersController");
const {
  createTask,
  getUserTasks,
  updateTaskStatus,
} = require("../controllers/tasksController");
const { authoriseUser } = require("../middlewares/auth");

// User routes
router.post(
  "/users/register",
  userRegisterValidation,
  validateRequest,
  userRegister
);
router.post("/users/login", userLoginValidation, validateRequest, userLogin);

router.post("/tasks", authoriseUser, createTask);
router.get("/tasks", authoriseUser, getUserTasks);
router.post("/tasks/:taskId", authoriseUser, updateTaskStatus);

module.exports = router;

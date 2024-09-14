const router = require("express").Router();
const {
  userRegisterValidation,
  userLoginValidation,
} = require("../validators/user.validators");
const { validateRequest } = require("../middlewares/validateRequest");
const { userRegister, userLogin } = require("../controllers/usersController");
const {
  createTask,
  getUserTasks,
  updateTaskStatus,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");
const { authoriseUser } = require("../middlewares/auth");
const { taskValidation } = require("../validators/task.validators");

// User routes
router.post(
  "/users/register",
  userRegisterValidation,
  validateRequest,
  userRegister
);
router.post("/users/login", userLoginValidation, validateRequest, userLogin);

// Task routes
router.post(
  "/tasks",
  taskValidation,
  validateRequest,
  authoriseUser,
  createTask
);
router.get("/tasks", authoriseUser, getUserTasks);
router.patch("/tasks/:taskId", authoriseUser, updateTaskStatus);
router.put(
  "/tasks/:taskId",
  taskValidation,
  validateRequest,
  authoriseUser,
  updateTask
);
router.delete("/tasks/:taskId", authoriseUser, deleteTask);

module.exports = router;

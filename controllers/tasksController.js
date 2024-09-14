const {
  DATA_CREATION_SUCCESS,
  SERVER_ERROR,
  DATA_FETCH_SUCCESS,
  TASK_NOT_FOUND,
  TASK_UPDATE_SUCCESS,
  DATA_UPDATE_SUCCESS,
} = require("../constants/responseMessages");
const tasksModel = require("../models/tasksModel");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    await tasksModel.create({ title, description, userId: req.userId });
    return res.status(201).send({ msg: DATA_CREATION_SUCCESS });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

const getUserTasks = async (req, res) => {
  try {
    const usersTask = await tasksModel.find({ userId: req.uId });
    return res.status(200).send({ msg: DATA_FETCH_SUCCESS, data: usersTask });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await tasksModel.findOne({ _id: taskId });
    if (!task) {
      return res.status(400).send({ msg: TASK_NOT_FOUND });
    }

    await tasksModel.findByIdAndUpdate(taskId, { completed: !task.completed });

    return res.status(200).send({ msg: DATA_UPDATE_SUCCESS });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await tasksModel.findOne({ _id: taskId });
    if (!task) {
      return res.status(400).send({ msg: TASK_NOT_FOUND });
    }

    const { title, description, completed } = req.body;
    await tasksModel.findByIdAndUpdate(taskId, {
      title,
      description,
      completed,
    });

    return res.status(200).send({ msg: DATA_UPDATE_SUCCESS });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

module.exports = { createTask, getUserTasks, updateTaskStatus, updateTask };

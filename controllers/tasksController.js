const { DATA_CREATION_SUCCESS, SERVER_ERROR } = require("../constants/responseMessages");
const tasksModel = require("../models/tasksModel");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    await tasksModel.create({ title, description,userId:req.userId });
    return res.status(201).send({ msg: DATA_CREATION_SUCCESS });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

module.exports = { createTask };

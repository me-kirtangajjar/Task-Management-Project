const usersModel = require("../models/userModel");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await usersModel.create({name, email, password});
    return res.status(201).send({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "Something went wrong !!!" });
  }
};

const userLogin = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "Something went wrong !!!" });
  }
};

module.exports = { userRegister, userLogin };

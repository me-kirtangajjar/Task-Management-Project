const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");
const {
  ACCOUNT_CREATED,
  EMAIL_ALREADY_EXISTS,
  USER_NOT_FOUND,
  SERVER_ERROR,
  LOGIN_SUCCESS,
  PASSWORD_MISMATCH,
} = require("../constants/responseMessages");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await usersModel.findOne({ email });
    if (user) {
      return res.status(400).send({ msg: EMAIL_ALREADY_EXISTS });
    }

    await usersModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    return res.status(201).send({ msg: ACCOUNT_CREATED });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ msg: USER_NOT_FOUND });
    }

    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      return res.status(400).send({ msg: PASSWORD_MISMATCH });
    }

    console.log(user._id)

    return res.status(200).send({
      msg: LOGIN_SUCCESS,
      Authorization: jwt.sign({ uId: user._id }, process.env.JWT_KEY, {
        expiresIn: "30d",
      }),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

module.exports = { userRegister, userLogin };

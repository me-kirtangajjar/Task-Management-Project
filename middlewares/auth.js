const jwt = require("jsonwebtoken");
const {
  INVALID_TOKEN,
  TOKEN_EXPIRED,
  SERVER_ERROR,
} = require("../constants/responseMessages");

const authoriseUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).send({ msg: INVALID_TOKEN });
    }

    jwt.verify(token, process.env.JWT_KEY, (error, verifiedData) => {
      if (error) {
        return res.status(401).send({ msg: TOKEN_EXPIRED });
      }

      req.userId = verifiedData.uId;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: SERVER_ERROR });
  }
};

module.exports = { authoriseUser };

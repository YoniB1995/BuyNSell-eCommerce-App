require('dotenv').config();
const jwt = require('jsonwebtoken');
exports.genToken = (userId) => {
  let token = jwt.sign({ id: userId }, "secret", {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};


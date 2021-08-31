require('dotenv').config();
const jwt = require('jsonwebtoken');
exports.genToken = (userId) => {
  let token = jwt.sign({ id: userId }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};


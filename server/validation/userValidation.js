const joi = require('joi');

const userModel = require('../models/userModel');

exports.validUser = (userData) => {
  const joiSchema = joi.object({
    password: joi.string().min(5).max(99).required(),
    email: joi.string().min(4).max(99).required()
      .email(),
  });
  return joiSchema.validate(userData, userModel);
};

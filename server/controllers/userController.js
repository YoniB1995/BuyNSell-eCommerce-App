/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
require('dotenv').config();
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const { validUser } = require('../validation/userValidation');
const ErrorResponse = require('../utils/errorResponse');
const userModel = require('../models/userModel');
const { genToken } = require('../middleware/token');
const sendEmail = require('../utils/sendEmail');

const getTokenAndConfig = async (req, res) => {
  let token = req.header('x-api-key');
  if (!token) {
    res.status(401).json({ msg: ' you must send token' });
  }
  try {
    let decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    let user = await userModel.findOne({ _id: decodeToken.id });
    res.json({ message: 'all ok', user });
  } catch (error) {
    res.status(401).json({ message: 'token invalid or expired' });
  }
};

const UserLogIn = async (req, res, next) => {
  try {
    const validBody = validUser(req.body);
    if (validBody.error) {
      return next(new ErrorResponse(`${validBody.error.details[0].message}`, 400));
    }
    const user = await userModel.findOne(
      { email: req.body.email },
      (error) => {
        if (error) throw error;
      },
    );
    if (!user) {
      res.json({ msg: 'Email not found' });
    }
    const PassValid = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!PassValid) {
      return next(new ErrorResponse('Wrong Password !', 401));
    }
    user.password = '****';
    let userToken = genToken(user._id);
    // localStorage.setItem({ token: userToken });
    res.json({ token: userToken, user });
    next();
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.find({});

    res.json(users);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);

    res.json(user);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};

const registerUser = async (req, res, next) => {
  try {
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (error, hash) => {
        if (error) throw error;
        // req.body.password = hash;
        userModel.create(req.body, (err, result) => {
          if (err) throw err;
          res.json(result);
        });
      });
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse('Email already in system order another problem', 301));
  }
};

const deleteUser = async (req, res, next) => {
  const { username } = req.body;
  try {
    const user = await userModel.findByIdAndDelete(
      req.params.username === username && req.params.username,
    );

    if (!user) {
      return next(new ErrorResponse('there isn`t a username like this name', 301));
    }

    console.log(user);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};

const forgotPassword = async (req,res,next) => {
    const {email} = req.body

    try{
        
        const user = await userModel.findOne({email})

        if (!user){
            return next(new ErrorResponse("Email could not be sent", 404))
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://localhost:5000/resetpass/${resetToken}` // put here frontend url / deploy website

        const message = 
        `<h1> You have requested a new password reset </h1>
        <p> Please go to this link to reset your password</p>
        <a href=${resetUrl} clicktracking=off> ${resetUrl} </a>`

        try{
            await sendEmail({
                to: user.email,
                subject: "Password Reset Request",
                text: message
            });

            res.status(200).json({ success: true, data: "Email Sent",resetToken:resetToken})
        }catch(error){
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse("Email could not be sent", 500))
        }

    } catch(error){
        next(error);
    }
}

const resetPassword = async (req,res,next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");


    try{
        const user = await userModel.findOne({
            resetPasswordToken,
            resetPasswordExpire:{ $gt : Date.now()}
        })

        if(!user){
            return next(new ErrorResponse("Invalid Reset Token", 400))
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

       await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
    } catch(error){
        next(error);
    }
}

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  deleteUser,
  UserLogIn,
  getTokenAndConfig,
  resetPassword,
  forgotPassword
};

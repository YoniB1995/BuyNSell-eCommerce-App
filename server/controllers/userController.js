const UserModel = require('../models/userModel')
const validateRegisterInput = require('../middleware/registerValidation')
const { nullError, isEmptyId } = require("../utils/Errors");
const bcrypt = require('bcrypt')


const newUser = async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res
            .status(401)
            .json({
                success: false,
                message: "there is error with validation",
                errors: errors
            });
    }

    await UserModel.findOne({ email: req.body.email }, async (err, result) => {
        if (err) throw err;
        if (result) {
            return res
                .status(401)
                .json({
                    success: false,
                    message: "email already exists",
                    data: result
                });
        }
        //Password Encryption Before That it enters to the database
        bcrypt.genSalt(12, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, async (err, hash) => {
                if (err) throw err;
                req.body.password = hash;

                const {  email} = req.body;
                const newUser = new UserModel({
                    email: email,
                    password: req.body.password,
                });
                try {
                    await newUser.save()
                    res
                        .status(201)
                        .json({
                            success: true,
                            message: "add new user",
                            data: newUser
                        })
                }
                catch (err) {
                    res
                        .status(400)
                        .json({
                            success: false,
                            message: "failed creating user",
                            error: err.message
                        })
                }
            });
        });
    });
}


const getAllUsers = async (req, res) => {
    try {
        await UserModel.find({}, (err, result) => {
          if (err) throw err;
          nullError(result, res);
        });
      } catch (err) {
        res
          .status(500)
          .json({
            success: false,
            message: "get all users field",
            error: err.message
          });
      }

}
const getUserById = async (req, res) => {
    try {
        isEmptyId(req.params.id)
        await UserModel.findById(req.params.id, (err, result) => {
            if (err) throw err;
            nullError(result, res);
        });
    } catch (err) {
        res
            .status(400)
            .json({
                success: false,
                message: "get user by id field",
                error: err.message
            });
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await  UserModel.updateOne({email:req.body.email},
            { $set: req.body },
            { new: true },
            (err, result) => {
                if (err) throw err;
                res.json({status:"success",updatedUser:result})
            }
        );
    }
    catch (err) {
        res
            .status(400)
            .json({
                success: false,
                message: "update event field",
                error: err.message
            });
    }
}


const deleteUser = async(req,res)=>{
    try {
        isEmptyId(req.params.id)
        await UserModel.findByIdAndDelete(req.params.id, (err, result) => {
          if (err) throw err;
          nullError(result, res);
    
        });
      } catch (err) {
        res
          .status(500)
          .json({
            success: false,
            message: "deleted user field",
            error: err.message
          });
      }
}
module.exports = {
    newUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}




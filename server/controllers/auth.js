const userModel = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse')


const registerUser = async (req,res,next) => {
    const {username,email,password} = req.body;
    try{
        const user = await userModel.create({
            username,email,password
        })

        res.status(201).json({
            success:true,
            token:'2313gar32'
        })
    } catch(error){
        next(error)
    }
}

const loginUser = async (req,res) => {
    const { email , password } = req.body

    if ( !email || !password) {
        return next(new ErrorResponse("Please provide an email and password",400))
    }

    try{
        const user = await userModel.findOne({email}).select("+password");

        if (!user){
            return next(new ErrorResponse("Invalid Credentials",401))
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch){
            return next(new ErrorResponse("Invalid Credentials",401))
        }

        res.status(200).json({
            success:true,
            token:"ghqih3321"
        })

    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}

const forgotPassword = (req,res) => {
    res.send("User forgot password");
}

const resetPassword = (req,res) => {
    res.send("User forgot password");
}

module.exports = {registerUser,loginUser,forgotPassword,resetPassword}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignToken();
}
require('dotenv').config();
const crypto = require('crypto')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true,"Please provide a username"]
    },
    email: {
        type: String,
        require: [true,"Please provide a email"],
        unique:true,
        match: [
           /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"
        ]
        
    },
    password:{
        type:String,
        require: [true,"Please provide a password"],
        minlength:6,
        select:false
    },
    resetPasswordToken: String,
    resetPasswordExpire : Date
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getSignedToken = function () {
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRE})
}

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
    return resetToken;
}

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;
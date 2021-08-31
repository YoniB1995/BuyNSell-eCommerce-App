require('dotenv').config();
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  resetPasswordToken:String,
  resetPasswordExpire:Date
});
userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.getResetPasswordToken = function(){
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken= crypto.createHash("sha256").update(resetToken).digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
}

const userModel = mongoose.model('user', userSchema);



module.exports = userModel;

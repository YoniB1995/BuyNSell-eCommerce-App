const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {validateLoginInput} = require("./loginValidation");
const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
 const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res
        .status(400)
        .json({
          success: false,
          message: "there is error with email or password.",
          error: errors
        });
    };

    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({
            success: false,
            message: "email not found",
            errors: { email: "email not found" },
          });
      };

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res
          .status(400)
          .json({
            success: false,
            message: "wrong password",
            errors: { password: "wrong password" } ,
          });
      };
      delete user.password
      const token = jwt.sign(user.toJSON(), SECRET_KEY, { expiresIn: "1d" });
      res
        .status(200)
        .json({
          success: true,
          message: "success",
          data: token
        });

    } catch (err) {
      res
        .status(500)
        .json({
          message: "something went wrong",
          error: err.message
        });
    }
};

module.exports = login;

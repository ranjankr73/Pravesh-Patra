const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcryptjs");

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const { email } = req.body;

    //check user for this email, email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Your email is not registered with us",
      });
    }

    //generate token
    const token = crypto.randomUUID();
    console.log(token);
    //update user by adding token and expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    console.log(updatedDetails);
    //create url
    const port = 3000; //port on which frontend is running
    const url = `http://localhost:${port}/update-password/${token}`; //frontend url

    console.log(url);
    //send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Click on this link to reset password: ${url}`
    );

    //return response
    return res.status(200).json({
      success: true,
      message:
        "Email sent successfully, Please check email and change password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error while sending reset password mail",
    });
  }
};

//resetPassword
exports.resetPassword = async (req, res) => {
  try {
    //fetch data
    const { password, confirmPassword, token } = req.body;

    //validation -> match password and confirm password
    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password is not matching",
      });
    }

    //get userDetails from db using token
    const userDetails = await User.findOne({ token: token });

    //if no entry in db -> means invalid token
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "Token is invalid",
      });
    }

    //check whether token is expired or not
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.status(401).json({
        success: false,
        message: "Token is expired, Please regenerate your token",
      });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //update password
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );

    //return response
    return res.status(200).json({
      successs: true,
      message: "Password reset successfully",
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error while reseting password",
    });
  }
};

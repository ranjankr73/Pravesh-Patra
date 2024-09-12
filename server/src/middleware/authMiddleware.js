const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config(); 

//auth
exports.auth = async (req, res, next) => {
    try {
        //extract token
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        console.log(token);
        //if token is missing
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        //verify token
        try {
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;

        } catch (error) {
            //verification issue
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            })
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server issue while validating the token",
            data: error
        });
    }
}

//isStudent
exports.isStudent = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({email: req.user.email});
        if(userDetails.role !== "Student"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Students only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, Please try again"
        });
    }
}

//isProfessor
exports.isProfessor = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });
        if(userDetails.role !== "Professor"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Professors only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, Please try again"
        });
    }
}

//isAdmin
exports.isAdmin = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email})
        if(userDetails.role !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, Please try again"
        });
    }
}

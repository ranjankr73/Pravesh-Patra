const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const emailTemplate = require('../email-template/verificationMail')

const OTPSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300
    }
});

//function to send emails
async function sendVerificationEmail(email, otp){
    try {
        const mailResponse = await mailSender(email, "Verification Email from Pravesh Patra", emailTemplate(otp));
        console.log("Email sent successfully 2 : ", mailResponse);
    } catch (error) {
        console.log("Error occured while sending mails: ", error);
        throw error;
    }
}

//pre-middleware => send verification mail before saving to database
OTPSchema.pre("save", async function(next) {
    try {
        await sendVerificationEmail(this.email, this.otp);
        next();
    } catch (error) {
        next(error);
    }
    
});

module.exports = mongoose.model("OTP", OTPSchema);
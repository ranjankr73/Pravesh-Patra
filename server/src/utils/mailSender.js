const nodemailer = require('nodemailer');
require('dotenv').config();
const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,  // e.g., 'smtp.gmail.com'
            port: 587,                    // Use 465 for SSL, 587 for TLS
            secure: false,                // True for SSL (465), false for TLS (587)
            auth: {
              user: process.env.MAIL_USER,  // Your email address (e.g., Gmail)
              pass: process.env.MAIL_PASS,  // Your email password or app-specific password
            },
          });

        let info = await transporter.sendMail({
            from: 'Pravesh Patra || OTP',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })

        console.log(info);
        return info;
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = mailSender;
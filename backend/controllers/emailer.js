const nodemailer = require('nodemailer');
const systemMail = "coding.projects.mailer@gmail.com";

// Email Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
        user: systemMail,
        pass: process.env.PASSWORD
    }
})

async function sendEmail({email, otp}) {
    if (!email) {
        return {
            message: 'failed'
        }
    }
    const mailOptions = {
        from: systemMail,
        to: email,
        subject: 'Registration OTP',
        text: `The OTP is : ${otp}`
    };
    
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return {
            message: "success",
            details: info.response
        };
    } catch (error) {
        console.error(error);
        return {
            message: "failed"
        }
    }
}

module.exports = { 
    sendEmail
};
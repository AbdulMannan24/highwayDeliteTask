const express = require('express');
const { userAuth } = require('../middlewares/userAuth');
const { sendEmail } = require('../controllers/emailer');
const { Otp } = require('../models/Otp');
const router = express.Router();

// Generate OTP
router.post('/generate', userAuth, async(req, res) => {
    try {
        const otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        let otpCreated = await Otp.create({
            email: req.email,
            otp
        });
        if (otpCreated) {
            await sendEmail({email: req.email, otp});
            res.json({message: "success"});
        } else {
            res.json({details: "Failed to Create OTP"});
        }
    } catch (err) {
        console.log(err);
        res.json({details: "Api Call Failed"});
    }
});

// verify OTP
router.get('/verify/:otp', userAuth, async(req, res) => {
    try {
        let otp = req.params.otp;
        if (!otp) {
            res.json({details: "Invalid Otp"});
            return;
        }
        let verify = await Otp.findOne({email: req.email});
        if (verify) {
            if (otp == verify.otp)
                res.json({message: "success"});
            else 
                res.json({details: "Wrong Otp"});
        } else {
            res.json({details: "failed to Verify Otp"});
        }
    } catch (err) {
        console.log(err);
        res.json({details: "Api Call Failed"});
    }
});

// Resend OTP
router.get('/resend', userAuth, async(req, res) => {
    try {
        let email = req.email;
        let otpExists = await Otp.findOne({email: email});
        if (otpExists) {
            await sendEmail({email: email, otp: otpExists.otp});
            res.json({message: "success"})
        } else {
            res.json({details: "failed to Verify Otp"});
        }
    } catch (err) {
        console.log(err);
        res.json({details: "Api Call Failed"});
    }
});

module.exports = router;
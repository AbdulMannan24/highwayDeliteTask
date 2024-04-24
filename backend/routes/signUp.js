const express = require('express');
const router = express.Router();
const { fetchUser } = require('../controllers/fetchUser');
const { User } = require('../models/User');
const zod = require('zod');
const { signUpBody } = require('../types');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// signUp Route
router.post('/', async (req, res) => {
    try {
        const {success} = signUpBody.safeParse(req.body);
        if (!success) {
            res.json({details:"Incomplete/Invalid Details"});
            return;
        }

        // checking for existing user
        let userExists = await fetchUser(req.body.email);
        if (userExists) {
            res.json({details:"User already exists"});
            return;
        }

        let { firstName, lastName, email, password } = req.body;
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);

        let createdUser = await User.create({
            firstName,
            lastName,
            email,
            password: hash
        })

        if (createdUser) {
            let userId = createdUser._id.toString();
            let token = jwt.sign({
                userId: userId
            }, process.env.SECRET_KEY);

            res.json({
                message: "success",
                token: token
            });
        } else {
            console.log(createdUser);
            res.json({details:"failed to create user"});
        }
    } catch (err) {
        console.log(err);
        res.json({details: "Api Call Failed"});
    }
});


module.exports = router;
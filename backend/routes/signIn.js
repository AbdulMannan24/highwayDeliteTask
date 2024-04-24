const express = require('express');
const { signInBody } = require('../types');
const { fetchUser } = require('../controllers/fetchUser');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//signIn Route
router.post('/', async (req, res) => {
    try {
        let {success} = signInBody.safeParse(req.body);
        if (!success) {
            res.json({details: "Invalid Credentials"});
            return;
        }

        let userExists = await fetchUser(req.body.email);
        if (!userExists) {
            res.json({details: "User does not exist"});
            return;
        }

        const checkPassword = await bcrypt.compare(req.body.password, userExists.password);
        if (checkPassword) {
            let token = jwt.sign({
                userId: userExists._id,
            }, process.env.SECRET_KEY);
            return res.json({
                message: "success",
                token: token
            })
        } else {
            return res.json({
                details: "Password is incorrect"
            })
        }        

    } catch (err) {
        console.log(err);
        res.json({details: "Api Call Failed"}); 
    }
});

module.exports = router;
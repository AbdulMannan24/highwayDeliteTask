const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

//signUp Route
const signUpRoute = require('./routes/signUp');
app.use('/signup', signUpRoute);

//signIn Route
const signInRoute = require('./routes/signIn');
app.use('/signin', signInRoute);

//signIn Route
const otpRoute = require('./routes/otp');
app.use('/otp', otpRoute);

app.get('/', (req, res) => {
    res.json({message: "Api Server Running..."});
})

app.listen(PORT, async (req, res) => {
    console.log(`server started: ${PORT}`);
    await connectDB();
})
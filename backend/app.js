const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: "Api Server Running..."});
})

app.listen(PORT, async (req, res) => {
    console.log(`server started: ${PORT}`);
    await connectDB();
})
require('dotenv').config();
const express = require('express');
const api = express();
const bodyParser = require('body-parser');

const register = require('./register/register');

api.use(bodyParser.json());

api.use('/', register);






api.listen(process.env.PORT, (err)=>{
    if (err) return console.log(err.message);
    console.log(`Api is listening to port: ${process.env.PORT}`)
})
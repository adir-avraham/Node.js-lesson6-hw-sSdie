require('dotenv').config();
const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register = require('./register/register');
const userLogin = require('./login/login');

api.use(cors())
api.use(bodyParser.json());

api.use('/', register);
api.use('/', userLogin);





api.listen(process.env.PORT, (err)=>{
    if (err) return console.log(err.message);
    console.log(`Api is listening to port: ${process.env.PORT}`)
})
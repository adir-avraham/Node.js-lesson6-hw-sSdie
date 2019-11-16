const express = require('express');
const router = express.Router();
const users = require('../data/users')
const writeToJson = require('../utils/writeToJson')




router.post('/register',(req, res, next) =>{

    const {fullName, age, email, password} = req.body;
    users.push({fullName, age, email, password});
    writeToJson('users.json', users);
    res.send("register success!!")

})


module.exports = router;
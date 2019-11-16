const express = require('express');
const router = express.Router();
const users = require('../data/users')
const writeToJson = require('../utils/writeToJson')
const validation = require('../validations/validations')

router.use('/', validation);

router.post('/register',(req, res, next) =>{

    const {fullName, age, email, password} = req.body;
    users.push({fullName, age, email, password});
    writeToJson('users.json', users);
    res.json({message:"Register success!!" , redirect: true})

})


module.exports = router;
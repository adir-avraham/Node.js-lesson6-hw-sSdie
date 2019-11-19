const express = require('express');
const router = express.Router();
const fs = require('fs');
const usersData = require("../data/users.json");
const validation = require('../validations/validations')

router.use('/', validation);

router.post('/register',(req, res, next) =>{
    const {users} = usersData;
    const {fullName, age, email, password} = req.body;
    fs.writeFile("./data/users.json",
        JSON.stringify({ users: [...users, { fullName, age, email, password }] }), (err) => {
            if (err) console.log(err);
        })
    res.json({message:"Register success!!" , redirect: true})

})


module.exports = router;



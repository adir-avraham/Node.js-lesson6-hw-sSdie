
const users = require('../users.json')
const express = require('express');
const router = express.Router();


router.use('/login', (req, res, next)=>{

    const {email, password} = req.body;
    const isLogin = users.find(user => user.email === email && user.password === password)
    if (!isLogin) return res.json({message: "User name and/or password is incorrect"});
    next();
})

router.post('/login', (req, res, next) =>{
    res.json({message: "You are logged-in!!!", redirect: true})
})

module.exports = router;
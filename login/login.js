
const users = require('../users.json')
const express = require('express');
const router = express.Router();
const moment = require("moment");
const usersKeys = {};

router.use('/login', (req, res, next)=>{

    const {email, password} = req.body;
    const isLogin = users.find(user => user.email === email && user.password === password)
    if (!isLogin) return res.json({message: "User name and/or password is incorrect", redirect: false});
    next();
})

router.post('/login', (req, res, next) =>{
    const apiKey = getApiKey();
    const expiration = moment().format("x");
    usersKeys[apiKey] = expiration;
    res.json({message: `You are logged-in!!! your key is ${apiKey}`, redirect: true, key: apiKey})
})

  
  function getApiKey() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  





module.exports = router;
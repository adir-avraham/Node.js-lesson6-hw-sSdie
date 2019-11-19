
const usersData = require('../data/users.json')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



router.use('/login', (req, res, next)=>{
    const {users} = usersData;
    const {email, password} = req.body;
    const userExist = users.find(user => user.email === email && user.password === password)
    if (!userExist) return res.json({message: "User name and/or password is incorrect", redirect: false});
    const token = jwt.sign({userExist},
      process.env.SECRET,
      {expiresIn: 60000})
    res.json({message: `You are logged-in!!!`, token: token, redirect: true })
})

// router.post('/login', (req, res, next) =>{
//   const { authorization } = req.headers
//   jwt.verify(authorization, process.env.SECRET, (err, decoded))
//   if (err) res.status(401).send("Verification failed")
//   console.log(decoded)
//     res.json({message: `You are logged-in!!!`, redirect: true })
// })

  



module.exports = router;
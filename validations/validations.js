//const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();
const usersData = require('../data/users.json')
const Joi = require('@hapi/joi');

const userSchema = Joi.object({
    fullName: Joi.required(),
    age: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
})


router.use('/register',(req, res, next) => {
    
    const { error } = (userSchema.validate(req.body));
    if (error) return res.send(error);
    next()
})

router.use('/register', (req, res, next) => {
    const {users} = usersData;
    const {email} = req.body;
    isUserExist = users.find(user => user.email === email);
    if (isUserExist) return res.json({message: "User already existed", redirect: false});
    next()
})

module.exports = router;
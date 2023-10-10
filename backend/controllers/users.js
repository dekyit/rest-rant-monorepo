const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    let {passwordDigest, ...nonPasswordField} = req.body;
    const user = await User.create({
        ...nonPasswordFields
    ,
    passwordDigest: await bcrypt.hash(passwordDigest, 12)
})
    
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router
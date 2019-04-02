const express = require('express')
const router=express.Router()

const login=require('./login')

router.post('login',login.Login)

module.exports=router
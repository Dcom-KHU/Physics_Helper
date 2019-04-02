const express = require('express')
const router = express.Router()

const auth=require('./auth')
const list=require('./list')

router.get('/auth',auth.Auth)
router.get('/list',list.List)
router.use('/helper',require('./helper'))

module.exports=router
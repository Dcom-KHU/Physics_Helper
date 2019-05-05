const express = require('express')
const multer=require('multer')
const router=express.Router()

const login=require('./login')
const centripetal=require('./centripetal')
const idealCentripetal=require('./idealCentripetal')
let upload=multer({storage:multer.memoryStorage()})

router.post('/login',login.Login)
router.post('/centripetal',upload.single("file"),centripetal.Centripetal)
router.post('/idealcentripetal',idealCentripetal.IdealCentripetal)


module.exports=router
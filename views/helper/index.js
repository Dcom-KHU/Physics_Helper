const express = require('express')
const router = express.Router()

const render = require('./render')

router.get('/:expNo',render.Render)

module.exports=router
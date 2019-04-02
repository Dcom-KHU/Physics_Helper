const express = require('express')
const router = express.Router()

const render = require('./render')

app.get('/:expNo',render.Render)

module.exports=router
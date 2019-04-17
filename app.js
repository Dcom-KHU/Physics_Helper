const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const session = require('express-session')
const path = require('path')
const morgan = require('morgan')
const logger = require('./logger')

require('dotenv').config()

const app=express()
app.use(morgan('combined'))
app.use('/static',express.static(path.join(__dirname,'/static')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    res.header('Access-Control-Allow-Headers', 'content-type, x-access-token')
    next()
})

app.use(session({
    secret:'ambc@!vsmkv#!&*!#EDNAnsv#!$()_*#@',
    resave:false,
    saveUninitialized:true
}))

app.use('/api',require('./api'))

app.get('/',(req,res)=>{
    if(!req.session.verified){
        res.redirect('/views/auth')
    }
    else{
        res.redirect('/views/list')
    }
})
app.use('/views',require('./views'))
app.use((req,res,next)=>{
    res.status(404).send("페이지를 찾을 수 없습니다.\n" +"개발자에게 문의해주세요!")
})

app.listen(process.env.SERVER_PORT ||3000,()=>{
    console.log('server is running on port '+process.env.SERVER_PORT)
})
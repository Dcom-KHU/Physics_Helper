const winston = require('winston')
const winstonDaily = require('winston-daily-rotate-file')
const moment = require('moment')

const logger = winston.createLogger({
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss.SSS ZZ'
        }),
        winston.format.errors({stack:true}),
        winston.format.splat(),
        winston.format.json()
    ),
    defaultMeta:{service:'Physics_Helper'},
    transports:[
        new winston.transports.File({
            filename:'./log/error.log',
            level:'error',
            prettyPrint:true,
        }),
        new winston.transports.File({
            filename:'./log/info.log',
            prettyPrint:true
        })
    ]
})

module.exports=logger
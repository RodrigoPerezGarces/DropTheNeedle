const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const cors = require('cors')

const whitelist = [process.env.DOMAIN_LOCAL]
const corsOptions = {
    origin: (origin, cb) => {
        const originIsWhitelisted = whitelist.includes(origin)
        cb(null, originIsWhitelisted)
    },
}
// const whitelist = ['http://localhost:5000/', 'http://drop-the-needle.herokuapp.com/']
// const corsOptions = {
//     origin: (origin, cb) => {
//         const originIsWhitelisted = whitelist.includes(origin)
//         cb(null, originIsWhitelisted)
//     }
// }

module.exports = app => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(cors(corsOptions))
}
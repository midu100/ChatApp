const express = require('express')
const route = express.Router()
const authRoute = require('./auth')
const convoRoute = require('./convoRoute')

route.use('/auth',authRoute)
route.use('/convo',convoRoute)

module.exports = route


// DB_STRING=+srv://chatApp:chatApp@cluster0.kzi42f2.mongodb.net/chatApp?appName=Cluster0
const express = require('express')
const route = express.Router()
const authRoute = require('./auth')
const convoRoute = require('./convoRoute')
const {authMiddleware} = require('../middleware/authMiddleware')

route.use('/auth',authRoute)
route.use('/convo', authMiddleware ,convoRoute)

module.exports = route


// DB_STRING=+srv://chatApp:chatApp@cluster0.kzi42f2.mongodb.net/chatApp?appName=Cluster0
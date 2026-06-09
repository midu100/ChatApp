const express = require('express')
const { signUp, signIn, getMe } = require('../controllers/authController')
const { authMiddleware } = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/signup',signUp)
route.post('/signin',signIn)
route.get('/getprofile',authMiddleware,getMe)

module.exports = route
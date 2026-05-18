const express = require('express')
const { addNewFriend } = require('../controllers/convController')
const { authMiddleware } = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/addnewfriend',authMiddleware,addNewFriend)




module.exports = route
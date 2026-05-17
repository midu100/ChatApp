const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.send('hello')
})

module.exports = route


// DB_STRING=+srv://chatApp:chatApp@cluster0.kzi42f2.mongodb.net/chatApp?appName=Cluster0
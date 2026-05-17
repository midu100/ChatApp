const express = require('express')
const dbConfig = require('./dbConfig')
const route = require('./routes')
require('dotenv').config()
const app = express()
const port = 8000

app.use(express.json())
dbConfig()
app.use(route)


app.listen(port, () => {
  console.log(`server is running...`)
})

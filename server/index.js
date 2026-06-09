const express = require('express')
const { createServer } = require("http");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dbConfig = require('./dbConfig')
const route = require('./routes');
require('dotenv').config()
const app = express()
const port = 8000

const httpServer = createServer(app);
const io = require("socket.io")(httpServer);
global.io = io;


app.use(express.json())
dbConfig()
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'], credentials: true }))

io.on("connection", socket => {
  socket.on("connection", (socket) => {
    socket.on("join_room",(convId)=>{
      socket.join(convId)
    })
  });
  
});



app.use(route)


app.listen(port, () => {
  console.log('server is running...')
})

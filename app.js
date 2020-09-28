require('dotenv').config()
const express = require('express')
const http = require('http')
const { env } = require('process');
const socket = require('socket.io')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routes/index')
const messageModels = require('./src/models/message')
const server = http.createServer(app)
const io = socket(server)

io.on('connection', socket => {
  console.log('user connect')

  socket.on('setupUserLogin', id =>{
    console.log('user baru join adalah ' + id)
    socket.join('user:' + id)
  })

  // socket.on('welcomeMessage', user => {
  //   socket.join(user.roomName)
  //   console.log(user.roomName)
  //   socket.broadcast.to(user.roomName).emit('notification', user.username + ' join the chat')
  //   console.log(user)
  // })

  // socket.on('sendMessage', data => {
  //   console.log(data)
  //   io.to(data.roomName).emit('message', data)
  //   socket.broadcast.to(data.roomName).emit('notification', data.username + ' : ' + data.message)
  // })

  socket.on('sendMessage', (data, callback) =>{
    const dataMessage = data
    dataMessage.createdAt = new Date()
    console.log(data)
    
    // send to sender
    callback(data)

    // save to database
    messageModels.insertMessage(dataMessage)
    .then((result)=>{
    
    // send to receiver
    io.to(data.receiverId).emit('notification', (data.senderName + ' : ' + data.messageBody))
    io.to('user:' + data.receiverId).emit('receiveMessage', data)

    })
    .catch(err=>{
      console.log(err)
    })
  })

  socket.on('disconnect', () => {
    console.log('disconnect with id ' + socket.id)
    // socket.broadcast.emit('notification', user.username + ' left the chat')
  })
})

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api/v1/', routes)
app.use('/api/v1/uploads', express.static('./uploads'))

app.use((req, res) => {
  res.status(404)
  res.send({
    error: {
      status: 404,
      message: 'URL Not Found'
    }
  })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log('Server is running at port ' + PORT))
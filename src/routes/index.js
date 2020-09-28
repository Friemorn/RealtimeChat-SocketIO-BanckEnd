const express = require('express')
const userRoutes = require('./user')
const roomRoutes = require('./room')
const imageRoutes = require('./image')

const router = express.Router()

router
  .use('/user', userRoutes)
  .use('/room', roomRoutes)
  .use('/image', imageRoutes)

module.exports = router

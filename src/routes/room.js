const express = require('express')
const roomController = require('../controllers/room')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:id', verifyAccess, roomController.getRoomById)
  .get('/', verifyAccess, roomController.getRoomByName)
  .post('/', verifyAccess, roomController.insertRoom)
  .patch('/:id', verifyAccess, roomController.updateRoom)
  .delete('/:id', verifyAccess, roomController.deleteRoom)

module.exports = router

const express = require('express')
const userController = require('../controllers/user')
const { verifyAccess } = require('../middlewares/auth')
const router = express.Router()

router
  .post('/register', userController.register)
  .post('/login', userController.login)
  .get('/:id', verifyAccess, userController.getUserbyUserId)
  .get('/', verifyAccess, userController.getAllUser)
  .patch('/:id', verifyAccess, userController.updateUser)
  .delete('/:id', verifyAccess, userController.deleteUser)

module.exports = router

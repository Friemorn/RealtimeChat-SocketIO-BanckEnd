const express = require('express')
const imageController = require('../controllers/image')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router
  .get('/:id', verifyAccess, imageController.getImageByUserId)
  .post('/', verifyAccess, upload, imageController.insertImage)
  .patch('/:id', verifyAccess, upload, imageController.updateImage)
  .delete('/:id', verifyAccess, imageController.deleteImage)

module.exports = router

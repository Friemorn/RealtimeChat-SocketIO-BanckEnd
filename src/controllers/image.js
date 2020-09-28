const imageModels = require('../models/image')
const helper = require('../helpers/helpers')
const fs = require('fs')

const image = {
  getImageByUserId: (req, res) => {
    const id = req.params.id
    imageModels.getImageByUserId(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 404, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertImage: (req, res) => {
    console.log(req.file.name)
      const {
        userId
      } = req.body
      const data = {
        imageProfile: `http://localhost:4000/api/v1/uploads/${req.file.filename}`,
        createdAt: new Date(),
        userId
      }
      imageModels.insertImage(data)
        .then((result) => {
          console.log(result)
          helper.res(res, result, 200, null)
        })
        .catch((err) => {
          console.log(err)
        })
  },
  updateImage: (req, res) => {
      const id = req.params.id
      const {
        userId
      } = req.body
      const data = {
        imageProfile: `http://localhost:4000/api/v1/uploads/${req.file.filename}`,
        createdAt: new Date(),
        userId
      }
      if (req.file) {
        imageModels.getImageByUserId(id).then(result => {
          const pp = result[0]
          const img = pp.imageProfile.replace('http://localhost:4000/api/v1/uploads/', '')
          const filePath = `./uploads/${img}`;
          fs.unlinkSync(filePath)
        })
        data.imageProfile = `http://localhost:4000/api/v1/uploads/${req.file.filename}`
      }
      imageModels.updateImage(id, data)
        .then((result) => {
          helper.res(res, result, 200, null)
        })
        .catch((err) => {
          console.log(err)
        })
  },
  deleteImage: (req, res) => {
      const id = req.params.id
      imageModels.getImageByUserId(id).then(result => {
        const pp = result[0]
        const img = pp.imageProfile.replace('http://localhost:4000/api/v1/uploads/', '')
        const filePath = `./uploads/${img}`;
        fs.unlinkSync(filePath)
      })
      imageModels.deleteImage(id)
        .then((result) => {
          helper.res(res, result, 200, null)
        })
        .catch((err) => {
          console.log(err)
        })
  }
}

module.exports = image

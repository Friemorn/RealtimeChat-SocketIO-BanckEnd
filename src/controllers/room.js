const roomModels = require('../models/room')
const helper = require('../helpers/helpers')

const room = {
  getRoomById: (req, res) => {
    const id = req.params.id
    roomModels.getRoomById(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getRoomByName: (req, res) => {
    const roomName = req.query.roomName 
    if (roomName) {
      roomModels.getRoomByName(roomName)
        .then((result) => {
          if (result.length > 0) {
            helper.res(res, result, 200, null)
          } else {
            helper.res(res, [], 200, null)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  updateRoom: (req, res) => {
    const id = req.params.id
    const {
      roomName
    } = req.body
    const data = {
      roomName

    }
    roomModels.updateRoom(id, data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteRoom: (req, res) => {
    const id = req.params.id
    roomModels.deleteRoom(id)
      .then((result) => {
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertRoom: (req, res) => {
    const {
      roomName
    } = req.body
    const data = {
      roomName
    }
    roomModels.insertRoom(data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = room

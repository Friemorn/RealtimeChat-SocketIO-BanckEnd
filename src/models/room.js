const connection = require('../configs/db')

const room = {
  getRoomById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM room WHERE roomId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getRoomByName: (roomName) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM room WHERE roomName LIKE ?`, `%${roomName}%`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateRoom: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE room SET ? WHERE roomId = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteRoom: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM room WHERE roomId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertRoom: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO room SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = room

const connection = require('../configs/db')

const image = {
  getImageByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM image WHERE userId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertImage: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO image SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateImage: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE image SET ? WHERE userId = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteImage: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM image WHERE userId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = image

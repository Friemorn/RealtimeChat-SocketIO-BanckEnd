const connection = require('../configs/db')

const user = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserbyUserId: (userId) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE userId = ?', userId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserbyUsername: (username) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE username = ?', username, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserbyEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email = ?', email, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllUser: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT user.*,image.* FROM user LEFT JOIN image ON user.userId = image.userId`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}

module.exports = user

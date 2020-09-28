const bcrypt = require('bcryptjs')
const helper = require('../helpers/helpers')
const userModels = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  register: async (req, res) => {
    const { username, fullname, email, password, phone, bio, latitude, longitude } = req.body
    const isUser = await userModels.getUserbyEmail(username)
    const isEmail = await userModels.getUserbyEmail(email)
    if (isUser.length !== 0) return helper.res(res, { message: 'Username is Already Exist' }, 403, null)
    if (isEmail.length !== 0) return helper.res(res, { message: 'Email is Already Registered' }, 403, null)
    const data = {
      username,
      fullname: 'Your Fullname',
      email,
      password,
      phone: 'Your Phone Number',
      bio: 'Your Bio',
      latitude: 1,
      longitude: 1
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(data.password, salt, function (err, hash) {
        data.password = hash
        userModels.register(data)
          .then((result) => {
            helper.res(res, result, 201, null)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    })
  },
  login: (req, res) => {
    const { email, password } = req.body
    userModels.getUserbyEmail(email)
      .then((result) => {
        if (result.length < 1) return helper.res(res, { message: 'Email Not Found!' }, 403, null)

        const user = result[0]
        const hash = user.password
        bcrypt.compare(password, hash).then((resCompare) => {
          if (!resCompare) return helper.res(res, { message: 'Password is Wrong!' }, 403, null)
          const payload = {
            userId: user.userId,
            email: user.email
          }
          jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' }, (err, token) => {
            user.token = token
            delete user.password
            helper.res(res, user, 200)
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getUserbyUserId: (req, res) => {
    const id = req.params.id
    userModels.getUserbyUserId(id)
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
  getAllUser: (req, res) => {
    userModels.getAllUser()
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
  updateUser: (req, res) => {
    const id = req.params.id
    const {
      username,
      fullname,
      email,
      password,
      phone,
      bio,
      latitude,
      longitude
    } = req.body
    const data = {
      username,
      fullname,
      email,
      password,
      phone,
      bio,
      latitude,
      longitude
    }
    userModels.updateUser(id, data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteUser: (req, res) => {
    const id = req.params.id
    userModels.deleteUser(id)
      .then((result) => {
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

  const jwt = require('jsonwebtoken')
const tokenBlacklistModel = require('../models/blacklist.model')


async function authUser(req, res, next) {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized Access"
      })
    }

    const isTokenBlacklisted =
      await tokenBlacklistModel.findOne({ token })

    if (isTokenBlacklisted) {
      return res.status(401).json({
        message: "Unauthorized Access"
      })
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
    )

    req.user = decoded

    next()
  } catch (err) {
    console.error(err)

    return res.status(401).json({
      message: "Invalid Token"
    })
  }
}


module.exports = {authUser}
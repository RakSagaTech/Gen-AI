const express = require('express')
const authController = require('../controllers/auth.controller')

const authRouter = express.Router()


/**
 * @route POSt /api/auth/register
 * @desc Register a new user with username, email and password
 * @access Public
 */
authRouter.post("/register", authController.registerUserController)

/**
 * @route POSt /api/auth/login
 * @desc login a user with username and password
 * @access Public
 */
authRouter.post('/login', authController.loginUserController)

module.exports = authRouter
const express = require('express')
const authController = require('../controllers/auth.controller')

const authRouter = express.Router()


/**
 * @route POSt /api/auth/register
 * @desc Register a new user 
 * @access Public
 */
authRouter.post("/register", authController.registerUserController)

module.exports = authRouter
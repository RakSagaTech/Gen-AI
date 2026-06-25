const express = require('express')
const interviewRouter = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const interviewController = require('../controllers/interview.controller')



/**
 * @route POST /api/interview
 * @desc generate new interview report on the basis of user self description, resume pdf and job description
 * @access Private
 */
interviewRouter.post("/", authMiddleware.authUser, interviewController.generateInterviewReportController)


module.exports = interviewRouter
const express = require('express')
const interviewRouter = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const interviewController = require('../controllers/interview.controller')
const upload  = require('../middlewares/file.middleware')


/**
 * @route POST /api/interview
 * @desc generate new interview report on the basis of user self description, resume pdf and job description
 * @access Private
 */
interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterviewReportController)


/**
 * @route GET /api/interview/report/:interviewId
 * @desc get interview report by interviewId
 * @access Private
 */
interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interviewController.getInterviewReportByIdController)


/**
 * @route GET /api/interview/
 * @desc get all interview report of logged in user.
 * @access Private
 */
interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController)



module.exports = interviewRouter
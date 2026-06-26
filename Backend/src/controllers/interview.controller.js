const pdfParse = require('pdf-parse')
const interviewReportModel = require('../models/interviewReport.model')
const generateInterviewReport = require('../services/ai.service')



/**
 * @descr Controller to generate interview report based on user self description, resume and job description.
 */
async function generateInterviewReportController(req, res){
  try{
    if (!req.file) {
      return res.status(400).json({
        message: "Resume PDF is required."
      })
    }

  const resumeData = await (new pdfParse.PDFParse(Uin8rray.from(req.file.buffer))).getText()
  const resumeContent = resumeData

  const {selfDescription, jobDescription} = req.body

  const interviewReportByAI = await generateInterviewReport({resume: resumeContent.text, selfDescription, jobDescription})

  const interviewReport = await interviewReportModel.create({
    user: req.user.id,
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
    ...interviewReportByAI
  })

  res.status(201).json({
    message: "Interview report generated successfully",
    interviewReport
  })

  }catch(err){
    console.error(err)
    res.status(500).json({
      message: "Failed to generate interview report"
    })
  }
}



/**
 * @desc Controller to get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res){

  const {interviewId} = req.params

  const interviewReport = await interviewReportModel.findOne({_id: interviewId, user: req.user.id})

  if(!interviewReport){
    return res.status(400).json({
      message: "Interview report not found"
    })
  }

  res.status(200).json({
    message: "Interview report fetched successfully",
    interviewReport
  })
}


module.exports = {generateInterviewReportController, getInterviewReportByIdController}
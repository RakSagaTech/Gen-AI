const pdfParse = require('pdf-parse')
const interviewReportModel = require('../models/interviewReport.model')
const generateInterviewReport = require('../services/ai.service')




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


module.exports = {generateInterviewReportController}
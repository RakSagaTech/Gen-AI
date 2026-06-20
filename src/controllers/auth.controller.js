const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const userModel = require('../models/user.model')


/**
 * @name registerUserController
 * @desc Register a new user, expects username, email address and password in the request body
 * @access Public
 */
async function registerUserController(req, res){

  try{
    const {username, password, email} = req.body

  if(!username || !password || !email){
    return res.status(400).json({
      message: "Please provide username, email and password"
    })
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or:[{username}, {email}]
  })

  if(isUserAlreadyExists){
    return res.status(400).json({
      message: "Account already exists with this email address or username"
    })
  }

  const hashPassword = await bcrypt.hash(password, 10)

  const newUser = await userModel.create({
    username, 
    email, 
    password: hashPassword
  })

  const token = jwt.sign({
    id:newUser._id, username:newUser.username
  }, process.env.JWT_SECRET_KEY, {expiresIn: "1d"})

  res.cookie("token", token)

  res.status(201).json({
    message: "User registered successfully",
    user:{
      id: newUser._id,
      username: newUser.username,
      email: newUser.email
    }
  })
  }catch(err){
    console.error(err)

    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}


module.exports = {registerUserController}
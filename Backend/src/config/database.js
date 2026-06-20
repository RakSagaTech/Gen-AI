const mongoose = require('mongoose')


async function connectToDB(){
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to the database successfully')
  }catch(err){
    console.error(`Error connecting to the database ${err}`)
    process.exit(1)
  }
}


module.exports = connectToDB
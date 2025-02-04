const mongoose = require('mongoose')

const dbconnect=async()=>{
    await mongoose.connect('mongodb://localhost:27017/validation')
    console.log('MongoDB Connected')
}

module.exports=dbconnect;
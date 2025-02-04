const mongoose = require('mongoose')

const studentdata= new mongoose.Schema({
    name:String,
    email:String,
    phone:Number, 
    age:Number,
    academicyear:Number
})

const Data = mongoose.model('Data', studentdata)

module.exports = Data;
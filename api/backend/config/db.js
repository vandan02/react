const mongoose= require('mongoose')
require('dotenv').config();
let URL=process.env.URL
exports.dbconnection=async()=>{
    await mongoose.connect(URL)
    console.log("connection established");
    
}
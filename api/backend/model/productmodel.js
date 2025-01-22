const mongoose = require('mongoose')


const productschama=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String},
    category:{type:String,required:true}
})

const PRODUCT=mongoose.model('PRODUCT',productschama)

module.exports=PRODUCT
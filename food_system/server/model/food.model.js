const  mongoose = require("mongoose");


const productSchema=new mongoose.Schema({
   name:String,
   des:String,
   catogory:String,

  price:Number,
  img:String, 
})


const Product = mongoose.model("Product",productSchema);

module.exports = Product;
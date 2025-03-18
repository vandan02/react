const  mongoose = require("mongoose");


const userSchema=new mongoose.Schema({
   name:String,
   email:String,
   role: {
    type: String,
    enum: ["retailer", "wholesaller","admin"],
    default: "retailer",
  },
  password:String,
  isActive: { type: Boolean, default: true },
  productid:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    // required: true,
  }],
  orderid:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    // required: true,
  }]
})


const User = mongoose.model("User",userSchema);

module.exports = User;
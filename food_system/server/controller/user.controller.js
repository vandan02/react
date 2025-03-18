const bcrypt = require('bcrypt');
const User = require('../model/user.model');
exports.user={
signup:async(req,res)=>{
let {email,password} = req.body;
const user=await User.findOne({email:email});
if(user){
    res.send("user already exists")
}
const hashedPassword = await bcrypt.hash(password, 10);
req.body.password=hashedPassword;
console.log(req.body);

await User.create(req.body)
res.send(req.body)
},
login:async (req, res) => {
    try {
        const { email, password } = req.body;

    
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).send("User not found");
        }
        
        // Compare hashed password with the plain text password provided
        const isMatch = await bcrypt.compare(password, user.password); // Correct order of arguments
        
        if (isMatch) {
            // You may want to return a JWT or session token here for authentication
            return res.status(200).send("Login successful");
        } else {
            return res.status(401).send("Incorrect password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send("Server error");
    }
  
},
userupdate:async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(req.body)
}
}
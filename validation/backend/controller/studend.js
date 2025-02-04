const Data=require("../model/data.model")


const createdata=async(req,res)=>{
    let user=await Data.createdata(req.body);
    res.send(user);
}
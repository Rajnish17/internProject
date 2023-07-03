const User =require("../models/userSchema");
const express =require("express");
const router =express.Router();


router.post("/register",async(req,res)=>{
    const user =new User(req.body);
    try{
        const savedUser =await user.save();
       
        res.status(201).json({
            message:"Sucess"
        });
        }catch(err){
            res.status(500).json(err)
        }
});



router.get("/showuser",async(req,res)=>{
    
    try{
        const allUser =await User.find();
       
        res.status(201).json(allUser);
        }catch(err){
            res.status(500).json(err)
        }
})





module.exports =router;
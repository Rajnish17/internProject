const User =require("../models/userSchema");
const express =require("express");
const router =express.Router();

//register User
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


//show all User
router.get("/showuser",async(req,res)=>{
    
    try{
        const allUser =await User.find();
       
        res.status(201).json(allUser);
        }catch(err){
            res.status(500).json(err)
        }
})


//delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    
    try{
        await User.findByIdAndDelete(req.params.id);
       
        res.status(201).json({
            message:"Successfully deleted"
        });
        }catch(err){
            res.status(500).json(err)
        }
});

//update user
router.put("/edituser/:id",async(req,res)=>{
    
    try{
      const updateitem= await User.findByIdAndUpdate(req.params.id,
        {$set:req.body},
        {new:true});
       
        res.status(201).json({
            message:"Successfully updated",
            data:updateitem
        });
        }catch(err){
            res.status(500).json(err)
        }
})


module.exports =router;
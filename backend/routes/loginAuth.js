const router=require('express').Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userSchema=require('../models/userModel')


router.post('/',async(req,res)=>{
    const {email,password}=req.body;
    const finduser=await userSchema.findOne({email})
    if(finduser){
        const comparePassword=await bcrypt.compare(password,finduser.password)
        
        if(comparePassword){
            const token=jwt.sign({
                email:req.body.email,
                password:req.body.password
            },'kamranimazmohammed109677')
            res.json({
                message:"logged in",
                send:token
            })
            
        }
        else{
            res.json({
                message:"incorrect credentials"
            })
        }
    }
    else{
        console.log(err)
    }
})

module.exports=router
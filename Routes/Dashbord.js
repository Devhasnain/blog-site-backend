const express=require('express');
const JWT = require('./JWT');
const router=express.Router();

router.post('/',JWT,(req,res)=>{
    try {
       res.status(200).json({
        msg:"Login successful",
        access:true
       })
    } catch (error) {
        res.status(500).json({
            msg:"Some error occured please tryagain!",
            access:false
        })
    }
})

module.exports=router;
const express=require('express');
const router=express.Router();
const Posts=require('../Models/Posts');

router.get('/',(req,res)=>{
    try {
        Posts.find()
        .then(result=>{
            if (result.length>0) {
                res.status(200).json({
                    post:result
                })
            } else {
                res.status(200).json({
                    msg:"Post not found!",
                    access:true
                })
            };
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Some error occured please tryagain",
            access:false
        })
    }
});
module.exports=router;
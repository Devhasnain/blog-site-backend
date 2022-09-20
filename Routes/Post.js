const express = require('express');
const JWT = require('./JWT');
const route = express.Router();
const multer = require('../Utils/Multer');
const postSchema = require('../Models/Posts');
const { default: mongoose } = require('mongoose');
const fs=require('fs');
route.post('/', multer.single('img'), JWT,async (req, res) => {
    try {
        fs.readFile(req.file.path,"base64",(err,file)=>{
            if (!file) {
                res.status(500).json({
                    msg:"Some error occured tryagain",
                    access:false
                })
            } else {
                let post =new postSchema({
                    id:mongoose.Types.ObjectId,
                    image:file,
                    title:req.body.title,
                    description:req.body.description,
                })
                post.save()
                .then(result=>{
                    res.status(200).json({
                        msg:"Post successful",
                        access:true
                    })
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Some error occured please tryagain.",
            access:false,
            err:error
        })
    }
})

module.exports = route;
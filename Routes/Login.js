const express=require('express');
const Verification = require('./Verification');
const route=express.Router();

route.post('/',Verification);

module.exports=route
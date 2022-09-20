const mongoose=require('mongoose');
 const SMS=mongoose.Schema({
    name:String,
    email:String,
    message:String
});
module.exports=mongoose.model('Messages',SMS);
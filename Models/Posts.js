const mongoose=require('mongoose');
const Posts=mongoose.Schema({
    image:String,
    title:String,
    description:String,
    date:Date
});
module.exports=mongoose.model('posts',Posts);
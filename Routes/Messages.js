const MessageSchema=require('../Models/SMS');

const Messages=((req,res)=>{
    let {name,email,message}=req.body;
    try {
        let UserMessage=new MessageSchema({
            name:name,
            email:email,
            message:message
        })
        UserMessage.save()
        .then(result=>{
            return res.status(200).json({
                msg:`Thanks for your message! we will review your message!`,
                access:true
            })
        })
        .catch(error=>{
            return res.status(500).json({
                msg:"Some error occured tryagain later!",
                access:false
            })
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Some error occured please tryagain later!",
            access:false
        })
    }
});
module.exports=Messages;
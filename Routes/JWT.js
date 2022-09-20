const jwt =require('jsonwebtoken');
const userSchema=require('../Models/Admin');
const JWT=(req,res,next)=>{
    try {
        jwt.verify(req.body.token,process.env.SECRET_KEY,(err,admin)=>{
            if (err) {
                return res.status(500).json({
                    msg:'Some error occured please tryagain with correct credentials.'
                })
            } else {
                const id=admin.id
                userSchema.find({_id:id})
                .then(result=>{
                    if (result.length<1) {
                        return res.status(400).json({
                            msg:'Please tryagain with correct credentials for login to the dashbord.'
                        })
                    } else {
                        next();
                    }
                })
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Some error occured please tryagain with correct credentials."
        })
    }
}
module.exports=JWT
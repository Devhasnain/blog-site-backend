const userSchema = require('../Models/Admin');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const Verification = (req, res) => {
    try {
        userSchema.find({username:req.body.username})
        .then(result=>{
            if (result.length<1) {
                return res.status(400).json({
                    msg:"Please tryagain with correct credentials for login to dashbord.",
                    access:false
                })
            } else {
                bcrypt.compare(req.body.password,result[0].password,(err,admin)=>{
                    if (!admin) {
                        return res.status(400).json({
                            msg:"Please tryagain with correct credentials for login to dashbord.",
                            access:false
                        })
                    } else {
                       const token= jwt.sign({id:result[0]._id},process.env.SECRET_KEY,{expiresIn:'24h'})
                       return res.status(200).json({
                        token,
                        access:true
                       })
                    }
                })
            }
        })
    } catch (error) {
        return res.status(400).json({
            msg: "Some error occured please tryagin with correct credentials",
            access: false
        })
    }
}

module.exports=Verification;
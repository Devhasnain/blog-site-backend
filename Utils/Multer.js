const multer=require('multer');
module.exports=multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'./Utils/Media')
        },
        filename:(req,file,cb)=>{
            cb(null,"img"+file.originalname)
        }
    }),
    fileFilter:(req,file,cb)=>{
        if (!file.mimetype.match(/|jpg|jpe|jpeg|png|gif$i/)) {
          return  cb(new Error('File not supported'),false)
        } else {
            cb(null,true)            
        }
    }
})
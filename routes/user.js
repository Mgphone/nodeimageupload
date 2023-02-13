const express=require('express');
const router=new express.Router();
const multer=require("multer");
const path=require("path");
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null, path.join(__dirname,'../public/Images'));
  },
  filename:function(req,file,cb){
    console.log(file);
    cb(null,Date.now()+path.extname(file.originalname))
  }
});
const upload=multer({storage:storage});
router.get("/upload",(req,res)=>{
res.render("index");
});
router.post("/upload",upload.single('image'),(req,res)=>{
 res.send("Image Uploaded");
});
module.exports=router;
const express=require('express');
const router=new express.Router();
const cloudinary=require("../utils/cloudinary");
const upload=require("../utils/multer");
const User=require("../models/user");

router.get("/upload",(req,res)=>{
 User.find({},(err,users)=>{
  if(!err){
    console.log(users);
    res.render("index",{
      users:users
    });
  }
 });
    
   

  })


router.post("/upload",upload.single('image'),async(req,res)=>{
//   try {
//     const result=await cloudinary.uploader.upload(req.file.path,{folder:'asiavailla'});
//    const name=req.body.name;
//    const publicId=result.public_id;
//    const imageUrl=result.url;
//   const user=new User({
//     name:name,
//     publicId:publicId,
//     imageUrl:imageUrl
//   });    
//   user.save()
//   .then(user=>{
//     res.send('user saved to databse')
//   })
//   .catch(err=>{
//     res.status(400).send("no save db")
//   });
//   } catch (error) {
//     console.log(error);
//   }
// res.redirect('/image/upload');
const result= await cloudinary.uploader.upload(req.file.path,{folder:'asiavailla'});
   const name=req.body.name;
   const publicId=result.public_id;
   const imageUrl=result.url;
  const user=new User({
    name:name,
    publicId:publicId,
    imageUrl:imageUrl
  });    
  await user.save()
res.redirect("/image/upload");
});



// router.get("/upload/:user",(req,res)=>{
//   const username=req.params.user;
//   console.log(username);
//   res.render("index");
// });
// router.post("/upload/:user",upload.single('image'),async(req,res)=>{
//   try {
//     const result=await cloudinary.uploader.upload(req.file.path);
//     //create new user
//     let user=new User({
//       name:req.params.user,
//       publicId:result.public_id,
//       imageUrl:result.secure_url
//     });
//     await user.save();
//     console.log(user);

//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports=router;
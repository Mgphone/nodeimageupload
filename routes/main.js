const { Router } = require("express");
const express=require("express");
const router=new express.Router();
router.get("/",(req,res)=>{
  res.send("Welcome from main");
});
module.exports=router;
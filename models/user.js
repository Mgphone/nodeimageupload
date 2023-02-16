const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
    trim:true
  },
  publicId:{
    type:String,
  },
  imageUrl:{
    type:String,
    
  }},{timestamps:true})
  
const User=mongoose.model('User',userSchema)
module.exports=User

// module.exports=mongoose.model('User',userSchema);
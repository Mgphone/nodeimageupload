const express=require("express");

const app=express();
const dotenv=require("dotenv");
const bodyParser=require("body-parser");
dotenv.config();
app.set("view engine","ejs");
app.use (express.static("public"));

const user=require('./routes/user');
app.use('/',user);

app.listen(process.env.port,function(){
  console.log('Server started on port '+process.env.PORT);
})
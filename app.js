const express=require("express");
const app=express();



const dotenv=require("dotenv");
const bodyParser=require("body-parser");
dotenv.config();
require('./db/mongoose');
app.set("view engine","ejs");
app.use (express.static("public"));

const user=require('./routes/user');
const main=require('./routes/main');
app.use('/image',user);
app.use('/',main);

app.listen(process.env.PORT,function(){
  console.log('Server started on port '+process.env.PORT);
})
const express = require("express");

const app= express();



app.use("/users",(req,res,next)=>{
    console.log("1st response")
  
  next();
},
(req,res)=>{
    console.log("2nd response")
    res.send("users page 2");
});

 


app.listen(7777,()=>{ 
    console.log("server is listening rn");
});
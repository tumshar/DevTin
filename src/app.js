const express = require("express");

const app= express();

app.use("/about",(req,res)=>{
    res.send("ABOUT PAGE");
});

app.get("/user",(req,res)=>{
    res.send("name:'Tushar'\n age:23");
}); 

app.use("/",(req,res)=>{
    res.send("SERVER RUNNING");
});


 


app.listen(7777,()=>{ 
    console.log("server is listening rn");
});
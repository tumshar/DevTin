const express = require("express");

const app= express();



app.get("/user/:userID/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send("userID: "+req.params.userID+" name: "+req.params.name+" password: "+req.params.password);
});

app.post("/user",(req,res)=>{
console.log("save data to the database");
res.send("data saved to the database");
});

app.delete("/user",(req,res)=>{
    console.log("delete data from the database");
    res.send("data deleted from the database");
});

app.use("/",(req,res)=>{
    res.send("SERVER RUNNING");
});


 


app.listen(7777,()=>{ 
    console.log("server is listening rn");
});
const express = require("express");

const app= express();

app.use((req,res)=>{
res.send("i am responding from server")
});

app.listen(7777,()=>{ 
console.log("server is listening rn");

});

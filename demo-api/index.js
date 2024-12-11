const express= require("express");

const app=express();

app.get("/users",(req,res)=>[
    res.send({data:["ram","dheeraj","krishna"]})
])

app.listen(3000,()=>{
    console.log("server is up and running")
})
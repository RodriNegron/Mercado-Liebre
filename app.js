const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT ||3030, ()=>{
    console.log("server on en 3030");
});

app.get("/", (req,res)=>
{
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/register", (req,res)=>
{
    res.sendFile(__dirname + "/views/register.html");
})

app.get("/login", (req,res)=>
{
    res.sendFile(__dirname + "/views/login.html");
})
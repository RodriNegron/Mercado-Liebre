const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3030, ()=>{
    console.log("server on en 3030");
});

app.get("/", (req,res)=>
{
    res.sendFile(__dirname + "/views/index.html");
})
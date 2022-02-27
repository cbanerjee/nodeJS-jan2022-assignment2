const express = require("express");
const empRout = require ("./APIs/router/employee-router");
const projRout = require ("./APIs/router/project-router");
const empDetailsRout = require("./APIs/router/employeeDetails-router");
// const bodyparser = require ("body-parser")

const server = express();

server.listen(3000, ()=>{
    console.log("Server is listening at port 3000");
})

// server.use(bodyparser.json);

server.use("/employee",empRout);
server.use("/project/",projRout);
server.use("/getemployeedetails/",empDetailsRout);

server.use((req,res) =>{
    res.status(401).send("Please verify the path");
})

server.get("/", (res,req)=>{
    console.log("Used the path localhost:3000/ , generic response sent");
    res.send("The server is up and running");
    res.end();
})
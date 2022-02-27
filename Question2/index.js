const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const server = express();

server.listen(3000, ()=>{
    console.log("Server is listening at port 3000");
})

server.use("/employee", (req,res)=>{
    const employee_list = [];
    fetch("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(response => response.json())
    .then (jsonResponse=>{
        jsonResponse.forEach(i =>{
            employee_list.push(JSON.stringify({
                "id": `${i.id}`,
                "createdAt": `${i.createdAt}`,
                "name": `${i.name}`,
            }))
        })
        res.send(JSON.stringify(employee_list));
    })
})

server.use((req,res) =>{
    res.status(401).send("Please verify the path");
})

server.get("/", (res,req)=>{
    console.log("Used the path localhost:3000/ , generic response sent");
    res.send("The server is up and running");
    res.end();
})
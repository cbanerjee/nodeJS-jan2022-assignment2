const path = require("path");
const fs = require("fs");
const _ = require("underscore");

// console.log(path.join(__dirname,"../../JSON_Files/employee-details.json"));
const RawData = fs.readFileSync(path.join(__dirname,"../../JSON_Files/employee-details.json"));
const formattedJSON = JSON.parse(RawData);

exports.getByID = (req, res)=>{
    var employeeByID = _.where(formattedJSON,{id: `${req.params.id}`});
    res.send(JSON.stringify(employeeByID));
}

exports.getAll = (req, res) =>{
    res.send(formattedJSON);
}
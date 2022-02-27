const path = require("path");
const fs = require("fs");
const _ = require("underscore");

const RawData = fs.readFileSync(path.join(__dirname,"../../JSON_Files/project-information.json"));
const formattedJSON = JSON.parse(RawData);

exports.getByID = (req, res)=>{
    var projectByID = _.where(formattedJSON,{id: `${req.params.id}`});
    res.send(JSON.stringify(projectByID));
}
// First API would take the Employee Id as Input and Queries the underlying JSON File to fetch Employee Data at: (localhost:3000/employee/:id)

const express = require("express");
const employeeController = require('../controllers/employee-api');

const router = express.Router();

router.get("/:id", employeeController.getByID);

router.get("/showall/all/", //(req,res)=>{
    //res.send("IT is working").end();});
    employeeController.getAll);

router.get("/", (req,res)=>{
    res.send("Please provide the ID parameter only");
})

module.exports = router;
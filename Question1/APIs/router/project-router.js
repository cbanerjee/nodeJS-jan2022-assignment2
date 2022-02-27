// SecondAPIwouldtaketheProjectIDasinputandQuerytheJSONFiletofetchProjectInformationat:(localhost:3000/project/:id)

const express = require("express");
const projectController = require('../controllers/project-api');

const router = express.Router();

router.get("/:id", projectController.getByID);
router.get("/", (req,res)=>{
    res.send("Please provide the ID parameter only");
})


module.exports = router;
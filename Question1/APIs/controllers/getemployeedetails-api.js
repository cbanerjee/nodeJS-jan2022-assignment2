// const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.findAll= (req, res)=>{

    var employee_details = [];
    //This solution using fetch and promises as instructed
    fetch("http://localhost:3000/employee/showall/all")

        .then(response => response.json())

        .then( json =>{
            json.forEach(employee=>{
                fetch(`http://localhost:3000/project/${employee.project_id}`)
                    .then(projDetails => projDetails.json()).then(projJSON =>{

                        var new_employee_object = JSON.stringify({
                            "id": `${employee.id}`,
                            "createdAt": `${employee.createdAt}`,
                            "name": `${employee.name}`,
                            "project_details" : JSON.stringify(projJSON[0])
                        });
                        employee_details.push(JSON.parse(new_employee_object));
                        if(employee_details.length == json.length){
                            res.contentType('application/json');
                            res.send(JSON.stringify(employee_details));
                        }
                    })
            })
        })
        .catch(error =>{
            console.log(error);
        })
}
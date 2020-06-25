const express = require('express');
const routerRequest = express.Router();

//Model of db instances

const Requests = require('../models/requests');

//Request messages CRUD that do a person.

routerRequest.get('/', async (req, res) => {
    let page = parseInt(req.query.page, 10) || 0;
    let page_size = (req.query.page_size === undefined) ? 0: parseInt(req.query.page_size, 10); // Check with a model and if its in the request put 0 in this variable
    Requests
        .find().skip( page > 0 ? ((page - 1) * page_size) : 0).limit(page_size).sort( '-createdOn' )
        .then(result =>{
            res.json({
                body: result //"All the request of all people"
            });
        }).catch(error =>{
            res.status(500).json({body:error.message});
        }); 
});


function CheckFields(body,fields){
    var checkedObject = {};
    fields
        .filter(element => !(body[element] === undefined || body[element] === null))
        .forEach(element => {
            checkedObject[element] =  body[element];
        })
    return checkedObject;
}


//Edit a request, ONLY THE USER THAT DO THE REQUEST CAN DO IT

routerRequest.put('/:requestsid', (req, res, next) => {
    //try if is an invalid request with simbol strange
    let request_id = req.params.requestsid;
    Requests
        .findById(request_id)
        .then( result =>{
            if (!result)
            {
                throw new Error('There isnt a Request with the input id. ');
            }
            let necesaryFields = ["message","delivered"];
            let updater = CheckFields(req.body, necesaryFields);
            result.update(updater).then(result =>{
                res.json({
                    body: "The request was correctly save"
                });
            }).catch(err =>{
                res.status(500).json({body:"Error Perro2"});
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({body:err.message});
        });
});

// Delete a requests

routerRequest.delete('/:requestsid',(req, res) => {
    let requestsid = req.params.requestsid;
    Requests
        .findByIdAndDelete(requestsid)
        .then(result => {
            res.json({
                body: "The request was delet successfuly" //"All the request of all people"
            });
        }).catch(error =>{
            res.status(500).json({body:"Error in delete request"});
        });
});


module.exports = routerRequest;
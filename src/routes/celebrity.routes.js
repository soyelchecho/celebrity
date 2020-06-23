const express = require('express');
const routerCelebrity = express.Router();

const Requests = require('../models/requests');

// Get all requests of a certain celebrity

routerCelebrity.get('/:celebrityid/request', (req, res) => {
    let celebrityid = req.params.celebrityid;
    Requests
        .find({celebrity:celebrityid})
        .then(response => {
            if (!response)
            {
                throw new Error('There isnt a Request with the input id. ');
            }
            res.json({
                body: response //"All the request of all people"
            });
        }).catch(error => {
            res.status(500).json({body:"Error Find the result."});
        });
});

routerCelebrity.post('/:celebrityid/request', (req, res) => {
    var { message, delivered, buyerid } = req.body;
    //the buyer needs to be the current user auth
    //------- get user auth logic here ----

    //check the celebrity id with superstruct package schema
    var celebrityid = req.params.celebrityid; 

    //------ search the celebrity into the database logic ----
    //for this step I only save the celebrityid into the field celebrity of requests model
    var request = new Requests({buyer:buyerid,celebrity:celebrityid,delivered:delivered,message:message});
    request.save().then(response =>{
        res.json({
            body: "The request was correctly save"
        });
    }).catch(error =>{
        res.json({
            body: "Error creation requests"
        });
    });
    
});

module.exports = routerCelebrity;
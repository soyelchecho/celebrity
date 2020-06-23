const express = require('express');
const router = express.Router();

//Model of db instances

const Requests = require('../models/requests')

//Request messages CRUD that do a person.

router.get('/', async (req, res) => {
    var requests = await Requests.find();
    res.json({
        statusCode:200,
        body: requests //"All the request of all people"
    });
});

router.post('/:celebrityid', async (req, res) => {
    var { message, delivered, buyerid } = req.body;
    //the buyer needs to be the current user auth
    //------- get user auth logic here ----

    var celebrityid = req.params.celebrityid; 

    //------ search the celebrity into the database logic ----
    //for this step I only save the celebrityid into the field celebrity of requests model
    var request = new Requests({buyer:buyerid,celebrity:celebrityid,delivered:delivered,message:message});
    await request.save();
    res.json({
        statusCode:200,
        body: "The request was correctly save"
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

router.put('/:requestsid', (req, res, next) => {
    //try if is an invalid request with simbol strange
    let request_id = req.params.requestsid;
    Requests.findById(request_id).then( result =>{
        if (!result)
        {
            throw new Error('There isnt a Request with the input id. ');
        }
        let necesaryFields = ["message","delivered"];
        let updater = CheckFields(req.body, necesaryFields);
        result.update(updater).catch(err =>{
            res.status(500).json({body:"Error Perro2"});
        });
        res.json({
            statusCode:200,
            body: "The request was correctly save"
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({body:err.message});
    });
});



// Get all requests of a certain celebrity

router.get('/:celebrityid', async (req, res) => {
    let celebrityid = req.params.celebrityid;
    console.log(celebrityid);
    
    var requests = await Requests.find({celebrity:celebrityid});
    res.json({
        statusCode:200,
        body: requests //"All the request of all people"
    });
});


module.exports = router;
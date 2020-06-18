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
    var { message, delivered, buyerid } = req.body
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


module.exports = router;
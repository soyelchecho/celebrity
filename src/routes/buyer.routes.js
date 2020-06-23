const express = require('express');
const routerBuyer = express.Router();

const Requests = require('../models/requests');

routerBuyer.get('/:buyerid/request', (req, res) => {
    let buyerid = req.params.buyerid;
    Requests
        .find({buyer:buyerid})
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

module.exports = routerBuyer;
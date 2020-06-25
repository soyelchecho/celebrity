// Modules and requirements
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// dependencies from other files
const { mongoose } = require('./database.js');

// objects
const app = express();


// Settings
app.set('port', process.env.PORT);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.use('/api/requests',require('./routes/requests.routes'));
app.use('/api/celebrity',require('./routes/celebrity.routes'));
app.use('/api/buyer',require('./routes/buyer.routes'));

//Error Handling Authetificaction

// Static File
app.use(express.static(path.join(__dirname, 'public')));


// Start Server
app.listen(process.env.PORT,()=>{
    console.log(`The server is running in PORT: ${app.get('port')}`);
});

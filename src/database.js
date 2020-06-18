const mongoose = require('mongoose');

const uri = "mongodb+srv://" + process.env.MONGODB_USER+":" + process.env.MONGODB_PASSWORD+"@celebrity-lcxqw.mongodb.net/"+process.env.MONGODB_DATABASE+"?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,  
    useUnifiedTopology: true
    })
    .then(() => {
      console.log("The MongoDB Atlas Database is connected");
    })
    .catch(err => console.log(err))

module.exports = mongoose;
const mongoose = require('mongoose');
const {Schema} = mongoose;

const RequestSchema = new Schema({
    buyer: {type: String, required: true}, // This property needs to change to Buyer Object in the future.
    celebrity: {type: String, required: true},// This property needs to change to Celebrity Object in the future.
    message: {type: String, required: true}, // The custom message that the buyer set and the celebrity say.
    delivered: {type: Boolean, default: false}
});

module.exports = mongoose.model('Request',RequestSchema);
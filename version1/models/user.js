var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    User_id: {type: String, required: true},
    FirstName: {type: String},
    LastName: {type: String},
    Email: {type: String },
    Password: {type: String },
    StartingWeight: {type: Number },
    CurrentWeight: {type: Number }
});

module.exports = mongoose.model('User', schema);

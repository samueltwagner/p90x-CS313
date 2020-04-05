var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Exercise_id: {type: String, required: true},
    ExerciseTitle: {type: String},
});

module.exports = mongoose.model('Exercise', schema);
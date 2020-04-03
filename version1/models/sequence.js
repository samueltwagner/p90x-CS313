var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    maxUserId: {type: Number, required: true},
    maxWorkoutId: {type: Number, required: true},
    maxExerciseId: {type: Number, required: true},
    maxExerciseCountId: {type: Number, required: true},
});

module.exports = mongoose.model('Sequence', schema);
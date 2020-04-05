var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Workout_id: {type: String, required: true},
    WorkoutTitle: {type: String},
    Status_Workout: {type: Boolean},
    Status_Diet: {type: Boolean },
    DayNumber: {type: Number },
    WeekNumber: {type: Number },
    BlockNumber: {type: Number },
    imageUrl: {type: String },
    DateTime: {type: Date },
    Exercise: [{type: Schema.Types.ObjectId, ref: 'Exercises'}],
    User: [{type: Schema.Types.ObjectId, ref: 'Users'}]
});

module.exports = mongoose.model('Workout', schema);
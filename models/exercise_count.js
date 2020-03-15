var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Exercise_Count_id: {type: String, required: true},
    Reps: {type: Number},
    Weight: {type: Number},
    DateTime: {type: Date },
    User: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    Exercise: [{type: Schema.Types.ObjectId, ref: 'Exercises'}]
});

module.exports = mongoose.model('Exercise_Count', schema);
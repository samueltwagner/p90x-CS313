var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String, required: true},
    name: {type: String},
    email: {type: String },
    phone: {type: String },
    imageUrl: {type: String },
    group: [{type: Schema.Types.ObjectId, ref: 'Workout'}]
});

module.exports = mongoose.model('Workout', schema);

// var Sequence = require('../models/sequence');

// var maxWorkoutId;
// var sequenceId = null;

// function SequenceGenerator() {

//   Sequence.findOne()
//     .exec(function (err, sequence) {
//       if (err) {
//         return res.status(500).json({
//           title: 'An error occurred',
//           error: err
//         });
//       }

//       sequenceId = sequence._id;
//       maxWorkoutId = sequence.maxWorkoutId;
//     });
// }

// SequenceGenerator.prototype.nextId = function (collectionType) {

//   var updateObject = {};
//   var nextId;

//   switch (collectionType) {
//     case "workouts":
//       maxWorkoutId++;
//       updateObject = {maxWorkoutId: maxWorkoutId};
//       nextId = maxWorkoutId;
//       break;
//     // case "messages":
//     //   maxMessageId++;
//     //   updateObject = {maxMessageId: maxMessageId};
//     //   nextId = maxMessageId;
//     //   break;
//     // case "contacts":
//     //   maxContactId++;
//     //   updateObject = {maxContactId: maxContactId};
//     //   nextId = maxContactId;
//     //   break;
//     default:
//       return -1;
//   }

//   Sequence.update({_id: sequenceId}, {$set: updateObject},
//     function (err) {
//       if (err) {
//         console.log("nextId error = " + err);
//         return null
//       }
//     });

//   return nextId;
// }

// module.exports = new SequenceGenerator();

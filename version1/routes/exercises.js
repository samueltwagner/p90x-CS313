var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Exercise = require('../models/exercise');

function returnError(res, error) {
    res.status(500).json({
        message: "An error occurred",
        error: error
    });
}

//GET
router.get("/", (req, res, next) => {
    Exercise.find()
        .then(exercises => {
            res.status(200).json({
                message: "Exercises fetched Successfully!",
                exercises: exercises
            });
        })
        .catch(error => {
            returnError(res, error);
        });
    }
);

//POST (SAVE)
// router.post("/", (req, res, next) => {
//     const maxDocumentId = sequenceGenerator.nextId("exercises");

//     const document = new Document({
//         id: maxDocumentId,
//         name: req.body.name,
//         description: req.body.description,
//         url: req.body.url
//     });
//     console.log("what?!?");
//     document.save()
//         .then(createdDocument => {
//             console.log("it saved");
//             res.status(201).json({
//                 message: 'Document added successfully',
//                 document: createdDocument
//             });
//         })
//         .catch(error => {
//             console.log("it made it!!!");
//             returnError(res, error);
//         });
// });
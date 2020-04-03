var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Document = require('../models/document');

function returnError(res, error) {
    res.status(500).json({
        message: "An error occurred",
        error: error
    });
}

//GET
router.get("/", (req, res, next) => {
    //call the Document model find() function to get all
    Document.find()
        .then(documents => {
            res.status(200).json({
                message: "Documents fetched Successfully!",
                documents: documents
            });
        })
        .catch(error => {
            returnError(res, error);
        });
    }
);

//POST (SAVE)
router.post("/", (req, res, next) => {
    const maxDocumentId = sequenceGenerator.nextId("documents");

    const document = new Document({
        id: maxDocumentId,
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
    });
    console.log("what?!?");
    document.save()
        .then(createdDocument => {
            console.log("it saved");
            res.status(201).json({
                message: 'Document added successfully',
                document: createdDocument
            });
        })
        .catch(error => {
            console.log("it made it!!!");
            returnError(res, error);
        });
});

//PUT
router.put("/:id", (req, res, next) => {
    Document.findOne({ id: req.params.id })
    .then(document => {
        document.name = req.body.name;
        document.description = req.body.description;
        document.url = req.body.url;

        Document.updateOne({ id: req.params.id }, document)
        .then(result => {
            res.status(204).json({
                message: "Document updated successfully"
            })
        })
        .catch(error => {
            returnError(res, error);
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Document not found.',
            error: { document: 'Document not found'}
        });
    });
});

//DELETE
router.delete("/:id", (req, res, next) => {
    Document.findOne({id: req.params.id })
    .then(document => {
        Document.deleteOne({ id: req.params.id})
        .then(result => {
            res.status(204).json({
                message: "Document deleted successfuly"
            });
        })
        .catch(error => {
            returnError(res, error);
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Document not found',
            error: { document: 'Document not found'}
        });
    });
});

module.exports = router;

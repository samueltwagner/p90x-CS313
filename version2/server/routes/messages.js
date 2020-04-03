var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Message = require('../models/message');

function returnError(res, error) {
    res.status(500).json({
        message: "An error occurred",
        error: error
    });
}

//GET
router.get("/", (req, res, next) => {
    //call the Message model find() function to get all
    Message.find()
        .then(messages => {
            res.status(200).json({
                message: "Message fetched Successfully!",
                messages: messages
            });
        })
        .catch(error => {
            returnError(res, error);
        });
    }
);

//POST (SAVE)
router.post("/", (req, res, next) => {
    const maxMessageId = sequenceGenerator.nextId("messages");

    const message = new Message({
        id: maxMessageId,
        subject: req.body.subject,
        msgText: req.body.msgText,
        sender: req.body.sender
    });
    message.save()
        .then(createdMessage => {
            res.status(201).json({
                message: 'Message added successfully',
                message: createdMessage
            });
        })
        .catch(error => {
            returnError(res, error);
        });
});

//PUT
router.put("/:id", (req, res, next) => {
    Message.findOne({ id: req.params.id })
    .then(message => {
        message.name = req.body.name;
        message.description = req.body.description;
        message.url = req.body.url;

        Message.updateOne({ id: req.params.id }, message)
        .then(result => {
            res.status(204).json({
                message: "Messenge updated successfully"
            })
        })
        .catch(error => {
            returnError(res, error);
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Message not found.',
            error: { message: 'Meesage not found'}
        });
    });
});

//DELETE
router.delete("/:id", (req, res, next) => {
    message.findOne({id: req.params.id })
    .then(message => {
        Message.deleteOne({ id: req.params.id})
        .then(result => {
            res.status(204).json({
                message: "Message deleted successfuly"
            });
        })
        .catch(error => {
            returnError(res, error);
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Message not found',
            error: { message: 'Message not found'}
        });
    });
});

module.exports = router;

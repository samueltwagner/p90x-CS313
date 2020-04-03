var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Contact = require('../models/contact');

function returnError(res, error) {
    res.status(500).json({
        message: "An error occurred",
        error: error
    });
}

//GET
router.get("/", (req, res, next) => {
    //call the Contact model find() function to get all
    Contact.find()
        .populate('group')
        .then(contacts => {
            res.status(200).json({
                message: "Contacts fetched Successfully!",
                contacts: contacts
            });
        })
        .catch(error => {
            returnError(res, error);
        });
    }
);

//GET BY ID
router.get("/:id", (req, res, next) => {
    //call the Contact model find() function to get all
    Contact.find()
        .populate('group')
        .then(contacts => {
            res.status(200).json({
                message: "Contacts fetched Successfully!",
                contacts: contacts
            });
        })
        .catch(error => {
            returnError(res, error);
        });
    }
);


//POST (SAVE)
router.post("/", (req, res, next) => {
    const maxContactId = sequenceGenerator.nextId("contacts");

    const contact = new Contact({
        id: maxContactId,
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
    });

    contact.save()
        .then(createdContact => {
            res.status(201).json({
                message: 'Contact added successfully',
                contact: createdContact
            });
        })
        .catch(error => {
            returnError(res, error);
        });
});

//PUT
router.put("/:id", (req, res, next) => {
    Contact.findOne({ id: req.params.id })
    .then(contact => {
        contact.name = req.body.name;
        contact.description = req.body.description;
        contact.url = req.body.url;

        Contact.updateOne({ id: req.params.id }, contact)
        .then(result => {
            res.status(204).json({
                message: "Contact updated successfully"
            })
        })
        .catch(error => {
            returnError(res, error);
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Contact not found.',
            error: { contact: 'Contact not found'}
        });
    });
});

//DELETE
router.delete("/:id", (req, res, next) => {
    Contact.findOne({id: req.params.id })
    .then(contact => {
        Contact.deleteOne({ id: req.params.id})
        .then(result => {
            res.status(204).json({
                message: "Contact deleted successfuly"
            });
        })
        .catch(error => {
            returnError(res, error);
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Contact not found',
            error: { contact: 'Contact not found'}
        });
    });
});

module.exports = router;

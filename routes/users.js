var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const User = require('../models/user');

function returnError(res, error) {
    res.status(500).json({
        message: "An error occurred",
        error: error
    });
}
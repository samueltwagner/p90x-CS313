var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Exercise_count = require('../models/exercise_count');

function returnError(res, error) {
    res.status(500).json({
        message: "An error occurred",
        error: error
    });
}
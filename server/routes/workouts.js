var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Workout = require('../models/workout');

function returnError(res, error) {
    res.status(500).json({
        message: "An error occurred",
        error: error
    });
}

//GET
router.get("/", (req, res, next) => {
    //call the Workout model find() function to get all
    Workout.find()
        .populate('group')
        .then(workouts => {
            res.status(200).json({
                message: "Workouts fetched Successfully!",
                workouts: workouts
            });
        })
        .catch(error => {
            returnError(res, error);
        });
    }
);

//GET BY ID
router.get("/:id", (req, res, next) => {
    //call the Workout model find() function to get all
    Workout.find()
        .populate('group')
        .then(workouts => {
            res.status(200).json({
                message: "Workouts fetched Successfully!",
                workouts: workouts
            });
        })
        .catch(error => {
            returnError(res, error);
        });
    }
);


//POST (SAVE)
router.post("/", (req, res, next) => {
    const maxWorkoutId = sequenceGenerator.nextId("workouts");

    // const workout = new Workout({
    //     id: maxWorkoutId,
    //     name: req.body.name,
    //     description: req.body.description,
    //     url: req.body.url
    // });

    workout.save()
        .then(createdWorkout => {
            res.status(201).json({
                message: 'Workout added successfully',
                workout: createdWorkout
            });
        })
        .catch(error => {
            returnError(res, error);
        });
});

//PUT
router.put("/:id", (req, res, next) => {
    Workout.findOne({ id: req.params.id })
    .then(workout => {
        workout.name = req.body.name;
        workout.description = req.body.description;
        workout.url = req.body.url;

        Workout.updateOne({ id: req.params.id }, workout)
        .then(result => {
            res.status(204).json({
                message: "Workout updated successfully"
            })
        })
        .catch(error => {
            returnError(res, error);
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Workout not found.',
            error: { workout: 'Workout not found'}
        });
    });
});

//DELETE
router.delete("/:id", (req, res, next) => {
    Workout.findOne({id: req.params.id })
    .then(workout => {
        Workout.deleteOne({ id: req.params.id})
        .then(result => {
            res.status(204).json({
                message: "Workout deleted successfuly"
            });
        })
        .catch(error => {
            returnError(res, error);
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Workout not found',
            error: { workout: 'Workout not found'}
        });
    });
});

module.exports = router;

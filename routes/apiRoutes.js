const db = require("../models");
const mongojs = require("mongojs");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if (error) {
                console.log("error for workouts")
            } else res.json(data);

        });
    });
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}, (error, data) => {
            if (error) {
                console.log("error creating workout");
            } else res.json(data);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        let id = req.params.id;
        let eData = req.body;
        db.Workout.updateOne({ _id: mongojs.ObjectId(id) },
            { $push: { excersises: eData } }, (error, updatedWorkout) => {
                if (error) {
                    console.log("no update error")
                } else {
                    res.json(updatedWorkout);
                }
            });

    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if (error) {
                console.log("Error finding workout range")
            }
            else {
                res.json(data);
            }

        });
    });

}
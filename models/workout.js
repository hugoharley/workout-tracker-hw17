const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: "What Is Excercise Type?"
        },
        name: {
            type: String,
            trim: true,
            required: "What is name of Excersize?"
        },
        duration: {
            type: Number,
            required: "What is Duration?"
        },
        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }

    }]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.excercises.reduce((total, excercise) => {
        return total += excercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
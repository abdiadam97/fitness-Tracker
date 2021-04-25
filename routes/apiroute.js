const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts",(req, res) => {
    Workout.create({}).then((data) => {
        res.json(data);
    });
});

router.put("/api/workouts/:id",(req, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $psh: {exercises: req.body}
        }
    ).then((data) => {
        res.json(data);
    });
});

router.get("/api/workouts",(req, res) => {
    Workout.aggregate({
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duraion"
            }
        }
    }
    ).then((data) => {
        res.json(data);
    });
});

router.get("/api/workouts/range",(req, res) => {
    Workout.aggregate({
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duraion"
            }
        }
    }
    ).sort({_id: -1}).limit(7).then((data) => {
        res.json(data);
    });
});

module.exports = router;
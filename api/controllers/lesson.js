const mongoose = require("mongoose");
const Lesson = require("../models/lesson");

exports.createLesson = (req, res, next) => {
    const lesson = new Lesson({
        _id: new mongoose.Types.ObjectId(),
        class: req.body.class,
        subject: req.body.subject
    });
    lesson.save().then(result => {
        console.log(result);
        res.status(201).json({
        message: "Lesson created",
        createdLesson: result
    });
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}

exports.getAllLesson = (req, res, next) => {
    Lesson.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json({docs});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.getALesson = (req, res, next) => {
    const id = req.params.lessonId;
    Lesson.findById(id)
    .exec()
    .then(doc => {
        console.log("From database", doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: "No Lesson with such ID"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}

exports.updateALesson = (req, res, next) => {
    /*const id = req.params.lessonId;
    Lesson.update({ _id: id })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });*/
    res.status(200).json({
        message: "Handling PATCH requests to lesson/lessonId"
    });
}

exports.deleteALesson = (req, res, next) => {
    const id = req.params.lessonId;
    Lesson.deleteOne({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Lesson deleted"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}
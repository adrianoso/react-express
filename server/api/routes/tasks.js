const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require('../middleware/check-auth');

const Task = require("../models/task");
const User = require("../models/user");

function sortTaskByDate(arr) {
    return arr.concat().sort((a,b) => {
        return new Date(a.date) - new Date(b.date);
    })
}

router.get('/', checkAuth, (req, res, next) => {
    Task.find({userId: req.userData.userId, finished: false})
        .select('name date _id finished comment')
        .exec()
        .then( tasks => {
            let sortedTasks = sortTaskByDate(tasks);

            const response = {
                count: sortedTasks.length,
                tasks: sortedTasks.map(task => {
                    return {
                        name: task.name,
                        _id: task._id,
                        date: task.date,
                        finished: task.finished,
                        comment: task.comment
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

router.get("/:userId", checkAuth,  (req, res, next) => {
    console.log('userId: ', req.userData);
    Task.find({userId: req.userData.userId})
        .exec()
        .then(docs => {
            let done = docs.filter( task => task.finished !== false);
            if (docs) {
                res.status(200).json({
                    finished: done.length,
                    all: docs.length
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', checkAuth,  (req, res, next) => {
    console.log(res.userId);
    User.findById(req.userData.userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            const task = new Task({
                _id: new mongoose.Types.ObjectId(),
                userId: req.userData.userId,
                name: req.body.name,
                date: req.body.date,
            });

            return task.save();
        })
        .then(result => {
            res.status(201).json({
                message: "Task added",
                createdTask: {
                    _id: result._id,
                    userId: result.userId,
                    name: result.name,
                    date: result.date,
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.put('/comment/:taskId', checkAuth,  (req, res, next) => {
    console.log(req.body)
    const id = req.params.taskId;
    Task.findOneAndUpdate({_id: id}, { $set: req.body}, { new: true })
        .select('name date _id finished comment')
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.put('/:taskId', checkAuth, (req, res, next) => {
    const id = req.params.taskId;
    // const updateOps = {};
    // for (const ops of req.body) {
    //     updateOps[ops.propName] = ops.value;
    // }
    Task.update({_id: id}, { $set: req.body})
        .exec()
        .then(result => {
            res.status(200).json({_id: id});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.delete('/:taskId', checkAuth, (req, res, next) => {
    const id = req.params.taskId;
    Task.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;
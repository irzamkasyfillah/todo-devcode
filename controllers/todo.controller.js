const Todo = require("../models/todo.model")

//get all
exports.findAll = async (req, res) => {
    Todo.findAll( (err, data) => {
        if (err) {
            return res.status(500).send({
                message : err.message
            });
        } else {
            res.send({ 
                total : data.length, 
                limit : 1000, 
                skip : 0, 
                data : data
            });
        }
    });
};

//get one
exports.findOne = async (req, res) => {
    Todo.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              return res.status(404).send({
                message: `Not found todo with id ${req.params.id}.`
              });
            } else {
              return res.status(500).send({
                message: `Error retrieving todo with id ${req.params.id}.`
              });
            }
        } else {
            res.send(data);
        } 
    })
}

//create
exports.create = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length == 0) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a todo
    const todo = new Todo({
        title: req.body.title,
        activity_group_id: parseInt(req.body.activity_group_id),
        is_active: parseInt(req.body.is_active),
        priority: req.body.priority
    });

    // Save Todo in the database
    Todo.create(todo, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the Todo."
            });
        } else {
            res.send(data);
        }
    });
}

//update
exports.update = async (req, res) => {
    // Validate Request
    if (Object.keys(req.body).length == 0) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Todo.updateById( req.params.id, req.body, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Todo with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Todo with id " + req.params.id
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.deleteOne = async (req, res) => {
    Todo.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found Todo with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                message: `Could not delete Todo with id ${req.params.id}`
                });
            }
        } else {
            res.send({ message: `Todo was deleted successfully!` });
        }
    })
}
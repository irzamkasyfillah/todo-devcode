const Todo = require("../models/todo.model")

//get all
exports.findAll = async (req, res) => {
    Todo.findAll( req.query.activity_group_id, (err, data) => {
        if (err) {
            return res.status(500).send({
                message : err.message
            });
        } else {
            res.send({ 
                // total : data.length, 
                // limit : 1000, 
                // skip : 0, 
                status : "Success", 
                message : "Success", 
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
                status : "Not Found",
                message: `Todo with ID ${req.params.id} Not Found`,
              });
            } else {
              return res.status(500).send({
                message: `Error retrieving todo with id ${req.params.id}.`
              });
            }
        } else {
            res.send({
                status : "Success", 
                message : "Success", 
                data : data
            });
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

    if (req.body.title == null) {
        return res.status(400).send({
            status : "Bad Request",
            message : "title cannot be null"
        })
    }

    if (req.body.activity_group_id == null) {
        return res.status(400).send({
            status : "Bad Request",
            message : "activity_group_id cannot be null"
        })
    }
    

    // Create a todo
    const todo = new Todo({
        title: req.body.title,
        activity_group_id: parseInt(req.body.activity_group_id),
        is_active: req.body.is_active || true,
        priority: req.body.priority || "very-high",
        // created_at: new Date().toISOString(),
        // updated_at: new Date().toISOString()
    });

    
    // Save Todo in the database
    await Todo.create(todo, (err, data) => {
        if (err) {
            return res.status(400).send({
                message: err.message || "Some error occurred while creating the Todo."
            });
        } else {
            res.status(201).send({
                status : "Success",
                message : "Success",
                data : data
            });
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
            if (err.kind == "not_found") {
                return res.status(404).send({
                    status : "Not Found" ,
                    message: `Todo with ID ${req.params.id} Not Found`
                });
            } else {
                return res.status(500).send({
                    message: `Error updating Todo with id ${req.params.id}`
                });
            }
        } else {
            res.send({
                status : "Success", 
                message : "Success", 
                data : data
            });
        }
    });
};

exports.deleteOne = async (req, res) => {
    Todo.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).send({
                    status: "Not Found",
                    message: `Todo with ID ${req.params.id} Not Found`
                });
            } else {
                return res.status(500).send({
                    message: `Could not delete Todo with id ${req.params.id}`
                });
            }
        } else {
            res.send({ 
                status : "Success",
                message: `Todo was deleted successfully!`,
                data : {}
            });
        }
    })
}
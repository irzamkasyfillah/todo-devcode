const Activity = require("../models/activity.model")

//get all
exports.findAll = async (req, res) => {
    Activity.findAll( (err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message
            })
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
    Activity.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found activity with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                message: `Error retrieving activity with id ${req.params.id}.`
                });
            }
        } else {
            res.send(data);
        } 
    });
}

//create
exports.create = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length == 0) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const activity = new Activity({
        title: req.body.title,
        created_at : new Date().toISOString()
    });

    // Save Tutorial in the database
    Activity.create(activity, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
        else res.send(data);
    });
}

//update
exports.update = async (req, res) => {
    // Validate Request
    if (Object.keys(req.body).length == 0) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    Activity.updateById( req.params.id, {...req.body, updated_at : new Date().toISOString()}, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Activity with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Activity with id " + req.params.id
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.deleteOne = async (req, res) => {
    Activity.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found Activity with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                message: `Could not delete Activity with id ${req.params.id}`
                });
            }
        } else {
            res.send({ message: `Activity was deleted successfully!` });
        }
    })
}
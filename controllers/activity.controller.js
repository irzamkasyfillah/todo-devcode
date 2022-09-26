const Activity = require("../models/activity.model")

//get all
exports.findAll = async (req, res) => {
    Activity.findAll( (err, data) => {
        if (err) {
            return res.status(500).send({
                message : err.message
            })
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
    Activity.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).send({
                    status: "Not Found",
                    message: `Activity with ID ${req.params.id} Not Found`
                });
            } else {
                return res.status(500).send({
                    message: `Error retrieving activity with id ${req.params.id}.`
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

    // Create a Tutorial
    const activity = new Activity({
        title: req.body.title,
        email: req.body.email,
        // created_at : new Date().toISOString(),
        // updated_at : new Date().toISOString()
    });

    // Save Tutorial in the database
    Activity.create(activity, (err, data) => {
        if (err){
            return res.status(400).send({
                message: err.message || "Some error occurred while creating the Tutorial."
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

    // Activity.updateById( req.params.id, {...req.body, updated_at : new Date().toISOString()}, (err, data) => {
    Activity.updateById( req.params.id, req.body, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                return res.status(404).send({
                    status : "Not Found",
                    message: `Activity with ID ${req.params.id} Not Found`
                });
            } else {
                return res.status(500).send({
                    message: `Error updating Activity with id ${req.params.id}.`
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
    Activity.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).send({
                    status: "Not Found",
                    message: `Activity with ID ${req.params.id} Not Found`
                });
            } else {
                return res.status(500).send({
                    message: `Could not delete Activity with id ${req.params.id}`
                });
            }
        } else {
            res.send({ 
                status: "Success",
                message: `Activity was deleted successfully!`,
                data : {}
            });
        }
    })
}
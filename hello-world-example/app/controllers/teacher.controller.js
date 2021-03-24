const db = require("../models");
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

// Create and Save a new Teacher
exports.create = (req, res) => {

  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a teacger
  const teacher = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    finalized: req.body.finalized ? req.body.finalized : false
  };

  // Save Tutorial in the database
  Teacher.create(teacher)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the teacher."
      });
    });
};

// Retrieve all Teachers from the database.
exports.findAll = (req, res) => {

  const firstName = req.query.firstName;
  var condition = firstName ? { firstName: { [Op.like]: `%${firstName}%` } } : null;

  Teacher.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    });
};

// Find a single Teacher with an id
exports.findOne = (req, res) => {
  
};

// Update a Teacher by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Teacher with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Teacher from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all finalized Teachers
exports.findAllFinalized = (req, res) => {
  
};
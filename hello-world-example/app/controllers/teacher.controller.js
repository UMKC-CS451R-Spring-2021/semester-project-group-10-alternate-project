const {teachers: Teacher} = require("../models/teacher.model.js");
const {Op} = require("sequelize");

module.exports = function(sequelize) {
  // Create and Save a new Teacher
  async function create(req, res) {
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
      finalized: !!req.body.finalized
    };
  
    try {
      // Save Tutorial in the database
      const data = await Teacher.create(teacher);
      res.send(data)
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the teacher."
      });
    }
  }

  // Retrieve all Teachers from the database.
  async function findAll(req, res) {
    const firstName = req.query.firstName;
    let query = { where: null };
    if (firstName) {
      query.where = { 
        firstName: { 
          [Op.like]: `%${firstName}%` 
        } 
      };
    }
    try {
      const data = await Teacher.create(query);
      res.send(data)
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    }
  }
  // Find a single Teacher with an id
  async function findOne(req, res) {
    
  }

  // Update a Teacher by the id in the request
  async function update(req, res) {
    
  }

  // Delete a Teacher with the specified id in the request
  async function deleteOne(req, res) {
    
  }

  // Delete all Teacher from the database.
  async function deleteAll(req, res) {
    
  }

  // Find all finalized Teachers
  async function findAllFinalized(req, res) {
    
  }

  return {
    create,
    findAll,
    findOne,
    update,
    deleteOne,
    deleteAll,
    findAllFinalized
  }
}
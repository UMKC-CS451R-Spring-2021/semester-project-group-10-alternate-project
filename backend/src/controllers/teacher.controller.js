const {Op} = require("sequelize");

/**
 * 
 * @param {*} sequelize 
 * @param {import("sequelize").ModelCtor<import("sequelize").Model<any, any>>} Teacher 
 */
module.exports = function(sequelize, Teacher) {
  /**
   * Create and Save a new Teacher
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  async function create(req, res) {
    // Validate request
    if (!req.body.firstName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a teacher
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

  /**
   * Retrieve all Teachers from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
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
      const data = await Teacher.findAll(query);
      res.send(data)
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    }
  }

  /**
   * Find a single Teacher with an id
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  async function findOne(req, res) {
    
  }


  /**
   * Update a Teacher by the id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  async function update(req, res) {
    
  }

  /**
   * Delete a Teacher with the specified id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  async function deleteOne(req, res) {
    
  }


  /**
   * Delete all Teacher from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  async function deleteAll(req, res) {
    
  }

  
  /**
   * Find all finalized Teachers
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
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
const Express = require('express');
const {Op} = require("sequelize");
/**
 * 
 * @param {*} sequelize 
 * @param {import("sequelize").ModelCtor<import("sequelize").Model<any, any>>} Teacher 
 */
module.exports = (sequelize, Teacher) => {
  const router = Express.Router();
  
  /**
   * Create and Save a new Teacher
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.post("/", async function create(req, res) {
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
  });

  /**
   * Retrieve all Teachers from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/", async function findAll(req, res) {
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
  });

  /**
   * Find all finalized Teachers
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/finalized", async function findAllFinalized(req, res) {
    res.sendStatus(501);
  });

  /**
   * Find a single Teacher with an id
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/:id",   async function findOne(req, res) {
    if (isNaN(Number(req.params.id))) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const id = req.params.id;
    try {
      const response = await sequelize.query('CALL selectTeacherId(:id)', { replacements: {id}});
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    }
  });


  /**
   * Update a Teacher by the id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.put("/:id", async function update(req, res) {
    res.sendStatus(501);
  });

  /**
   * Delete a Teacher with the specified id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/:id",  async function deleteOne(req, res) {
    res.sendStatus(501);
  });

  /**
   * Delete all Teacher from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/", async function deleteAll(req, res) {
    res.sendStatus(501);
  });
  return router;
};
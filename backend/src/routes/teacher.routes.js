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
      teacherId: req.body.teacherId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      finalized: !!req.body.finalized,
      tenured: false
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
    const _ = req.params.teacherId;
    try {
      const response = "Stored procedure for getting all finalized teachers.";
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semesters."
      });
    }
  });

  /**
   * Find a single Teacher with an id
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/id/:teacherId",   async function findOne(req, res) {
    const teacherId = req.params.teacherId;
    if (isNaN(Number(teacherId))) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    try {
      const response = await sequelize.query('CALL selectTeacherId(:id)', { replacements: {teacherId}});
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    }
  });

  /**
   * Find a single Teacher with provided name
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/name/:teacherName",   async function findOne(req, res) {
    const teacherName = req.params.teacherName;
    if (isNaN(Number(teacherName))) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    try {
      const response = await sequelize.query('CALL selectTeacherByName(:name)', { replacements: {teacherName}});
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
  router.put("/id/:teacherId", async function update(req, res) {
    const _ = req.params.teacherId;
    try {
      const response = "Stored procedure for updating teacher.";
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semesters."
      });
    }
  });

  /**
   * Delete a Teacher with the specified id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/id/:teacherId",  async function deleteOne(req, res) {
    const _ = req.params.teacherId;
    try {
      const response = "Stored procedure for deleting a teacher.";
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semesters."
      });
    }
  });

  /**
   * Delete all Teacher from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/", async function deleteAll(req, res) {
    const _ = req.params.teacherId;
    try {
      const response = "Stored procedure for deleting all teachers.";
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semesters."
      });
    }
  });
  return router;
};
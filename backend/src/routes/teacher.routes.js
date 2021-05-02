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
      // Save teacher in the database
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
    const teacherId = req.params.teacherId;
    resposne = "";
    let query = { where: null };
    if(teacherId){
      response = await sequelize.query('CALL selectTeacherById(:id)', { replacements: {id}});
    }
    else if (firstName) {
      query.where = { 
        firstName: { 
          [Op.like]: `%${firstName}%` 
        } 
      };
    }
    else if (lastName) {
      response = await sequelize.query('CALL selectTeacherByLastName(:lastName)', 
        { replacements: {lastName}});
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
    try {
      const data = await sequelize.query('CALL getFinalizedTeachers');
      res.send(data)
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    }
  });


   /**
   * Retrieve preferred courses
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/preferred/", async function findPreferredCourses(req, res) {
    const teacherId = req.query.teacherId;
    const lastName = req.query.lastName;
    response ="";

    if(teacherId){
      response = await sequelize.query('CALL getTeacherPreferredCoursesById(:teacherId)', 
        { replacements: {teacherId}});
    }
    else if(lastName){
      response = await sequelize.query('CALL getTeacherPreferredCoursesByLastName(:lastName)', 
        { replacements: {lastName}});
    }
    else{
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    try {
  
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    }
  });

    /**
   * Retrieve preferred courses
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/availability/:id", async function findAvailabilityById(req, res) {
     if (isNaN(Number(req.params.id))) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const id = req.params.id;
    try {
      const response = await sequelize.query('CALL getTeacherAvailabilityById(:id)', 
        { replacements: {id}});
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    }
  });
     /**
   * Retrieve availability
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/availability/:lastName", async function findAvailabilityByLastName(req, res) {
     if (isNaN(Number(req.params.lastName))) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const lastName = req.params.lastName;
    try {
      const response = await sequelize.query('CALL getAvailabilityByLastName(:lastName)', 
        { replacements: {lastName}});
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
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
    const teacherId = req.query.teacherId;
    const lastName = req.query.lastName;
    resposne = "";
    let query = { where: null };
    if(teacherId){
      response = await sequelize.query('CALL selectTeacherById(:teacherId)',
       { replacements: {teacherId}});
    }
    else if (lastName) {
      response = await sequelize.query('CALL selectTeacherByLastName(:lastName)', 
        { replacements: {lastName}});
    }
    else{
      response = await sequelize.query('CALL selectAllTeachers');
    }

    try {
      
      res.send(response)
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
   * Retrieve nonpreferred courses
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/nonpreferred/", async function findNonPreferredCourses(req, res) {
    const teacherId = req.query.teacherId;
    const lastName = req.query.lastName;
    response ="";

    if(teacherId){
      response = await sequelize.query('CALL getTeacherNonPreferredCoursesById(:teacherId)', 
        { replacements: {teacherId}});
    }
    else if(lastName){
      response = await sequelize.query('CALL getTeacherNonPreferredCoursesByLastName(:lastName)', 
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


  router.get("/availability/", async function findAvailability(req, res) {
    const teacherId = req.query.teacherId;
    const lastName = req.query.lastName;
    response ="";

    if(teacherId){
      response = await sequelize.query('CALL getTeacherAvailabilityById(:teacherId)', 
        { replacements: {teacherId}});
    }
    else if(lastName){
      response = await sequelize.query('CALL getTeacherAvailabilityByLastName(:lastName)', 
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
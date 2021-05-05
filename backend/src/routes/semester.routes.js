const Express = require('express');
const {Op} = require("sequelize");
/**
 * 
 * @param {*} sequelize 
 * @param {import("sequelize").ModelCtor<import("sequelize").Model<any, any>>} Teacher 
 */
module.exports = (sequelize, Semester) => {
  const router = Express.Router();
  
  /**
   * Create and Save a new Semester
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.post("/", async function create(req, res) {
    // Validate request
    const semesterId = req.query.semesterId
    if (!semesterId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
  
    try {
      // Save Semester in the database
      // replace data with await stored procedures to create semester
      // also create semesterCourses and SemesterTeacher
      const data =  await sequelize.query('CALL insertNewSemester(:semesterId)', { replacements: {semesterId}});
      
      res.send(data)
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the semester."
      });
    }
  });

   /**
   * Retrieve all Semesters from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/", async function findAll(req, res) {
    const semesterId = req.query.semesterId;
    response = "";

    if(semesterId){
      response = await sequelize.query('CALL getSemesterById(:semesterId)',
       { replacements: {semesterId}});
    }
    else{
      response = await sequelize.query('CALL GetAllSemesters');
    }
 
    try {
    res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all semesters."
      });
    }
  });


 /**
   * Find a single semester with an id
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/courses/",   async function findCourses(req, res) {
    const semesterId = req.query.semesterId;
    if (!semesterId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    try {
      //replace response with:
      // await sequelize.query('CALL *select semester by id(:id)*', { replacements: {id}})
      const response = await sequelize.query('CALL getCoursesForSemester(:semesterId)',
       { replacements: {semesterId}});
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semesters."
      });
    }
  });


  /**
   * Update a semester by the id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.put("/:id", async function update(req, res) {
    res.sendStatus(501);
  });

  /**
   * Delete a semester with the specified id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/:id",  async function deleteOne(req, res) {
    res.sendStatus(501);
  });

  /**
   * Delete all semesters from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/", async function deleteAll(req, res) {
    res.sendStatus(501);
  });
  return router;
};
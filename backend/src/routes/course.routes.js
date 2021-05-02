const Express = require('express');
const {Op} = require("sequelize");
/**
 * 
 * @param {*} sequelize 
 * @param {import("sequelize").ModelCtor<import("sequelize").Model<any, any>>} Course 
 */
module.exports = (sequelize, Course) => {
  const router = Express.Router();
  
  /**
   * Create and Save a new course
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.post("/", async function create(req, res) {
    // Validate request
    if (!req.body.courseName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a course
    const course = {
      courseId: req.body.courseId,
      courseName: req.body.courseName
    };
  
    try {
      // Save course in the database
      const data = sequelize.query('CALL insertNewCourse(:courseId :courseTitle)',
       { replacements: {courseId, courseTitle} });
      // this is where we would call a stored procedure
      // or something to create a course

      res.send(data);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course."
      });
    }
  });

  /**
   * Retrieve all Courses from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.get("/", async function findAll(req, res) {
    const courseName = req.query.courseName;
    const courseId = req.query.courseId;
    response = "";
    if (courseName) {
      // if searching for all courses matching a name
      // Replace response with
      // await sequelize.query('CALL *stored procedure to select by name*(:name)', { replacements: {name}});

      response = await sequelize.query('CALL getCoursesLikeName(:courseName)', 
        { replacements: {courseName}});
      
    }
    else if (courseId){
      response = await sequelize.query('CALL getCoursesById(:courseId)', { replacements: {courseId}});
    }
    else{
      //  Replace response with 
      // await sequelize.query('CALL *stored procedure to select all*')
      response = await sequelize.query('CALL getCourses');
    }
    try {
    res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all courses."
      });
    }
  });


  /**
   * Update a Course by the id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.put("/:id", async function update(req, res) {
    res.sendStatus(501);
  });

  /**
   * Delete a Course with the specified id in the request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/:id",  async function deleteOne(req, res) {
    res.sendStatus(501);
  });

  /**
   * Delete all Course from the database.
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  router.delete("/", async function deleteAll(req, res) {
    res.sendStatus(501);
  });
  return router;
};
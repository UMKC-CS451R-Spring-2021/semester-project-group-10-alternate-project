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
      //const data = await Course.create(course);
      // this is where we would call a stored procedure
      // or something to create a course

      res.send("This is the create course stored procedure");
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
    response = "hello";
    if (courseName) {
      // if searching for all courses matching a name
      // Replace response with
      // await sequelize.query('CALL *stored procedure to select by name*(:name)', { replacements: {name}});

      response = "Stored procedure results for all courses where name like";
      
    }
    else{
      //  Replace response with 
      // await sequelize.query('CALL *stored procedure to select all*')
      response = "Stored procedure results for all courses";
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
   * Find a single Course with an id
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
      //replace response with:
      // await sequelize.query('CALL *select course by id(:id)*', { replacements: {id}})
      const response = "Stored procedure results from select course by id.";
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
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
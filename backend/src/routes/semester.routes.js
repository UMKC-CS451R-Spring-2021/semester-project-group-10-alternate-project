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
    if (!req.body.semesterId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a semester
    const semester = {
      semesterId: req.body.semesterId
    };
  
    try {
      // Save Semester in the database
      // replace data with await stored procedures to create semester
      // also create semesterCourses and SemesterTeacher
      const data = "Result of creating semester";
      
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
    const semesterName = req.query.semesterName;
    response = "";
    if (semesterName) {
      // if searching for all semester matching a name
      // Replace response with
      // await sequelize.query('CALL *stored procedure to select by name*(:name)', { replacements: {name}});

      response = "Stored procedure results for all semesters where name like";
      res.send(response);
      
    }
    else{
      //  Replace response with 
      // await sequelize.query('CALL *stored procedure to select all*')
      response = "Stored procedure results for all semesters";
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
      // await sequelize.query('CALL *select semester by id(:id)*', { replacements: {id}})
      const response = "Stored procedure results from select semester by id.";
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
const Express = require('express');
/**
 * 
 * @param {import('express').Application} app 
 * @param {import("../../types/teacher.controller").TeacherController} teachers 
 */
module.exports = (app, teachers) => {
  const router = Express.Router();
  
  // Create a new Teacher
  router.post("/", teachers.create);

  // Retrieve all Teacher
  router.get("/", teachers.findAll);

  // Retrieve all published Teacher
  router.get("/finalized", teachers.findAllFinalized);

  // Retrieve a single Teacher with id
  router.get("/:id", teachers.findOne);

  // Update a Teachers with id
  router.put("/:id", teachers.update);

  // Delete a Teachers with id
  router.delete("/:id", teachers.deleteOne);

  // Delete all Teachers
  router.delete("/", teachers.deleteAll);

  app.use('/api/teachers', router);
};
module.exports = function(sequelize, app) {
    const TeacherModel = require("./models/teacher.model.js")(sequelize);
    const TeacherController = require("./controllers/teacher.controller.js")(sequelize, TeacherModel);
    require("./routes/teacher.routes")(app, TeacherController);
}
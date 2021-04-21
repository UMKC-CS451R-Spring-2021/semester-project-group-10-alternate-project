module.exports = function(sequelize, app) {
    const TeacherModel = require("./models/teacher.model.js")(sequelize);
    const TeacherRouter = require("./routes/teacher.routes")(sequelize, TeacherModel);
    app.use('/api/teachers', TeacherRouter);
}
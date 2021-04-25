module.exports = function(sequelize, app) {
    const CourseRouter = require("./routes/course.routes")(sequelize);
    app.use('/api/courses', CourseRouter);
}
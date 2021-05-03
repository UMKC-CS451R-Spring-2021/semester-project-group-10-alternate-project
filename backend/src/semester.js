module.exports = function(sequelize, app) {
    const SemesterRouter = require("./routes/semester.routes")(sequelize);
    app.use('/api/semesters', SemesterRouter);
}
const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");
const {DB, USER, PASSWORD, HOST, dialect, pool} = require("./app/config/db.config.js");


const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  operatorsAliases: false,

  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle
  }
});

sequelize.sync();

const TeacherModel = require("./app/models/teacher.model.js")(sequelize);
const TeacherController = require("./app/controllers/teacher.controller.js")(sequelize, TeacherModel);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to capstone's application." });
});


require("./app/routes/teacher.routes")(app, TeacherController);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
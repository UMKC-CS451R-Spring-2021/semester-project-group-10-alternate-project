// NOTE: for testing https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
const {Sequelize} = require("sequelize");
const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = require('./config/cors.config');

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const {DB, USER, PASSWORD, HOST, dialect, pool} = require("./config/db.config.js");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle
  }
});

sequelize.sync();

// simple route
app.get("/", (_, res) => {
  res.json({ message: "Welcome to capstone's application." });
});

require("./teacher.js")(sequelize, app);

app.use((_, res) => {
  res.sendStatus(404);
});

module.exports = {
  server: app,
  sequelize: sequelize
};
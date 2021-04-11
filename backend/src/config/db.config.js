// const tunnel = require('tunnel-ssh');
module.exports = {
  HOST: "69.247.200.43",
  port: "3306",
  USER: "capstone",
  PASSWORD: "secret",
  DB: "testing",
  dialect: "mysql",
  pool: {
    max: 6,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
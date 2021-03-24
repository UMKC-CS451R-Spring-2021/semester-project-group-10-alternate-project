module.exports = {
  HOST: "localhost",
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
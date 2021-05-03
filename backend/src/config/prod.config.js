module.exports = {
    cors: {
        origin: "http://localhost:3000"
    },
    db: {
        HOST: "69.247.200.43",
        USER: "capstone",
        PASSWORD: "secret",
        DB: "testing",
        /** @type {import("sequelize").Dialect} */
        // @ts-ignore
        dialect: "mysql",
        pool: {
          max: 6,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
    }
};

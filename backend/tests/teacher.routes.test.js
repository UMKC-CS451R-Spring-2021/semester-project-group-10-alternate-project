

const request = require('supertest');
const config = require('./config/test.config');
const {server, sequelize} = require('../src/server.js')(config);
const {describe, it, expect, beforeEach, afterAll} = require("@jest/globals");

describe('Post Endpoints', () => {
    
    beforeEach(async (done) => {
        // reload the database
        await sequelize.query('DELETE FROM Teachers;');
        await sequelize.query(`
        INSERT into Teachers (teacherId, firstName,middleName, lastName, tenured, Notes, finalized)
        VALUES 
        (0,"Monserrate","D","Brownfield",0,"",1),
        (1,"Cyndi","W","Gowers",0,"",0), 
        (2,"Jeannette","E","Dussault",0,"",1),
        (3,"Golden","W","Freiseis",0,"",0),
        (4,"Ariane","D","Frix",0,"",1);
        `);
        done();
    });

    it("should create a new teacher", async (done) => {
        const res = await request(server)
            .post('/api/teachers/')
            .send({
                teacherId: 99999,
                firstName: "Bob",
                lastName: "Bobber",
                finalized: false
            });
        expect(res.status).toEqual(200);
        expect(res.body.firstName).toEqual("Bob");
        expect(res.body.lastName).toEqual("Bobber");
        expect(res.body.finalized).toBeFalsy();
        done()
    });

    afterAll(async (done) => {
        await sequelize.close();
        done()
    })
});

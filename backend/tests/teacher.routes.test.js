

const request = require('supertest');
const {server, sequelize} = require('../src/server.js');
const {describe, it, expect, afterAll} = require("@jest/globals");

describe('Post Endpoints', () => {
    it("should create a new teacher", async (done) => {
        const res = await request(server)
            .post('/api/teachers/')
            .send({
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
    afterAll(done => {
        sequelize.close();
        done()
    })
});

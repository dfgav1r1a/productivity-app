const mongoose = require('mongoose');
const testRequest = require('supertest');

const app = require('../api');

require('dotenv').config();

//Connecting to DB before the test and disconnecting after the test
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
    await mongoose.connection.close();
});

//Test code to get activities
describe('GET /api/activities', () => {
    it('should get all the activities', async () => {
        const token = await testRequest(app).post('/api/auth/login').send({
            email: process.env.EMAIL,
            password: process.env.PASSWORD,
        });
        
        const response = await testRequest(app)
            .get('/api/activities')
            .set({
                Authorization: `bearer ${token.body.token}`,
                'Content-Type': 'application/json',
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

//Test code to create new activities
describe('POST /api/activity', () => {
    it('should add new activities', async () => {
        const token = await testRequest(app).post('/api/auth/login').send({
            email: process.env.EMAIL,
            password: process.env.PASSWORD,
        });

        const response = await testRequest(app)
            .post('/api/activity')
            .send({
                name: 'Write Unit Testing',
                time: '4:00pm',
            })
            .set({
                Authorization: `bearer ${token.body.token}`,
                'Content-Type': 'application/json',
            });

        expect(response.statusCode).toBe(201);
    });
});

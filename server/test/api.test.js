const request = require('supertest');
// import server
const server = require("../server");

describe('API server', () => {
    let api;
    

    beforeAll(() => {

        api = server.listen(5000, () =>
            console.log('server running on port 5000')
        );
    });

    afterAll((done) => {

        console.log('stopping test server');
        api.close(done);
    });

    

    it('responds to get /users with status 200', (done) => {
        request(api).get('/users').expect(200, done);
    });


    it('retrieves a user by name', (done) => {
        request(api)
            .get('/users/Dylan')
            .expect(200)
            .expect([
                {
                    "id": "60d0fe4f5311236168a109fd",
                    "title": "mr",
                    "firstName": "Dylan",
                    "lastName": "Vasquez",
                    "picture": "https://randomuser.me/api/portraits/med/men/66.jpg"
            }], done);
    });

    it('responds to a unknown user name with a 404', (done) => {
        request(api).get('/users/jkkja').expect(404).expect({}, done);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/notavalidroute').expect(404, done);
    });

    
});
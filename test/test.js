const request = require('supertest');
const { app, server } = require('../src/index');

describe('GET /', () => {
  it('responds with Hello from my CI/CD pipeline with GitHub!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello from my CI/CD pipeline with GitHub!');
  });
  
  // Close the server after all tests
  afterAll(done => {
    server.close(done);
  });
});
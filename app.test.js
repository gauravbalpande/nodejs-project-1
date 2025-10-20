const request = require('supertest');
const { app, server } = require('./app');

describe('API Tests', () => {
  afterAll(() => {
    server.close();
  });

  test('GET / should return success message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});
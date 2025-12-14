const request = require("supertest");
const app = require("../app");

describe("Health Check", () => {
  it("responds with healthy status", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
  });
});

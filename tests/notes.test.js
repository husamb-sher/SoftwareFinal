const request = require("supertest");
const app = require("../app");

describe("Notes API", () => {
  it("returns an array of notes", async () => {
    const res = await request(app).get("/notes");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("adds a note", async () => {
    const res = await request(app)
      .post("/notes")
      .send({ text: "hello test" });

    expect(res.statusCode).toBe(200);
    expect(res.body.added).toBe("hello test");
  });
});

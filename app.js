const express = require("express");
const app = express();
app.use(express.json());

// simple in-memory notes list
let notes = ["first note"];

// health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", environment: process.env.NODE_ENV || "development" });
});

// get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// add note
app.post("/notes", (req, res) => {
  const { text } = req.body;
  notes.push(text);
  res.json({ added: text });
});

module.exports = app;

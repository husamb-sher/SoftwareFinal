const express = require("express");
const app = express();
app.use(express.json());

// simple in-memory notes list
let notes = ["first note"];

// health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    environment: process.env.NODE_ENV || "development"
  });
});

// get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// add new note
app.post("/notes", (req, res) => {
  const { text } = req.body;
  notes.push(text);
  res.json({ added: text });
});

// choose port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;

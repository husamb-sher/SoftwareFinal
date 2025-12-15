const express = require("express");
const app = express();
app.use(express.json());

// simple in-memory notes list
let notes = ["first note", "adding some additional notes", " adding one more note", "remember to change the car oil", "remember to buy christmas presents"];
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

// delete note by index
app.delete("/notes/:id", (req, res) => {
  const index = parseInt(req.params.id);

  if (isNaN(index) || index < 0 || index >= notes.length) {
    return res.status(404).json({ error: "note not found" });
  }

  const deleted = notes.splice(index, 1);
  res.json({ deleted: deleted[0] });
});

module.exports = app;

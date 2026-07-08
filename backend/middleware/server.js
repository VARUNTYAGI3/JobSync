const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Middleware Executed");
  next();
});

app.get("/jobs", (req, res) => {
  res.send("All Jobs");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
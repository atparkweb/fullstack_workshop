const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/build")));

const port = process.env.PORT || 4000;

app.get("/api", (req, res) => {
  const users = [
    { id: 1, name: "Andy" },
    { id: 2, name: "Jay" },
    { id: 3, name: "Michael" }
  ]
  res.json(users);
});

app.get("/api/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
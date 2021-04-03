const express = require("express");
const { mockData } = require("./mockData");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("API Works!");
});

app.get("/mock", (req, res) => {
  res.send(mockData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

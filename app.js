const express = require("express");
const cors = require("cors");
const { mockData } = require("./mockData");

const app = express();
const port = process.env.port || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Works!");
});

app.get("/github", (req, res) => {
  res.send("https://github.com/ismaelash/node-api");
});

app.get("/mock", (req, res) => {
  res.send(mockData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// server.js
const express = require("express");
const bodyParser = require("body-parser");
const svgCaptcha = require("svg-captcha");

const app = express();
app.use(bodyParser.json());

let userBalance = 0;
let currentCaptcha = "";

app.get("/api/captcha", (req, res) => {
  const captcha = svgCaptcha.create();
  currentCaptcha = captcha.text;
  res.json({ captcha: captcha.data });
});

app.post("/api/validate", (req, res) => {
  const { userInput } = req.body;
  if (userInput === currentCaptcha) {
    userBalance += 1;
    res.json({ valid: true, newBalance: userBalance });
  } else {
    res.json({ valid: false });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

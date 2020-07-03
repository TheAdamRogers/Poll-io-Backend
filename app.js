const express = require("express");
const bodyParser = require("body-parser");

const patientRoute = require("./routes/patientRoute");
const questionRoute = require("./routes/questionRoute");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("<h1>Poll-IO Backend Version 1.0.0</h1>");
});

app.use("/patient", patientRoute);
app.use("/question", questionRoute);

app.listen(3500);

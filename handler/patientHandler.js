const express = require("express");
const paitentSchema = require("../schema/patientSchema");
const SQL = require("../config/mysql");

const patientPost = (req, res, next) => {
  const data = req.body;
  console.log("data", data);

  const { value, error } = paitentSchema.validate(data);
  if (error != undefined) {
    res.send(error.details[0].message);
    console.log(error.details[0].message);
  } else {
    SQL.query(
      "INSERT INTO post_symposium1.`PatientInfo` \
            (PatientNHSNum, PatientFName, PatientSName, PatientAge, PatientGender, PatientCaseDetails) \
            VALUES (?, ?, ?, ?, ?, ?)",
      [
        value.NHSNum,
        value.Forename,
        value.Surname,
        value.Age,
        value.Gender,
        value.Details
      ],
      (error, result) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          res.send("Sent, patient ID: ", value.NHSNum);
        }
      }
    );
  }
};

const getPatientData = (request, res) => {
  // Patient returns list of all patients.
  SQL.query("SELECT * FROM PatientInfo", (errs, rows, fields) => {
    //console.log(rows);
    res.send(rows);
  });
};

const getPatientByID = (request, res) => {
  // patient returns patient with specific ID.
  SQL.query(
    "SELECT * FROM PatientInfo WHERE PatientNHSNum = ?",
    request.params.id,
    (errs, rows, fields) => {
      console.log(rows.length);
      if (rows.length == 0) {
        res.send("No Patient with id:" + request.params.id + " exist.");
      } else {
        res.send(rows);
      }
    }
  );
};

module.exports = { patientPost, getPatientData, getPatientByID };

const express = require("express");
const SQL = require("../config/mysql");
const questionSchema = require("../schema/questionSchema");

const postQuestion = (request, res, next) => {
  const data = request.body;
  const { value, error } = questionSchema.validate(data);
  if (error != undefined) {
    res.send(error.details[0].message);
    console.log(error.details[0].message);
  } else {
    SQL.query(
      "INSERT INTO post_symposium1.`QuestionArchive` (QuestionTitle, Password, PatientNHSNo, Response1, Response2, Response3, Response4) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        value.QuestionTitle,
        value.Password,
        value.PatientNHSNo,
        value.Response1,
        value.Response2,
        value.Response3,
        value.Response4
      ],
      (error, result) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(result);
          res.send("Sent, Question ID: ");
        }
      }
    );
  }
};

const getQuestionsData = (request, res) => {
  SQL.query("SELECT * FROM QuestionArchive", (errs, rows, fields) => {
    console.log(rows);
    res.send(rows);
  });
};

const getQuestionByID = (request, res) => {
  SQL.query(
    "SELECT * FROM QuestionArchive WHERE QuestionID = ?",
    request.params.id,
    (errs, rows, fields) => {
      if (rows.length == 0) {
        res.send("No Question with id:" + request.params.id + " exist.");
      } else {
        if (rows[0].Password == "") {
          res.send(rows[0]);
        } else {
          if (request.query.password == rows[0].Password) {
            res.send(rows[0]);
          } else {
            res.send("Password incorrect");
          }
        }
      }
    }
  );
};

module.exports = { getQuestionsData, getQuestionByID, postQuestion };

const express = require("express");
const router = express.Router();
const {
  getQuestionsData,
  getQuestionByID,
  postQuestion
} = require("../handler/questionHandler");

router.get("/", getQuestionsData);

router.get("/:id", getQuestionByID);

router.post("/", postQuestion);

// router.post("/update", updateQuestion);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  patientPost,
  getPatientData,
  getPatientByID
} = require("../handler/patientHandler");

router.get("/", getPatientData);

router.get("/:id", getPatientByID);

router.post("/", patientPost);

module.exports = router;

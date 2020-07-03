const Joi = require("@hapi/joi");

const questionSchema = Joi.object({
  QuestionTitle: Joi.string()
    .max(100)
    .required(),
  Password: Joi.string().max(25),
  PatientNHSNo: Joi.number().required(),
  Response1: Joi.string().required(),
  R1VoteCount: Joi.number(),
  Response2: Joi.string().required(),
  R2VoteCount: Joi.number(),
  Response3: Joi.string().allow(""),
  R3VoteCount: Joi.number(),
  Response4: Joi.string().allow(""),
  R4VoteCount: Joi.number(),
  TotalVoteCount: Joi.number()
});

module.exports = questionSchema;

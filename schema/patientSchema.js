const Joi = require('@hapi/joi');

const patientSchema = Joi.object({
    NHSNum: Joi.number().required(),
    Forename: Joi.string().min(1).max(30).required(),
    Surname: Joi.string().min(1).max(30).required(),
    Age: Joi.number().integer(),
    Gender: Joi.string(),
    Details: Joi.string().max(500).required()
});

module.exports = patientSchema;
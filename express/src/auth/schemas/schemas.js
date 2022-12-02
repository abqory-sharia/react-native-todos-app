const Joi = require("joi");

exports.Login = Joi.object({
  // username: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(99).required(),
});

exports.token = Joi.string().guid({ version: "uuidv4" });

const Joi = require("joi");

exports.Register = {
  body: Joi.object()
    .key({
      email: Joi.string().email().required(),
      username: Joi.string().min(5).required(),
      password: Joi.string().min(6).required(),
    })
    .strict(),
};

exports.Login = {
  body: Joi.object()
    .key({
      email: Joi.string().email().require(),
      password: Joi.string().min(6).require(),
    })
    .strict(),
};

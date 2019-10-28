const Joi = require("@hapi/joi");

function joiValidation(types) {
  return function(req, res, next) {
    const keys = Object.entries(types);
    for (let i = 0; i < keys.length; i += 1) {
      const [value, schema] = keys[i];
      const { error } = Joi.validate(req[value], schema);
      if (error) return res.status(400).send(error);
    }
    return next();
  };
}

module.exports = joiValidation;

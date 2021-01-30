const Joi = require('joi');

exports.JSONDetailsValidator = Joi.object({  
  rule: Joi.object().keys({
    field: Joi.string().required(),
    condition: Joi.string().required(),
    condition_value: Joi.required(),
  }).required(),
  data: Joi.alternatives().try(Joi.object(), Joi.array(), Joi.string()).required()
});
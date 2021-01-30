const Joi = require('joi');

// Registration input validation
exports.JSONDetailsValidator = Joi.object({  
  rule: Joi.object().required(),
  // data: Joi.string().required()
});

exports.ruleValidator = Joi.object({  
  rule: Joi.object().keys({
    field: Joi.string().required(),
    condition: Joi.string().required(),
    condition_value: Joi.string().required(),
  }).required()
});

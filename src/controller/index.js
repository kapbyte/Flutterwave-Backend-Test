const {
  JSONDetailsValidator,
  ruleValidator
} = require('../helpers');


// Home API controller
exports.homeController = (req, res) => {
  return res.status(200).json({
    message: "My Rule-Validation API",
    status: "success",
    data: {
      name: "Kelechi Chinaka",
      github: "@ke1echi",
      email: "mrkelechichinaka@gmail.com",
      mobile: "08066115071",
      twitter: "@kapbyte"
    }
  });
};

// validate-rule API controller
exports.validateController = (req, res) => {

  // Validate rule field
  const { error } = ruleValidator.validate(req.body);

  console.log(error);

  if (!error) {
    return res.status(200).send('Rule OKAY');
  }

  if (error.details[0].context.type === "object") {
    return res.status(400).json({
      message: `${error.details[0].path[0]} should be an object.`,
      status: "error",
      data: null
    });
  }

  if (error.details[0].type === "any.required") {
    return res.status(400).json({
      message: `${error.details[0].message}.`,
      status: "error",
      data: null
    });
  }

  

};

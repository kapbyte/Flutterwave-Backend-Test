// Home API controller
exports.homeController = (req, res) => {
  return res.status(200).json({
    "message": "My Rule-Validation API",
    "status": "success",
    "data": {
      "name": "Kelechi Chinaka",
      "github": "@ke1echi",
      "email": "mrkelechichinaka@gmail.com",
      "mobile": "08066115071",
      "twitter": "@kapbyte"
    }
  });
};
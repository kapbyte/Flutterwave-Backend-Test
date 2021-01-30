const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
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
});

// Use route
const controllerRoute = require('./src/router');
app.use(controllerRoute);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
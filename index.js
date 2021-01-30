const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

// Use route
const controllerRoute = require('./src/router');
app.use(controllerRoute);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
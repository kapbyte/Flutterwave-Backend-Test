const router = require('express').Router();

// Import controllers
const { 
  homeController
} = require('../controller/index');

router.get('/', homeController);

module.exports = router;
const router = require('express').Router();

// Import controllers
const { 
  homeController,
  validateController
} = require('../controller/index');

router.get('/', homeController);
router.post('/validate-rule', validateController);

module.exports = router;
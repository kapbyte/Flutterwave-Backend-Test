const router = require('express').Router();

// Import controllers
const {
  validateController
} = require('../controller/index');

router.post('/validate-rule', validateController);

module.exports = router;
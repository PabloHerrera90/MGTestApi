const express = require('express');

let router = express.Router();

const authenticateController = require('../controllers/authenticateController');

router.route('/')
  .get(authenticateController.index)
  .put(authenticateController.find,authenticateController.create);

module.exports = router;

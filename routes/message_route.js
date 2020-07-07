const express = require('express');

let router = express.Router();

const messageController = require('../controllers/messageController');
const authenticate = require('../middlewares/authenticate');

router.route('/message')
  .get(authenticate,messageController.index)
  .post(authenticate,messageController.create);

router.route('/message/:id')
  .get(authenticate,messageController.findById,messageController.showById);

router.route('/messages/:id')
  .get(authenticate,messageController.findByTag,messageController.showByTag);


module.exports = router;

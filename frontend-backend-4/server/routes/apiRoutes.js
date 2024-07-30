const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControllers');

router.get('/data', apiController.getData);

module.exports = router;

// The routing logic for the pages that doctors will see
const express = require('express');
const router = express.Router();
const availabilityController = require('../controllers/availability');

router.get('/patient', availabilityController.calendar)

module.exports = router;
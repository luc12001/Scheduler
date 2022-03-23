// The routing logic for the pages that receptionists will see
const path = require('../utils/path');
const express = require('express');
const router = express.Router();
const receptionistController = require('../controllers/receptionist');

//admin routes
router.get('/', receptionistController.setAppointment);

//router.post('/users/receptionist', receptionistController);


module.exports = router;
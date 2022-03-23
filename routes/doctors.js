// The routing logic for the pages that doctors will see
const path = require('../utils/path');
const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctor');
//note routes
router.get('/note', doctorController.getNotes);
router.post('/pnote', doctorController.addNotes);

router.get('/', doctorController.getAppointments);

module.exports = router;
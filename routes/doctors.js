// The routing logic for the pages that doctors will see

const express = require('express');
const router = express.Router();

const availabilityController = require('../controllers/availability');

router.get('/doctors', availabilityController.calendar);
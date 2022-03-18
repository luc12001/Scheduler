//const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

//admin routes
router.get('/admin/login', adminController.login);

router.get('/admin/admin', adminController.admin);


module.exports = router;

exports.availability = (req, res, next) => {

};


exports.doctorAvailability = (req, res, next) => {

};


exports.setAppointment = (req, res, next) => {

};

exports.logIn = (req, res, next) => {

};


exports.signUp = (req, res, next) => {

};


exports.assignRole = (req, res, next) => {

};


exports.getAllPendingRequests = (req, res, next) => {

};


exports.approveRequest = (req, res, next) => {

};


exports.denyRequest = (req, res, next) => {

};

exports.getDoctorList = (req, res, next) => {

};


exports.cancelAppointment = (req, res, next) => {

};


exports.editAppointment = (req, res, next) => {

};


exports.editAppointmentRequest = (req, res, next) => {

};


exports.editAvailability = (req, res, next) => {

};


exports.appointmentRequest = (req, res, next) => {

};


exports.addUser = (req, res, next) => {

};


exports.addNotes = (req, res, next) => {

};
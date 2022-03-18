//The logic for authenticating someone, signing up, and logging in
//const path = require('path')
//const express = require('express');

exports.login = (req, res, next) => {
    //console.log(req);
    res.render('views/admin/login');
}

exports.admin = (req, res, next) => {
    res.render('views/admin/admin');
}
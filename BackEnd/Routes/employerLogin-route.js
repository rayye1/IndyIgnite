const express = require('express');
var path = require('path');

const loginRoutes = require('./../Controllers/employerLoginController.js');

const router = express.Router();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../..', '/Frontend', '/HTML/employer.html'));
})

router.get('/employerLogin', loginRoutes.usersLogIn)
router.post('/create', loginRoutes.usersCreate)

module.exports = router;

const express = require('express');
var path = require('path');

const loginRoutes = require('./../Controllers/employeeLoginController.js');

const router = express.Router();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../..', '/Frontend', '/HTML/employee.html'));
})

router.get('/employeeLogin', loginRoutes.usersLogIn)
router.post('/create', loginRoutes.usersCreate)

module.exports = router;

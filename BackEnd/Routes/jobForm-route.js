const express = require('express');
var path = require('path');

const jobFormRoutes = require('./../Controllers/jobFormController.js');

const router = express.Router();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../..', '/Frontend', '/HTML/jobForm.html'));
})

router.post('/addJob', jobFormRoutes.jobAdd);

module.exports = router;

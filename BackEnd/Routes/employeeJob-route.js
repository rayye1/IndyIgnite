const express = require('express');
var path = require('path');

const jobRoutes = require('./../Controllers/employeeJobController.js');

const router = express.Router();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../..', '/Frontend', '/HTML/employeeJob.html'));
})

router.get('/getJobs', jobRoutes.getJobs)

module.exports = router;

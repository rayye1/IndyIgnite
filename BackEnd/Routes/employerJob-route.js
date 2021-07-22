const express = require('express');
var path = require('path');

const jobRoutes = require('./../Controllers/employerJobController.js');

const router = express.Router();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../..', '/Frontend', '/HTML/employerJob.html'));
})

router.get('/getJobs', jobRoutes.getJobs)
router.post('/remove', jobRoutes.removeJob)

module.exports = router;

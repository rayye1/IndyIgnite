var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/FrontEnd'));

const employeeloginRouter = require('./BackEnd/Routes/employeeLogin-Route');
const employeeJobRouter = require('./BackEnd/Routes/employeeJob-Route')
const employerloginRouter = require('./BackEnd/Routes/employerLogin-Route');
const jobRouter = require('./BackEnd/Routes/jobForm-route');
const employerJobRouter = require('./BackEnd/Routes/employerJob-route');

app.use('/employeeLogin', employeeloginRouter);
app.use('/employeeJob', employeeJobRouter);
app.use('/employerLogin', employerloginRouter);
app.use('/jobForm', jobRouter);
app.use('/employerJob', employerJobRouter);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/FrontEnd', '/HTML/main.html'));
});

app.get('/empMain', function (req, res) {
    res.sendFile(path.join(__dirname, '/FrontEnd', '/HTML/employeeMain.html'));
});

app.get('/tutVideo', function (req, res) {
    res.sendFile(path.join(__dirname, '/FrontEnd', '/HTML/tutVideo.html'));
});

app.get('/quiz', function (req, res) {
    res.sendFile(path.join(__dirname, '/FrontEnd', '/HTML/quiz.html'));
});

var server = app.listen(process.env.PORT || 5000, function () {
    console.log('Node server is running..');
});
const c = require('../../mysqlconnection.js');

exports.jobAdd = async (req, res) => {

	var username = req.body.params.username;
	var company = req.body.params.company;
	var position = req.body.params.pos;
	var description = req.body.params.des;

	console.log(company)

	c.connection.query('INSERT INTO job(employer_username, company, title, description) VALUES (?, ?, ?, ?)', [username, company, position, description], function(error, results, fields){
		if(error){
			//End the connection
			c.connection.end();
			throw error;
		}
        else {
            console.log("Job successfully created!");
			res.json({ success: 1});
        }
	});
}

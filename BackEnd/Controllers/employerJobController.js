const c = require('../../mysqlconnection.js');

exports.getJobs = async(req, res) => {

    let username = req.query.username;

    c.connection.query("SELECT * FROM job WHERE employer_username = ?;" , [username], function(error, results, fields){
		if(error){
			//End the connection
			c.connection.end();
			throw error;
		}
        else{
            console.log("Got the Jobs");
            res.json(results);
		}
	});

}

exports.removeJob = async(req, res) => {

    let username = req.body.username;
    let job_id = req.body.job;

    c.connection.query("DELETE FROM job WHERE employer_username = ? and job_id = ?" , [username, job_id], function(error, results, fields){
		if(error){
			//End the connection
			console.log('no remove')
			c.connection.end();
			throw error;
		}
        else{
            console.log("Got the Jobs");
            res.json(results);
		}
	});
}
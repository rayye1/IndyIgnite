const c = require('../../mysqlconnection.js');


exports.getJobs = async(req, res) => {

    c.connection.query("SELECT * FROM job;" , [], function(error, results, fields){
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
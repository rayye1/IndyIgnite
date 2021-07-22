const c = require('../../mysqlconnection.js');

exports.usersLogIn = async (req, res) => {

	var username = req.query.username;
	var password = req.query.password;

	c.connection.query('SELECT * FROM  employer WHERE username = ? AND password = ?', [username, password], function(error, results, fields){
		if(error){
			c.connection.end();
			throw error;
		}else{
			if(results.length == 1){
				console.log("User successfully logged in!");
				res.json({success: 1});
			}else{
				console.log("User log in failed! No users found with specific username and password.");
				res.json({success: 0});
			}
		}
	});
}

exports.usersCreate = async (req, res) => {

	var username = req.body.username;
	var password = req.body.password;

	c.connection.query('SELECT * FROM employer WHERE username = ?', [username], function(error, results, fields){
		if(error){
			c.connection.end();
			throw error;
		}

		if(results.length == 0){
			c.connection.query('INSERT INTO employer (username, password) VALUES (?, ?)', [username, password], function(error, results, fields){
				if(error){
					c.connection.end();
					throw error;
				}
				console.log("User successfully created!");
				res.json({ success: 1});
			});
		}else{
			console.log("Failed to create user! Username already in use.");
			res.json({ success: 0});
		}
	});
}
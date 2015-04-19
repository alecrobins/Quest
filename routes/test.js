//XXX: Delete this file when in production
// Routes for /test
var db = require('../db');

// Return a list of users from the data base
exports.list = function (req, res){

	db.getConnection(function(err,connection){
			// check for connection error
			if (err) {
				connection.release();
				res.json({"code" : 100, "status" : "Error in connection database"});
				return;
			}

			console.log('connected as id ' + connection.threadId);

			// Conduct the query
			connection.query("SELECT * from user",

				function(err,rows){
						connection.release();
						if(!err) {
								res.json(rows);
						}
				});

			// Render an error if there was a mistake
			connection.on('error', function(err) {
						res.json({"code" : 100, "status" : "Error in connection database"});
						return;
			});
	});

}

// Test a user inseret
exports.save = function (req, res){

	db.getConnection(function(err,connection){

		// check for connection error
		if (err) {
			connection.release();
			res.json({"code" : 100, "status" : "Error in connection database"});
			return;
		}

		var user = {
			username: req.body.username,
			password: req.body.password,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email
		};

		console.log('connected as id ' + connection.threadId);

		connection.query("INSERT INTO user SET ?", user, function(err,rows){
			connection.release();

			if(!err)
				res.status(200).send("successfull");
			else
				res.status(400).send("something went whooy");  // send a bad request
		})

	});

}

// Get a user name with a passed parameter
exports.user_name = function (req,res){

	db.getConnection(function(err,connection){

		// check for connection error
		if (err) {
			connection.release();
			res.json({"code" : 100, "status" : "Error in connection database"});
			return;
		}

		var user_name = req.params.user_name;

		// Conduct the query
		connection.query("SELECT * from user where username = " + connection.escape(user_name),
			function(err,rows){
					connection.release();
					if(!err) {
							res.json(rows);
					}else{
							res.status(400).send("Error finding the user name");
					}
			});

		// Render an error if there was a mistake
		connection.on('error', function(err) {
					res.json({"code" : 100, "status" : "Error in connection database"});
					return;
		});


	});
}

// Delete the user with the passed user name
exports.delete = function (req, res){
	db.getConnection(function(err,connection){

		// check for connection error
		if (err) {
			connection.release();
			res.json({"code" : 100, "status" : "Error in connection database"});
			return;
		}

		var user_name = req.params.user_name;

		// Conduct the query
		connection.query("DELETE FROM user WHERE username = " + connection.escape(user_name),
			function(err,rows){
					connection.release();
					if(!err) {
							res.status(200).send("Successfully deleted");
					}else{
							res.status(400).send("Error delete the user name");
					}
			});

		// Render an error if there was a mistake
		connection.on('error', function(err) {
					res.json({"code" : 100, "status" : "Error in connection database"});
					return;
		});


	});
}

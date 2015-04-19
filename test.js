// Routes for /test

var db = require('./db');

// Return a list of users from the data base
exports.list = function (req, res){
	handle_database(req,res);
}

// Test a user inseret
exports.save = function (req, res){
	save_user(req,res);
}

// test handelr for test request
function handle_database(req,res) {

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

// save the user to the db
function save_user(req,res){

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

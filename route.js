var test = require('./routes/test');

// Handle all the routes
module.exports = function(app){

	// TESTING ROUTES
	app.get("/test", test.list);
	app.post("/test", test.save);
	app.get("/test/:user_name", test.user_name);
	app.delete("/test/:user_name", test.delete);

	// Fix problem with redirects in HTML5 mode
	app.get('*', function(req, res) {
		res.redirect('/#' + req.originalUrl);
	});
	
}

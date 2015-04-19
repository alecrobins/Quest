var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var async = require('async');

var test = require('./test');

var app = express();

module.exports = app;

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/test", test.list);

app.post("/test", test.save);

// Fix problem with redirects in HTML5 mode
app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});


// Start the server on port 3000
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
